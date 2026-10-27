import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Building2, CheckCircle2, ShieldCheck } from 'lucide-react';
import { authService } from '@/services/authService';

export default function LoginPage() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('demo@boliba.co.ls');
  const [password, setPassword] = useState('demo1234');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!email || !password) {
      setError('Please enter your email and password.');
      return;
    }

    setIsSubmitting(true);
    setError('');

    const { data, error: signInError } = await authService.signInWithEmail(email, password);

    if (signInError || !data?.user) {
      setError(signInError?.message || 'Unable to sign in with the provided credentials.');
      setIsSubmitting(false);
      return;
    }

    navigate('/dashboard', { replace: true });
  };

  return (
    <div className="auth-page">
      <div className="auth-card">
        <div className="auth-logo-wrap">
          <img src="/boliba-logo.svg" alt="Boliba" className="auth-logo" />
        </div>

        <h1 className="auth-title">Welcome back</h1>
        <p className="auth-subtitle">Demo mode: sign in to the Boliba member portal</p>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <label htmlFor="email">Email</label>
            <input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="demo@boliba.co.ls" autoComplete="email" />
          </div>

          <div className="field">
            <label htmlFor="password">Password</label>
            <input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" autoComplete="current-password" />
          </div>

          {error ? <div className="badge danger auth-error">{error}</div> : null}

          <button className="primary-btn" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Signing in...' : 'Login'}
            {!isSubmitting ? <ArrowRight size={16} style={{ marginLeft: 6 }} /> : null}
          </button>

          <Link to="/onboarding" className="secondary-btn auth-link">Create member account</Link>
        </form>

        <div className="auth-benefits">
          <div className="auth-benefit"><ShieldCheck size={16} color="#1E237E" /> Demo session enabled without any external service</div>
          <div className="auth-benefit"><Building2 size={16} color="#1E237E" /> Member onboarding and account flows are stubbed for preview</div>
          <div className="auth-benefit"><CheckCircle2 size={16} color="#1E237E" /> App is ready to connect to the real system later</div>
        </div>
      </div>
    </div>
  );
}
