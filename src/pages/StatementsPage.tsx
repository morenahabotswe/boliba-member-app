import { FileText, Download, CalendarRange } from 'lucide-react';
import SectionCard from '@/components/common/SectionCard';
import { formatCurrency, formatDate } from '@/lib/format';

const statements = [
  {
    id: 'stmt-001',
    period: 'October 2026',
    amount: 24580.42,
    status: 'Ready',
    date: '2026-10-05'
  },
  {
    id: 'stmt-002',
    period: 'September 2026',
    amount: 23450.1,
    status: 'Ready',
    date: '2026-09-05'
  }
];

export default function StatementsPage() {
  return (
    <div className="page">
      <header className="section-header">
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Statements</p>
          <h1 className="page-title">Statement history</h1>
        </div>
      </header>

      <SectionCard title="Available statements">
        <ul className="list">
          {statements.map((statement) => (
            <li key={statement.id} className="list-item">
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="icon-chip"><FileText size={16} /></div>
                <div>
                  <strong>{statement.period}</strong>
                  <div style={{ color: '#5a6884', fontSize: 12 }}>{formatDate(statement.date)}</div>
                </div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 800 }}>{formatCurrency(statement.amount)}</div>
                <div style={{ display: 'flex', gap: 8, justifyContent: 'flex-end', marginTop: 8 }}>
                  <span className="badge success">{statement.status}</span>
                  <button className="secondary-btn" style={{ padding: '8px 10px' }}><Download size={14} /></button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
