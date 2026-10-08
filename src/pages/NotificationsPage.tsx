import { useEffect, useState } from 'react';
import { BellRing, CheckCircle2 } from 'lucide-react';
import SectionCard from '@/components/common/SectionCard';
import { notificationService } from '@/services/notificationService';

export default function NotificationsPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    void (async () => {
      const data = await notificationService.getNotifications();
      setItems(data);
    })();
  }, []);

  return (
    <div className="page">
      <header className="section-header">
        <div>
          <p className="page-subtitle" style={{ margin: 0 }}>Stay informed</p>
          <h1 className="page-title">Notifications</h1>
        </div>
      </header>

      <SectionCard title="Inbox">
        <ul className="list">
          {items.map((item) => (
            <li key={item.id} className="list-item" style={{ alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div className="icon-chip"><BellRing size={16} /></div>
                <div>
                  <strong>{item.title}</strong>
                  <div style={{ color: '#5a6884', fontSize: 12 }}>{item.message}</div>
                </div>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 8 }}>
                <span className={`badge ${item.read ? 'success' : 'info'}`}>{item.read ? 'Read' : 'Unread'}</span>
                <CheckCircle2 size={16} color={item.read ? '#1ca77b' : '#00AEEF'} />
              </div>
            </li>
          ))}
        </ul>
      </SectionCard>
    </div>
  );
}
