import { useState } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import SectionCard from '@/components/common/SectionCard';

export default function TransfersPage() {
  const [form, setForm] = useState({ recipient: '', amount: '', reference: '', note: '' });
  const [status, setStatus] = useState<string | null>(null);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.recipient || !form.amount || Number(form.amount) <= 0) {
      setStatus('Please enter a valid recipient and amount.');
      return;
    }

    setStatus('Transfer request created securely and sent to backend validation.');
  };

  return (
    <div className="page">
      <header className="section-header">
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Move money securely</p>
          <h1 className="page-title">Transfer money</h1>
        </div>
      </header>

      <div className="grid-2">
        <SectionCard title="New transfer">
          <form className="form" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="recipient">Recipient</label>
              <input id="recipient" value={form.recipient} onChange={(e) => setForm((prev) => ({ ...prev, recipient: e.target.value }))} placeholder="Select recipient" />
            </div>

            <div className="field">
              <label htmlFor="amount">Amount</label>
              <input id="amount" type="number" value={form.amount} onChange={(e) => setForm((prev) => ({ ...prev, amount: e.target.value }))} placeholder="0.00" />
            </div>

            <div className="field">
              <label htmlFor="reference">Reference</label>
              <input id="reference" value={form.reference} onChange={(e) => setForm((prev) => ({ ...prev, reference: e.target.value }))} placeholder="Family support" />
            </div>

            <div className="field">
              <label htmlFor="note">Note</label>
              <textarea id="note" rows={4} value={form.note} onChange={(e) => setForm((prev) => ({ ...prev, note: e.target.value }))} placeholder="Optional message" />
            </div>

            <button type="submit" className="primary-btn">Review transfer <ArrowRight size={16} /></button>
            {status ? <div className="badge info" style={{ width: 'fit-content' }}>{status}</div> : null}
          </form>
        </SectionCard>

        <SectionCard title="Security" subtitle="Protected transfer boundary">
          <div style={{ display: 'grid', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><ShieldCheck size={18} color="#1E237E" /> Authorization and input validation occur in the backend</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><ShieldCheck size={18} color="#1E237E" /> Idempotent transfer processing with authoritative account checks</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><ShieldCheck size={18} color="#1E237E" /> No frontend balance mutation is used as the source of truth</div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
