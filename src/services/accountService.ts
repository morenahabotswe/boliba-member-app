export const accountService = {
  async getAccounts() {
    return [
      {
        id: 'acct-001',
        member_id: 'member-001',
        account_number: 'BLB-00012345',
        account_type: 'savings',
        currency: 'LSL',
        status: 'active',
        available_balance: 24580.42,
        ledger_balance: 24580.42
      }
    ];
  }
};
