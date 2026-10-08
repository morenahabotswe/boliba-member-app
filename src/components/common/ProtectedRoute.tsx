import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { authService } from '@/services/authService';
import { useEffect, useState } from 'react';

export default function ProtectedRoute() {
  const location = useLocation();
  const [isChecking, setIsChecking] = useState(true);
  const [isAllowed, setIsAllowed] = useState(false);

  useEffect(() => {
    const check = async () => {
      const { data } = await authService.getSession();
      const session = data?.session ?? null;
      setIsAllowed(Boolean(session?.user));
      setIsChecking(false);
    };

    void check();
  }, [location.pathname]);

  if (isChecking) {
    return <div className="container" style={{ padding: '60px 0', textAlign: 'center' }}>Checking your session...</div>;
  }

  if (!isAllowed) {
    return <Navigate to="/login" replace state={{ from: location }} />;
  }

  return <Outlet />;
}
