# Database Schema

## Core tables

- `profiles`
- `members`
- `branches`
- `membership_contributions`
- `accounts`
- `savings_products`
- `member_savings`
- `loan_products`
- `loan_applications`
- `loans`
- `loan_repayments`
- `transactions`
- `transfers`
- `notifications`
- `statements`
- `audit_logs`

## Important rules

- Use PostgreSQL `NUMERIC` for monetary values.
- Use foreign keys and indexes on frequently accessed columns.
- Enforce statuses with check constraints.
- Keep member access restricted by `auth.uid()` via Row Level Security.
