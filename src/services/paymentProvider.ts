import { createClient } from '@supabase/supabase-js';

export type PaymentProvider = {
  initiateTransfer: (payload: Record<string, unknown>) => Promise<{ ok: boolean; reference?: string; error?: string }>;
  getTransferStatus: (reference: string) => Promise<{ ok: boolean; status: string }>;
  verifyWebhook: (payload: Record<string, unknown>) => Promise<boolean>;
};

export class EcoCashProvider implements PaymentProvider {
  async initiateTransfer(payload: Record<string, unknown>) {
    return { ok: true, reference: `ecocash-${Date.now()}`, ...payload } as any;
  }

  async getTransferStatus(reference: string) {
    return { ok: true, status: reference ? 'completed' : 'pending' };
  }

  async verifyWebhook() {
    return true;
  }
}

export const supabaseAdminClient = () => {
  const url = process.env.SUPABASE_URL ?? '';
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? '';
  return url && serviceRoleKey ? createClient(url, serviceRoleKey, { auth: { persistSession: false } }) : null;
};
