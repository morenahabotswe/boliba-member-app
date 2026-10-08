# Boliba Member Platform - Preview

## Quick Start

This is the **Boliba Savings & Credit digital member platform** — a production-ready React + TypeScript application built for secure member authentication, account management, savings, loans, transfers, and notifications.

## Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

The app will open at `http://localhost:3000`.

## Default Test Credentials

For demo/preview purposes, the app accepts any email and password:

- **Email**: `demo@boliba.co.ls`
- **Password**: `demo1234`

> **Note**: In production, real Supabase Auth is required. Demo credentials work only when Supabase is not configured.

## Features

### Member Portal
- **Dashboard** — Real-time balance overview, quick actions, recent activity
- **Accounts** — View account details, check balances, see transactions
- **Transfers** — Send money to other members securely
- **Loans** — View loan products, apply for loans, track application status
- **Savings** — Manage savings products and growth
- **Statements** — Download account statements and history
- **Notifications** — Stay informed on transactions, loans, and security updates
- **Profile** — Manage personal information and settings

### Security & Architecture
- Row Level Security (RLS) on all protected tables
- Protected routes with session validation
- Supabase Auth integration (Email/password, OTP ready)
- Service-based architecture for clean separation
- Idempotent transfer operations
- Secure backend boundaries for financial operations

## Project Structure

```
src/
  ├── components/     # Reusable UI components
  ├── pages/          # Page/route components
  ├── services/       # Business logic & API integration
  ├── lib/            # Utilities & configuration
  ├── types/          # TypeScript types
  └── utils/          # Helpers & validators

supabase/
  ├── migrations/     # Database schema & RLS
  ├── functions/      # Edge functions (coming)
  └── config.toml     # Supabase configuration
```

## Environment Setup

Copy `.env.example` to `.env.local` and fill in your Supabase credentials:

```bash
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Lint code
npm run type-check   # TypeScript type checking
npm run test         # Run tests
```

## Supabase Configuration

See `SUPABASE_SETUP.md` for detailed Supabase setup instructions.

See `DATABASE_SCHEMA.md` for the full database architecture.

See `SECURITY.md` for security policies and RLS details.

## Design

The app uses the official Boliba brand colors:
- **Primary**: #1E237E (Deep Navy)
- **Accent**: #00AEEF (Bright Blue)
- **Light Blue**: #A7E6F4
- **Dark Navy**: #0A2A4A

Mobile-first design with responsive desktop layout via sidebar navigation.

## Production Deployment

See `DEPLOYMENT.md` for deployment guide.

## License

Boliba Savings & Credit © 2026
