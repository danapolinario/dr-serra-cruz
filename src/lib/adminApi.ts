export type AdminPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  contentHtml: string;
  heroImageUrl: string;
  heroAlt: string;
  status: 'draft' | 'published';
  datePublished: string | null;
  dateReviewed: string | null;
  reviewerCredentials: string | null;
  schemaAbout: string | null;
  createdAt: string;
  updatedAt: string;
};

/** Data de hoje no fuso local (YYYY-MM-DD) — para inputs type="date". */
export function todayLocalIso(): string {
  const now = new Date();
  return [
    now.getFullYear(),
    String(now.getMonth() + 1).padStart(2, '0'),
    String(now.getDate()).padStart(2, '0'),
  ].join('-');
}

/** Converte valor do banco (DATE ou timestamp) para YYYY-MM-DD do input date. */
export function toInputDate(value: string | null | undefined): string {
  if (!value) return '';
  const match = String(value).trim().match(/^(\d{4}-\d{2}-\d{2})/);
  return match ? match[1] : '';
}

async function parseJson<T>(res: Response): Promise<T> {
  const data = await res.json();
  if (!res.ok) {
    throw new Error((data as { error?: string }).error ?? `Erro ${res.status}`);
  }
  return data as T;
}

export async function checkAuth(): Promise<boolean> {
  const res = await fetch('/api/auth', { credentials: 'include' });
  const data = await parseJson<{ authenticated: boolean }>(res);
  return data.authenticated;
}

export async function login(password: string): Promise<void> {
  const res = await fetch('/api/auth', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'login', password }),
  });
  await parseJson(res);
}

export async function logout(): Promise<void> {
  await fetch('/api/auth', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ action: 'logout' }),
  });
}

export async function fetchPosts(): Promise<AdminPost[]> {
  const res = await fetch('/api/posts', { credentials: 'include' });
  const data = await parseJson<{ posts: AdminPost[] }>(res);
  return data.posts;
}

export async function fetchPost(id: string): Promise<AdminPost> {
  const res = await fetch(`/api/posts?id=${encodeURIComponent(id)}`, { credentials: 'include' });
  const data = await parseJson<{ post: AdminPost }>(res);
  return data.post;
}

export async function createPost(payload: Partial<AdminPost> & { title: string }): Promise<AdminPost> {
  const res = await fetch('/api/posts', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await parseJson<{ post: AdminPost }>(res);
  return data.post;
}

export async function updatePost(payload: Partial<AdminPost> & { id: string }): Promise<AdminPost> {
  const res = await fetch('/api/posts', {
    method: 'PUT',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });
  const data = await parseJson<{ post: AdminPost }>(res);
  return data.post;
}

export async function deletePost(id: string): Promise<void> {
  const res = await fetch(`/api/posts?id=${encodeURIComponent(id)}`, {
    method: 'DELETE',
    credentials: 'include',
  });
  await parseJson(res);
}

export async function uploadImage(file: File): Promise<string> {
  const buffer = await file.arrayBuffer();
  const dataBase64 = btoa(
    new Uint8Array(buffer).reduce((acc, byte) => acc + String.fromCharCode(byte), ''),
  );

  const res = await fetch('/api/upload', {
    method: 'POST',
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      filename: file.name,
      contentType: file.type || 'image/webp',
      dataBase64,
    }),
  });

  const data = await parseJson<{ url: string }>(res);
  return data.url;
}

export async function triggerPublish(): Promise<void> {
  const res = await fetch('/api/publish', {
    method: 'POST',
    credentials: 'include',
  });
  await parseJson(res);
}

export function slugifyTitle(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 120);
}
