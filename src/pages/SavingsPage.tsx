import { useEffect, useState } from 'react';
import { ArrowUpRight, Landmark, PiggyBank, Wallet } from 'lucide-react';
import SectionCard from '@/components/common/SectionCard';
import { accountService } from '@/services/accountService';
import { formatCurrency } from '@/lib/format';

export default function SavingsPage() {
  const [savings, setSavings] = useState<any[]>([]);

  useEffect(() => {
    void (async () => {
      const accountData = await accountService.getAccounts();
      setSavings(
        accountData.map((account) => ({
          id: account.id,
          name: account.account_type === 'savings' ? 'Savings Account' : 'Member Account',
          balance: account.available_balance,
          status: account.status
        }))
      );
    })();
  }, []);

  return (
    <div className="page">
      <header className="section-header">
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Secure growth</p>
          <h1 className="page-title">Savings</h1>
        </div>
      </header>

      <div className="kpi-grid">
        <div className="metric-card">
          <h3>Current balance</h3>
          <div className="metric-value">{formatCurrency(savings.reduce((sum, item) => sum + Number(item.balance ?? 0), 0))}</div>
        </div>
        <div className="metric-card">
          <h3>Monthly growth</h3>
          <div className="metric-value" style={{ color: '#1ca77b' }}>{formatCurrency(3200)}</div>
        </div>
        <div className="metric-card">
          <h3>Products</h3>
          <div className="metric-value">3</div>
        </div>
      </div>

      <SectionCard title="Your savings products">
        <ul className="list">
          {savings.map((saving) => (
            <li key={saving.id} className="list-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="icon-chip"><PiggyBank size={16} /></div>
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
