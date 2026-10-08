INSERT INTO public.branches (name, code, location, phone, email, status) VALUES
('Maseru HQ', 'MSU', 'Maseru', '+266 000 0000', 'hq@boliba.co.ls', 'active'),
('Mohale&apos;s Hoek', 'MHK', 'Mohale&apos;s Hoek', '+266 000 0001', 'mohaleshoek@boliba.co.ls', 'active'),
('Maputsoe', 'MAP', 'Maputsoe', '+266 000 0002', 'maputsoe@boliba.co.ls', 'active'),
('Botha-Bothe', 'BBT', 'Botha-Bothe', '+266 000 0003', 'bothabothe@boliba.co.ls', 'active');

INSERT INTO public.savings_products (name, code, description, is_active) VALUES
('Savings Account', 'SAVINGS-01', 'Basic member savings account', true),
('Fixed Deposit', 'FD-01', 'Term savings product', true),
('Children&apos;s Account', 'CHILD-01', 'Youth-oriented account', true);

INSERT INTO public.loan_products (name, code, description, is_active) VALUES
('Molula-Qhooa', 'MQ-01', 'Short-term member loan', true),
('Thala Boliba', 'TB-01', 'Member loan product', true),
('Molula-Qhooa+', 'MQPLUS-01', 'Enhanced member loan', true),
('FutureFund', 'FF-01', 'Future investment product', true),
('Children&apos;s Account / Child-focused', 'CHILD-LOAN-01', 'Child-focused credit product', true);

INSERT INTO public.membership_contributions (member_id, contribution_type, amount, currency, is_active)
VALUES
('00000000-0000-0000-0000-000000000000', 'Registration', 50, 'LSL', true),
('00000000-0000-0000-0000-000000000000', 'Share Capital', 50, 'LSL', true),
('00000000-0000-0000-0000-000000000000', 'Savings', 50, 'LSL', true);
