import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ShieldCheck, UserRound } from 'lucide-react';

export default function OnboardingPage() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ memberNumber: '', phone: '' });
  const [status, setStatus] = useState('');

  const handleContinue = () => {
    if (!form.memberNumber || !form.phone) {
      setStatus('Please complete both member number and phone number.');
      return;
    }

    setStatus('Member details captured. Redirecting to your dashboard...');
    setTimeout(() => navigate('/dashboard'), 500);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
          <div className="brand-mark" style={{ width: 56, height: 56, fontSize: 26 }}>B</div>
        </div>

        <h1 style={{ margin: 0, textAlign: 'center', color: '#1E237E' }}>Member onboarding</h1>
        <p style={{ textAlign: 'center', color: '#5a6884', marginBottom: 24 }}>Link your Boliba membership securely.</p>

        <div className="form">
          <div className="field">
            <label htmlFor="member-number">Member number</label>
            <input id="member-number" value={form.memberNumber} onChange={(e) => setForm((prev) => ({ ...prev, memberNumber: e.target.value }))} placeholder="00012345" />
          </div>

          <div className="field">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} placeholder="+266 5900 1234" />
          </div>

          <div className="badge info" style={{ width: 'fit-content' }}>Your account is not yet linked to Boliba membership.</div>

          <button className="primary-btn" type="button" onClick={handleContinue}>Continue <ArrowRight size={16} /></button>
          {status ? <div className="badge info" style={{ width: 'fit-content' }}>{status}</div> : null}
        </div>

        <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><UserRound size={16} color="#1E237E" /> Verification and identity confirmation</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><ShieldCheck size={16} color="#1E237E" /> Terms, consent, and secure access</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><CheckCircle2 size={16} color="#1E237E" /> On completion, dashboard access is granted</div>
        </div>
      </div>
    </div>
  );
}
