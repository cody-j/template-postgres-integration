create schema if not exists "test";
create table if not exists "test"."test" (
    "id" uuid default gen_random_uuid() unique
    , "data" jsonb
    , "createdAt" timestamp with time zone default now()
    , "updatedAt" timestamp with time zone
    , "deletedAt" timestamp with time zone
    , primary key ("id")
);
