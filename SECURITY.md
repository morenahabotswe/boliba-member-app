# Security model

This application treats the database and secure backend as the source of truth.

## Required safeguards

- RLS on every protected table.
- Role checks in the backend.
- No raw secrets in frontend code.
- No direct balance updates from React.
- No staff/admin roles trusted from client state.
- Idempotency keys for money-moving operations.
- Audit logging without storing OTPs, secrets, or passwords.
