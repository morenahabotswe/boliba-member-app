export const accountService = {
  async getAccounts() {
    return [
      {
        id: 'acct-001',
        member_id: 'member-001',
        account_number: 'BLB-00012345',
        account_name: 'General Savings / Current Account',
        account_type: 'general-savings',
        currency: 'LSL',
        status: 'active',
        available_balance: 24580.42,
        ledger_balance: 24580.42
      },
      {
        id: 'acct-002',
        member_id: 'member-001',
        account_number: 'BLB-00067890',
        account_name: 'Thala Boliba (Transactional Account)',
        account_type: 'transactional',
        currency: 'LSL',
        status: 'active',
        available_balance: 18450.0,
        ledger_balance: 18450.0
      },
      {
        id: 'acct-003',
        member_id: 'member-001',
        account_number: 'BLB-00078123',
        account_name: 'Minor Account / Children\'s Account',
        account_type: 'minor',
        currency: 'LSL',
        status: 'active',
        available_balance: 3200.5,
        ledger_balance: 3200.5
      }
    ];
  }
};
