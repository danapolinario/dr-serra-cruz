import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import RichTextEditor from '../../components/admin/RichTextEditor';
import {
  checkAuth,
  createPost,
  fetchPost,
  slugifyTitle,
  todayLocalIso,
  toInputDate,
  triggerPublish,
  updatePost,
  uploadImage,
} from '../../lib/adminApi';

const DEFAULT_REVIEWER = 'CRM-SP 239793 · RQE ortopedia 107916';
const today = todayLocalIso();

const AdminPostEditor: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const isNew = id === 'novo' || !id;
  const navigate = useNavigate();

  const [loading, setLoading] = useState(!isNew);
  const [saving, setSaving] = useState(false);
  const [publishing, setPublishing] = useState(false);
  const [error, setError] = useState('');
  const [publishMessage, setPublishMessage] = useState('');

  const [postId, setPostId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [slugTouched, setSlugTouched] = useState(false);
  const [excerpt, setExcerpt] = useState('');
  const [category, setCategory] = useState('Ortopedia');
  const [contentHtml, setContentHtml] = useState('<p></p>');
  const [heroImageUrl, setHeroImageUrl] = useState('');
  const [heroAlt, setHeroAlt] = useState('');
  const [status, setStatus] = useState<'draft' | 'published'>('draft');
  const [datePublished, setDatePublished] = useState(today);
  const [dateReviewed, setDateReviewed] = useState(today);
  const [reviewerCredentials, setReviewerCredentials] = useState(DEFAULT_REVIEWER);
  const [schemaAbout, setSchemaAbout] = useState('');
  const [uploading, setUploading] = useState(false);

  useEffect(() => {
    checkAuth().then((ok) => {
      if (!ok) {
        navigate('/admin', { replace: true });
        return;
      }
      if (!isNew && id) {
        fetchPost(id)
          .then((post) => {
            setPostId(post.id);
            setTitle(post.title);
            setSlug(post.slug);
            setSlugTouched(true);
            setExcerpt(post.excerpt);
            setCategory(post.category);
            setContentHtml(post.contentHtml || '<p></p>');
            setHeroImageUrl(post.heroImageUrl);
            setHeroAlt(post.heroAlt);
            setStatus(post.status);
            setDatePublished(toInputDate(post.datePublished) || today);
            setDateReviewed(toInputDate(post.dateReviewed) || today);
            setReviewerCredentials(post.reviewerCredentials ?? DEFAULT_REVIEWER);
            setSchemaAbout(post.schemaAbout ?? '');
          })
          .catch((e) => setError(e instanceof Error ? e.message : 'Erro ao carregar'))
          .finally(() => setLoading(false));
      }
    });
  }, [id, isNew, navigate]);

  useEffect(() => {
    if (!slugTouched && title) {
      setSlug(slugifyTitle(title));
    }
  }, [title, slugTouched]);

  async function handleImageUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    setUploading(true);
    setError('');
    try {
      const url = await uploadImage(file);
      setHeroImageUrl(url);
      if (!heroAlt) setHeroAlt(title || file.name);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro no upload');
    } finally {
      setUploading(false);
      e.target.value = '';
    }
  }

  async function save(targetStatus: 'draft' | 'published') {
    setSaving(true);
    setError('');
    setPublishMessage('');

    const payload = {
      title: title.trim(),
      slug: slug.trim(),
      excerpt: excerpt.trim(),
      category: category.trim() || 'Ortopedia',
      contentHtml,
      heroImageUrl: heroImageUrl.trim(),
      heroAlt: (heroAlt || title).trim(),
      status: targetStatus,
      datePublished: datePublished || null,
      dateReviewed: dateReviewed || null,
      reviewerCredentials: reviewerCredentials.trim() || null,
      schemaAbout: schemaAbout.trim() || null,
    };

    try {
      let savedId = postId;
      if (isNew || !postId) {
        const created = await createPost(payload);
        savedId = created.id;
        setPostId(created.id);
        setStatus(created.status);
        setDatePublished(toInputDate(created.datePublished) || datePublished);
        setDateReviewed(toInputDate(created.dateReviewed) || dateReviewed);
        navigate(`/admin/posts/${created.id}`, { replace: true });
      } else {
        const updated = await updatePost({ id: postId, ...payload });
        setStatus(updated.status);
        setDatePublished(toInputDate(updated.datePublished) || datePublished);
        setDateReviewed(toInputDate(updated.dateReviewed) || dateReviewed);
      }

      if (targetStatus === 'published') {
        setPublishing(true);
        await triggerPublish();
        setPublishMessage('Deploy iniciado. O post estará no ar em aproximadamente 3 minutos.');
      } else {
        setPublishMessage('Rascunho salvo.');
      }

      return savedId;
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erro ao salvar');
      return null;
    } finally {
      setSaving(false);
      setPublishing(false);
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-100 text-slate-500">
        Carregando editor…
      </div>
    );
  }

  const inputClass =
    'w-full rounded-xl border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white border-b border-slate-200 sticky top-0 z-10">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <Link to="/admin/posts" className="text-sm text-blue-700 hover:underline">
              ← Voltar à lista
            </Link>
            <h1 className="text-xl font-bold text-slate-900 mt-1">
              {isNew && !postId ? 'Novo post' : 'Editar post'}
            </h1>
          </div>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              disabled={saving || publishing}
              onClick={() => save('draft')}
              className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold hover:bg-slate-50 disabled:opacity-60"
            >
              {saving && status !== 'published' ? 'Salvando…' : 'Salvar rascunho'}
            </button>
            <button
              type="button"
              disabled={saving || publishing}
              onClick={() => save('published')}
              className="rounded-xl bg-blue-700 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-800 disabled:opacity-60"
            >
              {publishing ? 'Publicando…' : 'Publicar'}
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 py-8 space-y-6">
        {error ? <p className="text-red-600 bg-red-50 border border-red-100 rounded-xl p-4">{error}</p> : null}
        {publishMessage ? (
          <p className="text-green-800 bg-green-50 border border-green-100 rounded-xl p-4">{publishMessage}</p>
        ) : null}

        <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Título</label>
            <input className={inputClass} value={title} onChange={(e) => setTitle(e.target.value)} required />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Slug (URL)</label>
            <input
              className={inputClass}
              value={slug}
              onChange={(e) => {
                setSlugTouched(true);
                setSlug(e.target.value);
              }}
            />
            <p className="text-xs text-slate-500 mt-1">/blog/{slug || 'seu-slug'}</p>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Resumo (excerpt)</label>
            <textarea
              className={`${inputClass} min-h-[90px]`}
              value={excerpt}
              onChange={(e) => setExcerpt(e.target.value)}
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Categoria</label>
              <input className={inputClass} value={category} onChange={(e) => setCategory(e.target.value)} />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Data de publicação</label>
              <input
                type="date"
                className={inputClass}
                value={datePublished}
                onChange={(e) => setDatePublished(e.target.value)}
              />
            </div>
          </div>
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <h2 className="font-bold text-slate-900">Imagem hero</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Upload</label>
              <input type="file" accept="image/*" onChange={handleImageUpload} disabled={uploading} />
              {uploading ? <p className="text-sm text-slate-500 mt-1">Enviando…</p> : null}
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">URL da imagem</label>
              <input
                className={inputClass}
                value={heroImageUrl}
                onChange={(e) => setHeroImageUrl(e.target.value)}
                placeholder="https://..."
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Texto alternativo (alt)</label>
            <input className={inputClass} value={heroAlt} onChange={(e) => setHeroAlt(e.target.value)} />
          </div>
          {heroImageUrl ? (
            <img src={heroImageUrl} alt={heroAlt || title} className="max-h-48 rounded-xl object-cover" />
          ) : null}
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <h2 className="font-bold text-slate-900">Conteúdo</h2>
          <RichTextEditor value={contentHtml} onChange={setContentHtml} />
        </section>

        <section className="bg-white rounded-2xl border border-slate-200 p-6 space-y-4">
          <h2 className="font-bold text-slate-900">SEO / E-E-A-T</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Data de revisão médica</label>
              <input
                type="date"
                className={inputClass}
                value={dateReviewed}
                onChange={(e) => setDateReviewed(e.target.value)}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-1">Credenciais do revisor</label>
              <input
                className={inputClass}
                value={reviewerCredentials}
                onChange={(e) => setReviewerCredentials(e.target.value)}
              />
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Tema (schema.org about)</label>
            <input
              className={inputClass}
              value={schemaAbout}
              onChange={(e) => setSchemaAbout(e.target.value)}
              placeholder="Ex.: Lesão meniscal"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default AdminPostEditor;
