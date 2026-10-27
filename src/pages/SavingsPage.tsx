import { useEffect, useMemo, useState } from 'react';
import { Landmark, PiggyBank, ShieldCheck, Wallet } from 'lucide-react';
import SectionCard from '@/components/common/SectionCard';
import { accountService } from '@/services/accountService';
import { formatCurrency } from '@/lib/format';

const savingsProducts = [
  { id: 'prod-001', name: 'General Savings / Current Account', balance: 24580.42, status: 'Active', type: 'core' },
  { id: 'prod-002', name: 'Fixed Deposit / Sebota', balance: 18500.0, status: 'Active', type: 'fixed' },
  { id: 'prod-003', name: 'Sesiu Voluntary Investment', balance: 6200.25, status: 'Active', type: 'voluntary' },
  { id: 'prod-004', name: 'Molula Qhooa', balance: 12000.0, status: 'Active', type: 'goal' },
  { id: 'prod-005', name: 'Minor Account / Children\'s Account', balance: 3200.5, status: 'Active', type: 'minor' }
];

export default function SavingsPage() {
  const [savings, setSavings] = useState<any[]>([]);

  useEffect(() => {
    void (async () => {
      const accountData = await accountService.getAccounts();
      setSavings(
        savingsProducts.map((product) => {
          const matched = accountData.find((account) => account.account_name === product.name);
          return {
            ...product,
            balance: matched?.available_balance ?? product.balance,
            status: matched?.status ?? product.status
          };
        })
      );
    })();
  }, []);

  const totalBalance = useMemo(
    () => savings.reduce((sum, item) => sum + Number(item.balance ?? 0), 0),
    [savings]
  );

  return (
    <div className="page">
      <header className="section-header">
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Secure growth</p>
          <h1 className="page-title">Savings & investment products</h1>
        </div>
      </header>

      <div className="kpi-grid">
        <div className="metric-card">
          <h3>Current balance</h3>
          <div className="metric-value">{formatCurrency(totalBalance)}</div>
        </div>
        <div className="metric-card">
          <h3>Monthly growth</h3>
          <div className="metric-value" style={{ color: '#1ca77b' }}>{formatCurrency(3200)}</div>
        </div>
        <div className="metric-card">
          <h3>Products</h3>
          <div className="metric-value">{savings.length}</div>
        </div>
      </div>

      <SectionCard title="Your savings products">
        <ul className="list">
          {savings.map((saving) => (
            <li key={saving.id} className="list-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="icon-chip">
                  {saving.type === 'fixed' ? <Landmark size={16} /> : saving.type === 'goal' ? <ShieldCheck size={16} /> : <PiggyBank size={16} />}
                </div>
                <div>
                  <strong>{saving.name}</strong>
                  <div style={{ color: '#5a6884', fontSize: 12 }}>{saving.status}</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 800 }}>{formatCurrency(saving.balance)}</div>
                <button className="secondary-btn" style={{ marginTop: 8, padding: '8px 12px' }}>View</button>
              </div>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
