import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="auth-page">
      <div className="auth-card">
        <h1 style={{ margin: 0, color: '#1E237E' }}>Page not found</h1>
        <p style={{ color: '#5a6884' }}>The page you requested is not available.</p>
        <Link to="/dashboard" className="primary-btn">Go to dashboard</Link>
      </div>
    </div>
  );
}
