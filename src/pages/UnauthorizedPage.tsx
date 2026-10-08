import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function UnauthorizedPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 style={{ margin: 0, color: '#1E237E' }}>Access restricted</h1>
        <p style={{ color: '#5a6884' }}>You do not have permission to access this Boliba area.</p>
        <Link to="/login" className="primary-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <ArrowLeft size={16} /> Return to login
        </Link>
      </div>
    </div>
  );
}
