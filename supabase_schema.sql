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
  university_id text not null,
  faculty text not null,
  academic_year text not null,
  subteam_first text not null,
  subteam_second text not null,
  time_commitment text default '5 to 10 hours',
  skills text,
  why_join text not null,
  portfolio_url text,
  status text not null default 'New' check (status in ('New', 'Reviewed', 'Interview', 'Accepted', 'Rejected')),
  hr_notes text default '',
  
  -- Prevent duplicate applications by enforcing unique email
  constraint applications_email_unique unique (email)
);

-- 2. Create search & filtering performance indexes
create index if not exists idx_applications_email on public.applications (email);
create index if not exists idx_applications_status on public.applications (status);
create index if not exists idx_applications_subteam_first on public.applications (subteam_first);
create index if not exists idx_applications_created_at on public.applications (created_at desc);

-- 3. Enable Row Level Security (RLS)
alter table public.applications enable row level security;

-- 4. RLS Policy: Public can INSERT only (Anonymous applicants submit form)
create policy "Allow public anonymous insert"
  on public.applications
  for insert
  to anon, authenticated
  with check (true);

-- 5. RLS Policy: Only authenticated HR users can SELECT (Read applicant table)
create policy "Allow authenticated HR to view applications"
  on public.applications
  for select
  to authenticated
  using (true);

-- 6. RLS Policy: Only authenticated HR users can UPDATE (Update status and notes)
create policy "Allow authenticated HR to update applications"
  on public.applications
  for update
  to authenticated
  using (true)
  with check (true);
