import { useEffect, useState } from 'react';
import { Banknote, Plus, ShieldCheck } from 'lucide-react';
import SectionCard from '@/components/common/SectionCard';
import { accountService } from '@/services/accountService';
import { formatCurrency } from '@/lib/format';

export default function AccountsPage() {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [selectedAccountId, setSelectedAccountId] = useState<string | null>(null);

  useEffect(() => {
    void (async () => {
      const data = await accountService.getAccounts();
      setAccounts(data);
      setSelectedAccountId(data[0]?.id ?? null);
    })();
  }, []);

  const totalBalance = accounts.reduce((sum, account) => sum + Number(account.available_balance || 0), 0);
  const selectedAccount = accounts.find((account) => account.id === selectedAccountId) ?? accounts[0];

  return (
    <div className="page">
      <header className="section-header">
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Your accounts</p>
          <h1 className="page-title">Accounts overview</h1>
        </div>
        <button type="button" className="primary-btn"><Plus size={16} /> Add account</button>
      </header>

      <div className="kpi-grid">
        <div className="metric-card">
          <h3>Total balance</h3>
          <p>Across all active accounts</p>
          <div className="metric-value">{formatCurrency(totalBalance)}</div>
        </div>
        <div className="metric-card">
          <h3>Active accounts</h3>
          <p>Available to you now</p>
          <div className="metric-value" style={{ color: '#1ca77b' }}>{accounts.length}</div>
        </div>
        <div className="metric-card">
          <h3>Products</h3>
          <p>Member account options</p>
          <div className="metric-value" style={{ color: '#12233d' }}>3</div>
        </div>
      </div>

      <SectionCard title="Account list">
        <ul className="list">
          {accounts.map((account) => (
            <li key={account.id} className="list-item" style={{ alignItems: 'flex-start', cursor: 'pointer' }} onClick={() => setSelectedAccountId(account.id)}>
              <div>
                <strong>{account.account_name}</strong>
                <div style={{ color: '#5a6884', fontSize: 12 }}>{account.account_label} • {account.currency}</div>
                <div style={{ color: '#5a6884', fontSize: 12, marginTop: 4 }}>{account.description}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 800 }}>{formatCurrency(account.available_balance)}</div>
                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 8, marginTop: 8 }}>
                  <span className="badge success">{account.status}</span>
                  <button type="button" className="secondary-btn" style={{ padding: '8px 10px' }} onClick={(event) => { event.stopPropagation(); setSelectedAccountId(account.id); }}>View</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </SectionCard>

      {selectedAccount ? (
        <SectionCard title="Selected account details" subtitle={selectedAccount.account_name}>
          <div style={{ display: 'grid', gap: 10 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Banknote size={18} color="#1E237E" /> Account number: {selectedAccount.account_number}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><ShieldCheck size={18} color="#1E237E" /> Status: {selectedAccount.status}</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}><Banknote size={18} color="#1E237E" /> Available balance: {formatCurrency(selectedAccount.available_balance)}</div>
          </div>
        </SectionCard>
      ) : null}
    </div>
  );
}
