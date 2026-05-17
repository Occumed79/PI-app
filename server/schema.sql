create extension if not exists pgcrypto;

create table if not exists profiles (
  id uuid primary key default gen_random_uuid(),
  name text not null unique,
  group_name text not null,
  dominance integer check (dominance is null or (dominance between 0 and 100)),
  extraversion integer check (extraversion is null or (extraversion between 0 and 100)),
  patience integer check (patience is null or (patience between 0 and 100)),
  formality integer check (formality is null or (formality between 0 and 100)),
  summary text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists saved_comparisons (
  id uuid primary key default gen_random_uuid(),
  title text,
  profile_a text not null,
  profile_b text not null,
  notes text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists inference_runs (
  id uuid primary key default gen_random_uuid(),
  profile_name text not null,
  input jsonb not null default '{}'::jsonb,
  output jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
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

drop trigger if exists saved_comparisons_set_updated_at on saved_comparisons;
create trigger saved_comparisons_set_updated_at
before update on saved_comparisons
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
