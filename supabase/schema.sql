-- Balm of Gilead RCCG Area Church
-- Apply in a new Supabase project using the SQL editor.
-- Keep SUPABASE_SERVICE_ROLE_KEY on the server only. Never put it in browser code.

create extension if not exists pgcrypto;

create table if not exists public.admin_users (
  id uuid primary key references auth.users(id) on delete cascade,
  role text not null check (role in ('super_admin','editor','pastoral')),
  active boolean not null default true,
  created_at timestamptz not null default now()
);

create table if not exists public.form_submissions (
  id uuid primary key default gen_random_uuid(),
  submission_type text not null check (submission_type in ('prayer_request','counselling','visitor','event_registration','testimony','contact','newsletter')),
  full_name text,
  email text,
  phone text,
  message text,
  response_method text,
  payload jsonb not null default '{}'::jsonb,
  status text not null default 'new' check (status in ('new','in_review','responded','closed')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.site_content (
  id uuid primary key default gen_random_uuid(),
  content_type text not null check (content_type in ('events','sermons','announcements','ministries','testimonies','house_fellowships','leadership','service_schedules','gallery')),
  title text not null,
  slug text not null,
  summary text not null default '',
  body text not null default '',
  data jsonb not null default '{}'::jsonb,
  published boolean not null default false,
  starts_at timestamptz,
  created_by uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique(content_type,slug)
);

create index if not exists form_submissions_created_at_idx on public.form_submissions(created_at desc);
create index if not exists form_submissions_type_status_idx on public.form_submissions(submission_type,status);
create index if not exists site_content_public_idx on public.site_content(content_type,published,starts_at);

alter table public.admin_users enable row level security;
alter table public.form_submissions enable row level security;
alter table public.site_content enable row level security;

-- No direct anonymous/authenticated table access. All operations pass through
-- server-side API handlers that validate the user's active admin_users record.
revoke all on public.admin_users from anon, authenticated;
revoke all on public.form_submissions from anon, authenticated;
revoke all on public.site_content from anon, authenticated;
grant all on public.admin_users to service_role;
grant all on public.form_submissions to service_role;
grant all on public.site_content to service_role;

-- After creating an auth user in Supabase Auth, add an administrator record:
-- insert into public.admin_users (id, role, active)
-- select id, 'super_admin', true from auth.users where email = 'APPROVED-ADMIN-EMAIL';
--
-- Recommended role use:
-- super_admin: all content and private submission management
-- editor: public website content only
-- pastoral: pastoral submissions (extend API permission checks before use)
--
-- IMPORTANT: Restrict /api/admin private submission actions to super_admin
-- or pastoral roles before adding more pastoral users. The starter API is
-- deliberately conservative; have the church review the role matrix before
-- provisioning additional accounts.
