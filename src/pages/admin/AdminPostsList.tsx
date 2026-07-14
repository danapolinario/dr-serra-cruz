import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { checkAuth, deletePost, fetchPosts, logout, type AdminPost } from '../../lib/adminApi';

const AdminPostsList: React.FC = () => {
  const navigate = useNavigate();
  const [posts, setPosts] = useState<AdminPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    checkAuth().then((ok) => {
      if (!ok) {
        navigate('/admin', { replace: true });
        return;
      }
      fetchPosts()
        .then(setPosts)
        .catch((e) => setError(e instanceof Error ? e.message : 'Erro ao carregar'))
        .finally(() => setLoading(false));
    });
  }, [navigate]);

  async function handleLogout() {
    await logout();
    navigate('/admin', { replace: true });
  }

  async function handleDelete(id: string, title: string) {
    if (!confirm(`Excluir o post "${title}"?`)) return;
    try {
      await deletePost(id);
      setPosts((prev) => prev.filter((p) => p.id !== id));
    } catch (e) {
      alert(e instanceof Error ? e.message : 'Erro ao excluir');
    }
  }

  return (
    <div className="min-h-screen bg-slate-100">
      <header className="bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div>
            <h1 className="text-xl font-bold text-slate-900">Posts do blog</h1>
            <p className="text-sm text-slate-500">Gerencie rascunhos e publicações</p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              to="/admin/posts/novo"
              className="rounded-xl bg-blue-700 text-white px-4 py-2 text-sm font-semibold hover:bg-blue-800"
            >
              Novo post
            </Link>
            <button
              type="button"
              onClick={handleLogout}
              className="rounded-xl border border-slate-200 px-4 py-2 text-sm text-slate-600 hover:bg-slate-50"
            >
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-8">
        {loading ? <p className="text-slate-500">Carregando…</p> : null}
        {error ? <p className="text-red-600">{error}</p> : null}

        {!loading && !error && posts.length === 0 ? (
          <div className="bg-white rounded-2xl p-8 text-center text-slate-600">
            Nenhum post ainda.{' '}
            <Link to="/admin/posts/novo" className="text-blue-700 font-semibold hover:underline">
              Criar o primeiro
            </Link>
          </div>
        ) : null}

        <div className="space-y-4">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-2xl border border-slate-200 p-5 flex flex-col sm:flex-row sm:items-center gap-4 justify-between"
            >
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span
                    className={`text-xs font-semibold uppercase px-2 py-0.5 rounded-full ${
                      post.status === 'published'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-amber-100 text-amber-800'
                    }`}
                  >
                    {post.status === 'published' ? 'Publicado' : 'Rascunho'}
                  </span>
                  <span className="text-xs text-slate-400">/{post.slug}</span>
                </div>
                <h2 className="font-bold text-slate-900">{post.title}</h2>
                <p className="text-sm text-slate-500 mt-1 line-clamp-2">{post.excerpt || 'Sem resumo'}</p>
              </div>
              <div className="flex gap-2 shrink-0">
                <Link
                  to={`/admin/posts/${post.id}`}
                  className="rounded-lg border border-slate-200 px-3 py-2 text-sm font-medium hover:bg-slate-50"
                >
                  Editar
                </Link>
                <button
                  type="button"
                  onClick={() => handleDelete(post.id, post.title)}
                  className="rounded-lg border border-red-200 text-red-700 px-3 py-2 text-sm font-medium hover:bg-red-50"
                >
                  Excluir
                </button>
              </div>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AdminPostsList;
