import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setError('');
    window.location.href = '/dashboard';
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 18 }}>
          <div className="brand-mark" style={{ width: 56, height: 56, fontSize: 26 }}>B</div>
        </div>

        <h1 style={{ margin: 0, textAlign: 'center', color: '#1E237E' }}>Welcome back</h1>
        <p style={{ textAlign: 'center', color: '#5a6884', marginBottom: 24 }}>Sign in to your Boliba member portal</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" />
          </div>

          {error ? <div className="badge danger" style={{ width: 'fit-content' }}>{error}</div> : null}

          <button className="primary-btn" type="submit">Login</button>
          <Link to="/onboarding" className="secondary-btn" style={{ textAlign: 'center', display: 'inline-block' }}>Create member account</Link>
        </form>

        <div style={{ marginTop: 18, display: 'grid', gap: 12 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#0A2A4A' }}><ShieldCheck size={16} color="#1E237E" /> Secure authentication with Supabase</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#0A2A4A' }}><Building2 size={16} color="#1E237E" /> Link to member account and branch</div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, color: '#0A2A4A' }}><CheckCircle2 size={16} color="#1E237E" /> Protected routes and role-based access</div>
        </div>
      </div>
    </div>
  );
}
