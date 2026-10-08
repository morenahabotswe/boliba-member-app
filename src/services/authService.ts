import { supabase } from '@/lib/supabase';

export const authService = {
  async signInWithEmail(email: string, password: string) {
    if (!supabase) {
      return { data: { user: { id: 'demo-user', email } }, error: null };
    }

    return supabase.auth.signInWithPassword({ email, password });
  },

  async signOut() {
    if (!supabase) {
      return { error: null };
    }

    return supabase.auth.signOut();
  },

  async getSession() {
    if (!supabase) {
      return { data: { session: { user: { id: 'demo-user' } } }, error: null };
    }

    return supabase.auth.getSession();
  }
};
