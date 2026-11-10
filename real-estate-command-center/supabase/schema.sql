create table if not exists public.properties (
  id text primary key, title text not null, sub_locality text not null,
  area_sqm numeric, asking_price_inr numeric, road_width_m numeric,
  zone_type text, sanad_status boolean default false, clear_title boolean default false,
  status text not null default 'Available' check (status in ('Available','In Token','Sold')),
  gmaps_url text, notes text, created_at timestamptz default now()
);
create table if not exists public.clients (
  id text primary key, name text not null, phone text, priority text not null default 'Warm',
  budget_max_inr numeric, min_road_width_m numeric, preferred_locations text,
  is_active boolean default true, created_at timestamptz default now()
);
create table if not exists public.site_visits (
  id text primary key, client_id text references public.clients(id) on delete cascade,
  property_id text references public.properties(id) on delete cascade,
  visit_date date, status text not null default 'Scheduled',
  rejection_reason text, client_feedback text, created_at timestamptz default now()
);
create index if not exists properties_status_idx on public.properties(status);
create index if not exists properties_locality_idx on public.properties(sub_locality);
create index if not exists clients_priority_idx on public.clients(priority);
create index if not exists site_visits_client_idx on public.site_visits(client_id);
-- For this single-user PIN app, keep RLS enabled and use anon policies only if you
-- accept that the anon key is public. Prefer a private server-only service key
-- for production writes, or add proper per-user auth before storing sensitive client data.
alter table public.properties enable row level security;
alter table public.clients enable row level security;
alter table public.site_visits enable row level security;
-- Optional demo policies. These permit public anon access: use only for private,
-- non-sensitive testing; do not enable in a public production deployment.
-- create policy "demo properties" on public.properties for all to anon using (true) with check (true);
-- create policy "demo clients" on public.clients for all to anon using (true) with check (true);
-- create policy "demo visits" on public.site_visits for all to anon using (true) with check (true);
