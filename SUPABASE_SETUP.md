# Boliba Supabase Setup

## Before you start

Create a new Supabase project and then configure the following values in `.env.local`:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Local database setup

```bash
npm install
npx supabase login
npx supabase link --project-ref your-project-ref
npm run db:push
```

## Auth configuration

Enable these auth providers as needed:
- Email/password
- Phone OTP
- Magic link

## Storage

Create buckets:
- avatars
- loan-documents
- statements
- receipts

Set private access for sensitive content.

## Edge Functions

Deploy secure functions for:
- create-loan-application
- submit-loan-application
- initiate-internal-transfer
- initiate-ecocash-transfer
- generate-statement
- send-notification
- process-payment-webhook
