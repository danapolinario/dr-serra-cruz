-- Schema do blog dinâmico (Neon Postgres)
-- Aplicar uma vez: psql $DATABASE_URL -f scripts/db/schema.sql

CREATE TABLE IF NOT EXISTS posts (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  slug TEXT NOT NULL UNIQUE,
  title TEXT NOT NULL,
  excerpt TEXT NOT NULL DEFAULT '',
  category TEXT NOT NULL DEFAULT 'Ortopedia',
  content_html TEXT NOT NULL DEFAULT '',
  hero_image_url TEXT NOT NULL DEFAULT '',
  hero_alt TEXT NOT NULL DEFAULT '',
  status TEXT NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published')),
  date_published DATE,
  date_reviewed DATE,
  reviewer_credentials TEXT,
  schema_about TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS posts_status_idx ON posts (status);
CREATE INDEX IF NOT EXISTS posts_date_published_idx ON posts (date_published DESC NULLS LAST);
