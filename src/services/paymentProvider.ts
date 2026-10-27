export type PaymentProvider = {
  initiateTransfer: (payload: Record<string, unknown>) => Promise<{ ok: boolean; reference?: string; error?: string }>;
  getTransferStatus: (reference: string) => Promise<{ ok: boolean; status: string }>;
  verifyWebhook: (payload: Record<string, unknown>) => Promise<boolean>;
};

export class EcoCashProvider implements PaymentProvider {
  async initiateTransfer(payload: Record<string, unknown>) {
    return { ok: true, reference: `ecocash-demo-${Date.now()}`, ...payload } as any;
  }

  async getTransferStatus(reference: string) {
    return { ok: true, status: reference ? 'completed' : 'pending' };
  }

  async verifyWebhook() {
    return true;
  }
}

export const supabaseAdminClient = () => null;
