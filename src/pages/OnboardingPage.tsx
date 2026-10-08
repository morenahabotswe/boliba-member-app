import { ArrowRight, CheckCircle2, ShieldCheck, UserRound } from 'lucide-react';

export default function OnboardingPage() {
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
            <input id="member-number" placeholder="00012345" />
          </div>

          <div className="field">
            <label htmlFor="phone">Phone number</label>
            <input id="phone" placeholder="+266 5900 1234" />
          </div>

          <div className="badge info" style={{ width: 'fit-content' }}>Your account is not yet linked to Boliba membership.</div>

          <button className="primary-btn" onClick={() => (window.location.href = '/dashboard')}>Continue <ArrowRight size={16} /></button>
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
