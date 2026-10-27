const DEMO_SESSION_KEY = 'boliba-demo-session';

const getDemoSession = () => {
  const raw = localStorage.getItem(DEMO_SESSION_KEY);
  if (!raw) {
    return {
      data: {
        session: {
          user: {
            id: 'demo-user',
            email: 'demo@boliba.co.ls',
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
            email: user.email || 'demo@boliba.co.ls',
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
            email: 'demo@boliba.co.ls',
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
    const safeEmail = email || 'demo@boliba.co.ls';
    const user = {
      id: 'demo-user',
      email: safeEmail,
      name: 'Demo Member'
    };

    localStorage.setItem(DEMO_SESSION_KEY, JSON.stringify({ email: safeEmail, name: user.name, password }));

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
