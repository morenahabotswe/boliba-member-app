import { Eye, EyeOff } from 'lucide-react';
import { useState } from 'react';
import { formatCurrency } from '@/lib/format';

type BalanceCardProps = {
  amount: number;
  label?: string;
};

export default function BalanceCard({ amount, label = 'AVAILABLE BALANCE' }: BalanceCardProps) {
  const [showBalance, setShowBalance] = useState(true);

  return (
    <div className="balance-card">
      <div className="balance-card-header">
        <span className="balance-label">{label}</span>
        <button className="ghost-btn" style={{ color: '#fff', borderColor: 'rgba(255,255,255,0.25)', padding: '8px 12px' }} onClick={() => setShowBalance((value) => !value)}>
          {showBalance ? <EyeOff size={16} /> : <Eye size={16} />}
        </button>
      </div>

      <div className="balance-amount">{showBalance ? formatCurrency(amount) : 'M ••••••'}</div>

      <div style={{ display: 'flex', gap: 12, marginTop: 18, flexWrap: 'wrap' }}>
        <button className="secondary-btn" style={{ background: 'rgba(255,255,255,0.12)', color: 'white' }}>View account</button>
        <button className="ghost-btn" style={{ color: 'white', borderColor: 'rgba(255,255,255,0.25)' }}>View statement</button>
      </div>
    </div>
  );
}
