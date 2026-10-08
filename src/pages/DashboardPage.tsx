import { useEffect, useMemo, useState } from 'react';
import { Bell, ChevronRight, PiggyBank, Send, TrendingUp, Wallet, Landmark, ShieldCheck, ArrowRight } from 'lucide-react';
import BalanceCard from '@/components/common/BalanceCard';
import SectionCard from '@/components/common/SectionCard';
import { accountService } from '@/services/accountService';
import { notificationService } from '@/services/notificationService';
import { transactionService } from '@/services/transactionService';
import { loanService } from '@/services/loanService';
import { formatCurrency, formatDate } from '@/lib/format';

export default function DashboardPage() {
  const [accounts, setAccounts] = useState<any[]>([]);
  const [notifications, setNotifications] = useState<any[]>([]);
  const [transactions, setTransactions] = useState<any[]>([]);
  const [loanProducts, setLoanProducts] = useState<any[]>([]);

  useEffect(() => {
    void (async () => {
      const [accountData, notificationData, txData, loanData] = await Promise.all([
        accountService.getAccounts(),
        notificationService.getNotifications(),
        transactionService.getRecentTransactions(),
        loanService.getLoanProducts()
      ]);

      setAccounts(accountData);
      setNotifications(notificationData);
      setTransactions(txData);
      setLoanProducts(loanData);
    })();
  }, []);

  const totalBalance = useMemo(
    () => accounts.reduce((sum, account) => sum + Number(account.available_balance || 0), 0),
    [accounts]
  );

  return (
    <div className="page">
      <header className="section-header">
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Good morning, Mpho.</p>
          <h1 className="page-title">Here&apos;s your Boliba financial overview.</h1>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button className="ghost-btn" aria-label="View notifications">
            <Bell size={18} />
          </button>
          <div className="brand-mark" style={{ width: 38, height: 38 }}>M</div>
        </div>
      </header>

      <BalanceCard amount={totalBalance} />

      <SectionCard title="Quick actions">
        <div className="quick-actions-grid">
          <button className="tile-card" onClick={() => window.location.href = '/accounts'} style={{ textAlign: 'left' }}>
            <div className="icon-chip"><Wallet size={18} /></div>
            <div><strong>Check Balance</strong></div>
          </button>
          <button className="tile-card" onClick={() => window.location.href = '/transfers'} style={{ textAlign: 'left' }}>
            <div className="icon-chip"><Send size={18} /></div>
            <div><strong>Transfer Money</strong></div>
          </button>
          <button className="tile-card" onClick={() => window.location.href = '/loans'} style={{ textAlign: 'left' }}>
            <div className="icon-chip"><Landmark size={18} /></div>
            <div><strong>Apply for a Loan</strong></div>
          </button>
          <button className="tile-card" onClick={() => window.location.href = '/notifications'} style={{ textAlign: 'left' }}>
            <div className="icon-chip"><Bell size={18} /></div>
            <div><strong>Notifications</strong></div>
          </button>
        </div>
      </SectionCard>

      <div className="finance-grid">
        <SectionCard title="Savings" subtitle="Member contribution & savings">
          <div className="metric-value">{formatCurrency(24000)}</div>
          <p style={{ marginTop: 12 }}>Savings account</p>
        </SectionCard>
        <SectionCard title="Loans" subtitle="Current active loan">
          <div className="metric-value">{formatCurrency(12000)}</div>
          <p style={{ marginTop: 12 }}>Molula-Qhooa</p>
        </SectionCard>
        <SectionCard title="Membership" subtitle="Status">
          <div className="metric-value">Active</div>
          <p style={{ marginTop: 12 }}>Member since 2024</p>
        </SectionCard>
      </div>

      <div className="grid-2">
        <SectionCard title="Recent activity" subtitle="Latest account movement">
          <ul className="transaction-list">
            {transactions.slice(0, 4).map((transaction) => (
              <li key={transaction.id} className="transaction-item">
                <div>
                  <strong>{transaction.description}</strong>
                  <div style={{ color: '#5a6884', fontSize: 12 }}>{formatDate(transaction.created_at)}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontWeight: 700, color: transaction.direction === 'in' ? '#1ca77b' : '#12233d' }}>
                    {transaction.amount >= 0 ? '+' : '-'}{formatCurrency(Math.abs(transaction.amount))}
                  </div>
                  <span className={`badge ${transaction.status === 'completed' ? 'success' : 'warning'}`}>{transaction.status}</span>
                </div>
              </li>
            ))}
          </ul>
        </SectionCard>

        <SectionCard title="Explore Boliba" subtitle="Member products">
          <ul className="list">
            {loanProducts.slice(0, 3).map((product) => (
              <li key={product.id} className="list-item">
                <div>
                  <strong>{product.name}</strong>
                  <div style={{ color: '#5a6884', fontSize: 12 }}>{product.description}</div>
                </div>
                <ChevronRight size={16} color="#1E237E" />
              </li>
            ))}
          </ul>
        </SectionCard>
      </div>

      <SectionCard title="Your notifications" subtitle="Unread updates">
        <ul className="list">
          {notifications.slice(0, 3).map((notification) => (
            <li key={notification.id} className="list-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="icon-chip" style={{ background: notification.read ? 'rgba(26,42,84,0.06)' : 'rgba(0,174,239,0.12)' }}>
                  {notification.type === 'transaction' ? <PiggyBank size={16} /> : notification.type === 'loan' ? <Landmark size={16} /> : <ShieldCheck size={16} />}
                </div>
                <div>
                  <strong>{notification.title}</strong>
                  <div style={{ color: '#5a6884', fontSize: 12 }}>{notification.message}</div>
                </div>
              </div>
              {!notification.read ? <span className="badge info">New</span> : <span className="badge success">Read</span>}
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
