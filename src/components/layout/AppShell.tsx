import { NavLink, Outlet } from 'react-router-dom';
import { Bell, CreditCard, FileText, HeartHandshake, Home, Landmark, LogOut, MoreHorizontal, PiggyBank, Send, Smartphone, UserRound } from 'lucide-react';
import BrandLogo from '@/components/common/BrandLogo';

const navItems = [
  { to: '/dashboard', label: 'Dashboard', icon: Home },
  { to: '/accounts', label: 'Accounts', icon: CreditCard },
  { to: '/transfers', label: 'Transfers', icon: Send },
  { to: '/loans', label: 'Loans', icon: Landmark },
  { to: '/savings', label: 'Savings', icon: PiggyBank },
  { to: '/funeral-schemes', label: 'Funeral', icon: HeartHandshake },
  { to: '/digital-services', label: 'Digital', icon: Smartphone },
  { to: '/statements', label: 'Statements', icon: FileText },
  { to: '/notifications', label: 'Notifications', icon: Bell },
  { to: '/profile', label: 'Profile', icon: UserRound },
  { to: '/login', label: 'Logout', icon: LogOut }
];

const mobileNavItems = [
  { to: '/dashboard', label: 'Home', icon: Home },
  { to: '/accounts', label: 'Accounts', icon: CreditCard },
  { to: '/transfers', label: 'Transfer', icon: Send },
  { to: '/loans', label: 'Loans', icon: Landmark },
  { to: '/more', label: 'More', icon: MoreHorizontal }
];

export default function AppShell() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <BrandLogo size={34} alt="Boliba logo" />
          <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: '0.05em' }}>Boliba</div>
        </div>

        <nav className="sidebar-nav" aria-label="Main navigation">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
              <Icon size={18} />
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="card" style={{ padding: 18 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 10 }}>
            <PiggyBank size={18} color="#00AEEF" />
            <strong>Member savings</strong>
          </div>
          <div style={{ fontSize: 24, fontWeight: 800, color: '#1E237E' }}>M 24,580.42</div>
        </div>
      </aside>

      <main className="content-shell">
        <Outlet />
      </main>

      <nav className="mobile-nav" aria-label="Mobile navigation">
        {mobileNavItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={({ isActive }) => (isActive ? 'active' : '')}>
            <Icon size={18} />
            <span>{label}</span>
          </NavLink>
        ))}
      </nav>
    </div>
  );
}
