import { useState } from 'react';
import { CheckCircle2, Clock3, CreditCard, HeartHandshake, Smartphone, Wallet } from 'lucide-react';
import SectionCard from '@/components/common/SectionCard';

const funeralSchemes = [
  {
    id: 'basic',
    name: 'Basic / Affordable Plan',
    premium: 'M48/month',
    description: 'Member cover M8,500 • Accidental death M17,000 • Parent cover M5,000 • Airtime M100 • Grocery support M350 for 6 months.'
  },
  {
    id: 'ketane',
    name: 'Ketane',
    premium: 'M85/month',
    description: 'Member cover M12,500 • Accidental death M25,000 • Parent cover M10,000 • Airtime M200 • Grocery support M500 for 6 months.'
  },
  {
    id: 'maletsunyane',
    name: 'Maletsunyane',
    premium: 'M130/month',
    description: 'Member cover M20,000 • Accidental death M40,000 • Parent cover M10,000 • Airtime M200 • Grocery support M1,000 for 6 months.'
  }
];

export default function FuneralSchemesPage() {
  const [selectedScheme, setSelectedScheme] = useState<string>('ketane');

  return (
    <div className="page">
      <header className="section-header">
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Protection & family support</p>
          <h1 className="page-title">Funeral schemes</h1>
        </div>
      </header>

      <div className="kpi-grid">
        <div className="metric-card">
          <h3>Coverage</h3>
          <div className="metric-value">M8,500+</div>
          <p style={{ marginTop: 12 }}>Member funeral benefit</p>
        </div>
        <div className="metric-card">
          <h3>Accidental death</h3>
          <div className="metric-value">M17,000+</div>
          <p style={{ marginTop: 12 }}>Enhanced family protection</p>
        </div>
        <div className="metric-card">
          <h3>Support</h3>
          <div className="metric-value">Included</div>
          <p style={{ marginTop: 12 }}>Airtime and grocery support</p>
        </div>
      </div>

      <SectionCard title="Available plans">
        <ul className="list">
          {funeralSchemes.map((scheme) => (
            <li key={scheme.id} className="list-item" style={{ alignItems: 'flex-start', cursor: 'pointer' }} onClick={() => setSelectedScheme(scheme.id)}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="icon-chip"><HeartHandshake size={16} /></div>
                <div>
                  <strong>{scheme.name}</strong>
                  <div style={{ color: '#5a6884', fontSize: 12 }}>{scheme.premium}</div>
                  <div style={{ color: '#5a6884', fontSize: 12, marginTop: 6 }}>{scheme.description}</div>
                </div>
              </div>
              <span className={`badge ${selectedScheme === scheme.id ? 'success' : 'info'}`}>{selectedScheme === scheme.id ? 'Selected' : 'Available'}</span>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
