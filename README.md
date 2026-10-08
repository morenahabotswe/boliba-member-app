# Boliba Savings & Credit

Boliba Member Platform is a production-oriented member portal built with React + TypeScript and Supabase.

## Overview

This app is designed as the official Boliba digital member platform with:
- secure authentication
- member profile and onboarding
- account overview
- savings and loan flows
- transfers and notifications
- role-aware protected routes
- database and RLS architecture for future production integration

## Local development

1. Copy `.env.example` to `.env.local`
2. Set your Supabase project values
3. Run `npm install`
4. Run `npm run dev`

## Scripts

- `npm run dev`
- `npm run build`
- `npm run lint`
- `npm run type-check`
- `npm run test`
- `npm run db:push`

## Structure

- `src/` — frontend app
- `supabase/migrations/` — database schema and seed files
- `supabase/functions/` — edge function boundaries
- `docs/` — setup and security guides

## Supabase requirements

The app expects the following environment variables:

- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_ANON_KEY`
- `SUPABASE_SERVICE_ROLE_KEY` for server-side environments only

## Security

- Never expose service-role or secret keys to the browser.
- Do not build financial authorization in React state.
- RLS and backend validation are the source of truth.
