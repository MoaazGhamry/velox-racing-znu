-- ==============================================================================
-- VELOX RACING — FORMULA STUDENT
-- Zagazig National University (ZNU)
-- Supabase Database Schema & Row Level Security (RLS) for Team Applications
-- ==============================================================================

-- 1. Create the applications table
create table if not exists public.applications (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  full_name text not null,
  email text not null,
  phone text not null,
  university_id text default 'N/A',
  faculty text not null,
  academic_year text not null,
  subteam_first text not null,
  subteam_second text not null,
  time_commitment text default '5 to 10 hours',
  skills text,
  why_join text default '',
  portfolio_url text,
  status text not null default 'New' check (status in ('New', 'Reviewed', 'Interview', 'Accepted', 'Rejected')),
  hr_notes text default '',
  
  -- Prevent duplicate applications by enforcing unique email
  constraint applications_email_unique unique (email)
);

-- Migration for existing databases:
-- alter table public.applications alter column university_id drop not null;
-- alter table public.applications alter column why_join drop not null;
-- alter table public.applications add column if not exists prior_fs_experience text;

-- 2. Create search & filtering performance indexes
create index if not exists idx_applications_email on public.applications (email);
create index if not exists idx_applications_status on public.applications (status);
create index if not exists idx_applications_subteam_first on public.applications (subteam_first);
create index if not exists idx_applications_created_at on public.applications (created_at desc);

-- 3. Enable Row Level Security (RLS)
alter table public.applications enable row level security;

-- 4. Clean up previous policies to prevent conflicts
drop policy if exists "Allow public anonymous insert" on public.applications;
drop policy if exists "Allow public read" on public.applications;
drop policy if exists "Allow authenticated HR to view applications" on public.applications;
drop policy if exists "Allow authenticated HR to update applications" on public.applications;
drop policy if exists "Allow public update" on public.applications;
drop policy if exists "Allow public delete" on public.applications;

-- 5. RLS Policy: Anyone (anon + authenticated) can submit applications
create policy "Allow public anonymous insert"
  on public.applications
  for insert
  to anon, authenticated
  with check (true);

-- 6. RLS Policy: Anyone (anon + authenticated) can view applications in HR & Portal
create policy "Allow public read"
  on public.applications
  for select
  to anon, authenticated
  using (true);

-- 7. RLS Policy: HR can update candidate status and notes
create policy "Allow public update"
  on public.applications
  for update
  to anon, authenticated
  using (true)
  with check (true);

-- 8. RLS Policy: HR can delete candidate applications
create policy "Allow public delete"
  on public.applications
  for delete
  to anon, authenticated
  using (true);

-- NOTE: If you prefer to bypass Row Level Security completely for zero-friction sync, run:
-- alter table public.applications disable row level security;

