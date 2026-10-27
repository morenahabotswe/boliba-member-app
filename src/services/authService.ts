const DEMO_EMAIL = 'demo@boliba.co.ls';
const DEMO_PASSWORD = 'demo1234';
const DEMO_SESSION_KEY = 'boliba-demo-session';

const getDemoSession = () => {
  const raw = localStorage.getItem(DEMO_SESSION_KEY);
  if (!raw) {
    return {
      data: {
        session: {
          user: {
            id: 'demo-user',
            email: DEMO_EMAIL,
            name: 'Demo Member'
          }
        }
      },
      error: null
    };
  }

  try {
    const user = JSON.parse(raw) as { email?: string; name?: string };
    return {
      data: {
        session: {
          user: {
            id: 'demo-user',
            email: user.email || DEMO_EMAIL,
            name: user.name || 'Demo Member'
          }
        }
      },
      error: null
    };
  } catch {
    return {
      data: {
        session: {
          user: {
            id: 'demo-user',
            email: DEMO_EMAIL,
            name: 'Demo Member'
          }
        }
      },
      error: null
    };
  }
};

export const authService = {
  async signInWithEmail(email: string, password: string) {
    const safeEmail = (email || '').trim().toLowerCase();
    const safePassword = password || '';

    if (safeEmail !== DEMO_EMAIL || safePassword !== DEMO_PASSWORD) {
      return {
        data: null,
        error: {
          message: 'Invalid demo credentials. Use demo@boliba.co.ls / demo1234.'
        }
      };
    }

    const user = {
      id: 'demo-user',
      email: DEMO_EMAIL,
      name: 'Demo Member'
    };

    localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify({ email: DEMO_EMAIL, name: user.name, password: DEMO_PASSWORD }));

    return {
      data: { user },
      error: null
    };
  },

  async signOut() {
    localStorage.removeItem(DEMO_SESSION_KEY);
    return { error: null };
  },

  async getSession() {
    return getDemoSession();
  }
};
