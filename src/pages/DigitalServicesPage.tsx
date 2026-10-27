import { CheckCircle2, Smartphone, Send, FileText } from 'lucide-react';
import SectionCard from '@/components/common/SectionCard';

const digitalServices = [
  { id: 'registration', name: 'Online Registration', description: 'Register as a member quickly and securely through the app.' },
  { id: 'eft', name: 'EFT Requests', description: 'Request and track electronic fund transfers directly from the platform.' },
  { id: 'mobile-money', name: 'Mobile Money Requests', description: 'Submit and follow up on mobile money transactions with ease.' },
  { id: 'statements', name: 'Account Statements', description: 'Access account history and member statements when needed.' },
  { id: 'transfers', name: 'Transfers', description: 'Send funds between accounts and approved recipients securely.' }
];

export default function DigitalServicesPage() {
  return (
    <div className="page">
      <header className="section-header">
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Convenient access</p>
          <h1 className="page-title">Digital services</h1>
        </div>
      </header>

      <div className="kpi-grid">
        <div className="metric-card">
          <h3>Channels</h3>
          <div className="metric-value">5</div>
          <p style={{ marginTop: 12 }}>Core digital services</p>
        </div>
        <div className="metric-card">
          <h3>Access</h3>
          <div className="metric-value">24/7</div>
          <p style={{ marginTop: 12 }}>Member self-service</p>
        </div>
        <div className="metric-card">
          <h3>Support</h3>
          <div className="metric-value">Live</div>
          <p style={{ marginTop: 12 }}>Fast request tracking</p>
        </div>
      </div>

      <SectionCard title="Available services">
        <ul className="list">
          {digitalServices.map((service) => (
            <li key={service.id} className="list-item" style={{ alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="icon-chip">
                  {service.id === 'registration' ? <Smartphone size={16} /> : service.id === 'eft' ? <Send size={16} /> : service.id === 'mobile-money' ? <Smartphone size={16} /> : <FileText size={16} />}
                </div>
                <div>
                  <strong>{service.name}</strong>
                  <div style={{ color: '#5a6884', fontSize: 12 }}>{service.description}</div>
                </div>
              </div>
              <span className="badge success"><CheckCircle2 size={12} style={{ marginRight: 4 }} /> Active</span>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
