export const APP_NAME = 'Boliba Member App';
export const APP_ENV = import.meta.env.VITE_APP_ENV ?? 'demo';
export const ENABLE_DEMO_DATA = import.meta.env.VITE_ENABLE_DEMO_DATA === 'true' || APP_ENV === 'demo';

export const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? '';
export const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY ?? '';
