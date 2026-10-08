import { useEffect, useState } from 'react';
import { Plus, TrendingDown, TrendingUp } from 'lucide-react';
import SectionCard from '@/components/common/SectionCard';
import { accountService } from '@/services/accountService';
import { formatCurrency } from '@/lib/format';

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<any[]>([]);

  useEffect(() => {
    void (async () => {
      const data = await accountService.getAccounts();
      setAccounts(data);
    })();
  }, []);

  return (
    <div className="page">
      <header className="section-header">
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Your accounts</p>
          <h1 className="page-title">Accounts overview</h1>
        </div>
        <button className="primary-btn"><Plus size={16} /> Add account</button>
      </header>

      <div className="kpi-grid">
        <div className="metric-card">
          <h3>Total balance</h3>
          <p>Across all active accounts</p>
          <div className="metric-value">{formatCurrency(accounts.reduce((sum, account) => sum + Number(account.available_balance || 0), 0))}</div>
        </div>
        <div className="metric-card">
          <h3>Cash in</h3>
          <p>Incoming this month</p>
          <div className="metric-value" style={{ color: '#1ca77b' }}>{formatCurrency(14500)}</div>
        </div>
        <div className="metric-card">
          <h3>Withdrawals</h3>
          <p>Outgoing this month</p>
          <div className="metric-value" style={{ color: '#d94d5c' }}>{formatCurrency(8250)}</div>
        </div>
      </div>

      <SectionCard title="Account list">
        <ul className="list">
          {accounts.map((account) => (
            <li key={account.id} className="list-item" style={{ alignItems: 'flex-start' }}>
              <div>
                <strong>{account.account_number}</strong>
                <div style={{ color: '#5a6884', fontSize: 12 }}>{account.account_type} • {account.currency}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 800 }}>{formatCurrency(account.available_balance)}</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 8 }}>
                  <span className="badge success">{account.status}</span>
                  <button className="secondary-btn" style={{ padding: '8px 10px' }}>View</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
