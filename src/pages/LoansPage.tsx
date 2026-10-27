import { useEffect, useState } from 'react';
import { ArrowRight, BadgeCheck, Sparkles } from 'lucide-react';
import SectionCard from '@/components/common/SectionCard';
import { loanService } from '@/services/loanService';
import { formatCurrency } from '@/lib/format';

export default function LoansPage() {
  const [products, setProducts] = useState<any[]>([]);
  const [activeLoans, setActiveLoans] = useState<any[]>([]);

  useEffect(() => {
    void (async () => {
      const [loanProducts, active] = await Promise.all([loanService.getLoanProducts(), loanService.getActiveLoans()]);
      setProducts(loanProducts.filter((product) => !['Fixed Deposit / Sebota', 'Sesiu Voluntary Investment', 'Funeral Scheme', 'Molula Qhooa'].includes(product.name)));
      setActiveLoans(active);
    })();
  }, []);

  return (
    <div className="page">
      <header className="section-header">
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Financial support</p>
          <h1 className="page-title">Loan products</h1>
        </div>
        <button className="primary-btn">Apply now</button>
      </header>

      <div className="kpi-grid">
        {products.map((product) => (
          <div key={product.id} className="tile-card">
            <div className="icon-chip"><Sparkles size={18} /></div>
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <button className="secondary-btn" style={{ marginTop: 12 }}>Select product</button>
          </div>
        ))}
      </div>

      <SectionCard title="Active loans" subtitle="Current applications and approved balances">
        <ul className="list">
          {activeLoans.map((loan) => (
            <li key={loan.id} className="list-item">
              <div>
                <strong>{loan.product}</strong>
                <div style={{ color: '#5a6884', fontSize: 12 }}>Amount requested</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 800 }}>{formatCurrency(loan.amount)}</div>
                <div style={{ marginTop: 8 }}><span className="badge success">{loan.status}</span></div>
              </div>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
