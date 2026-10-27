import { useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { useState } from 'react';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('demo@boliba.co.ls');
  const [password, setPassword] = useState('demo1234');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setError('');
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      navigate('/dashboard');
    }, 300);
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
          <div className="brand-mark" style={{ width: 56, height: 56, fontSize: 26 }}>B</div>
        </div>

        <h1 style={{ margin: 0, textAlign: 'center', color: '#1E237E' }}>Welcome back</h1>
        <p style={{ textAlign: 'center', color: '#5a6884', marginBottom: 24 }}>Demo mode: sign in to the Boliba member portal</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="demo@boliba.co.ls" />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </div>

          {error ? <div className="badge danger" style={{ width: 'fit-content' }}>{error}</div> : null}

          <button className="primary-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Login'}
            <ArrowRight size={16} style={{ marginLeft: 6 }} />
          </button>
          <button type="button" className="secondary-btn" onClick={() => navigate('/onboarding')}>Create member account</button>
        </form>

        <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#0A2A4A' }}><ShieldCheck size={16} color="#1E237E" /> Demo session enabled without any external service</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#0A2A4A' }}><Building2 size={16} color="#1E237E" /> Member onboarding and account flows are stubbed for preview</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#0A2A4A' }}><CheckCircle2 size={16} color="#1E237E" /> App is ready to connect to the real system later</div>
        </div>
      </div>
    </div>
  );
}
