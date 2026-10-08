import { Camera, Lock, Save, ShieldCheck, UserRound } from 'lucide-react';
import SectionCard from '@/components/common/SectionCard';

export default function ProfilePage() {
  return (
    <div className="page">
      <header className="section-header">
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Your profile</p>
          <h1 className="page-title">Member profile</h1>
        </div>
      </header>

      <div className="grid-2">
        <SectionCard title="Personal details">
          <div className="form">
            <div className="field">
              <label htmlFor="firstName">First name</label>
              <input id="firstName" defaultValue="Mpho" />
            </div>
            <div className="field">
              <label htmlFor="lastName">Last name</label>
              <input id="lastName" defaultValue="Mokoena" />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" defaultValue="+266 59001234" />
            </div>
            <button className="primary-btn"><Save size={16} /> Save changes</button>
          </div>
        </SectionCard>

        <SectionCard title="Security & access">
          <div style={{ display: 'grid', gap: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><UserRound size={18} color="#1E237E" /> Authenticated member identity</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Camera size={18} color="#1E237E" /> Profile photo and avatar support</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><Lock size={18} color="#1E237E" /> Secure password recovery and session security</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}><ShieldCheck size={18} color="#1E237E" /> Access limited to authorized member records</div>
          </div>
        </SectionCard>
      </div>
    </div>
  );
}
