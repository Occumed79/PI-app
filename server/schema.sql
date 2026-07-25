create extension if not exists pgcrypto;

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  group_name text not null,
  dominance numeric(5,2) check (dominance is null or dominance between 0 and 100),
  extraversion numeric(5,2) check (extraversion is null or extraversion between 0 and 100),
  patience numeric(5,2) check (patience is null or patience between 0 and 100),
  formality numeric(5,2) check (formality is null or formality between 0 and 100),
  summary text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists employee_pi_profiles (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  position text not null default '',
  department text not null default '',
  pi_profile_id text not null,
  dominance numeric(5,2) not null check (dominance between 0 and 100),
  extraversion numeric(5,2) not null check (extraversion between 0 and 100),
  patience numeric(5,2) not null check (patience between 0 and 100),
  formality numeric(5,2) not null check (formality between 0 and 100),
  assessment_date date,
  notes text not null default '',
  context_overlays jsonb not null default '[]'::jsonb,
  context_notes text not null default '',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

alter table employee_pi_profiles
  add column if not exists context_overlays jsonb not null default '[]'::jsonb;

alter table employee_pi_profiles
  add column if not exists context_notes text not null default '';

create index if not exists employee_pi_profiles_name_idx
  on employee_pi_profiles (lower(name));

create index if not exists employee_pi_profiles_context_overlays_idx
  on employee_pi_profiles using gin (context_overlays);

create table if not exists hsi_mappings (
  lens_id text not null,
  profile_id text not null,
  output_text text,
  fields_raw text,
  fields jsonb not null default '{}'::jsonb,
  notes text,
  status text not null default 'unmapped',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (lens_id, profile_id)
);

create or replace function set_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists profiles_set_updated_at on profiles;
create trigger profiles_set_updated_at
before update on profiles
for each row execute function set_updated_at();

drop trigger if exists employee_pi_profiles_set_updated_at on employee_pi_profiles;
create trigger employee_pi_profiles_set_updated_at
before update on employee_pi_profiles
for each row execute function set_updated_at();

drop trigger if exists hsi_mappings_set_updated_at on hsi_mappings;
create trigger hsi_mappings_set_updated_at
before update on hsi_mappings
for each row execute function set_updated_at();

insert into profiles (name, group_name, dominance, extraversion, patience, formality, summary)
values
  ('Analyzer', 'Analytical', 78, 28, 34, 86, 'High standards, disciplined, reserved, analytical.'),
  ('Controller', 'Analytical', 72, 24, 24, 90, 'Detail-oriented, conservative, precise, fast-moving.'),
  ('Specialist', 'Analytical', 42, 24, 38, 88, 'Precise, factual, careful, respects expertise and authority.'),
  ('Strategist', 'Analytical', 84, 30, 26, 72, 'Big-picture, analytical, organized, change-oriented.'),
  ('Venturer', 'Analytical', 92, 32, 18, 22, 'Independent, goal-oriented, risk-tolerant, self-starting.'),
  ('Altruist', 'Social', 38, 76, 36, 72, 'Cooperative, precise, helpful, team-oriented.'),
  ('Captain', 'Social', 90, 78, 20, 28, 'Assertive leader, change-oriented, people-connected.'),
  ('Collaborator', 'Social', 24, 74, 76, 30, 'Patient, empathetic, team-first, supportive.'),
  ('Maverick', 'Social', 94, 84, 16, 18, 'Visionary, risk-tolerant, persuasive, fast-moving.'),
  ('Persuader', 'Social', 78, 92, 28, 24, 'Socially poised, risk-taking, motivating team builder.'),
  ('Promoter', 'Social', 32, 94, 74, 18, 'Charismatic, casual, persuasive, informal.'),
  ('Adapter', 'Stabilizing', 50, 50, 50, 50, 'Flexible bridge-builder, situationally adaptive.'),
  ('Craftsman / Artisan', 'Stabilizing', 26, 22, 72, 88, 'Accommodating, analytical, precise, careful.'),
  ('Guardian', 'Stabilizing', 22, 28, 82, 90, 'Helpful, steady, diligent, detail-focused.'),
  ('Operator', 'Stabilizing', 24, 36, 88, 70, 'Patient, cooperative, relaxed, conscientious.'),
  ('Individualist', 'Persistent', 84, 28, 76, 24, 'Independent, analytical, methodical, unconventional.'),
  ('Scholar', 'Persistent', 68, 18, 78, 86, 'Accurate, reserved, imaginative, technical expert.')
on conflict (name) do update set
  group_name = excluded.group_name,
  dominance = excluded.dominance,
  extraversion = excluded.extraversion,
  patience = excluded.patience,
  formality = excluded.formality,
  summary = excluded.summary;
