export const accountService = {
  async getAccounts() {
    return [
      {
        id: 'acct-001',
        member_id: 'member-001',
        account_number: 'BLB-00012345',
        account_name: 'General Savings / Current Account',
        account_type: 'general-savings',
        account_label: 'General Savings / Current',
        currency: 'LSL',
        status: 'active',
        available_balance: 24580.42,
        ledger_balance: 24580.42,
        description: 'Core membership account for everyday saving and transactional needs.'
      },
      {
        id: 'acct-002',
        member_id: 'member-001',
        account_number: 'BLB-00067890',
        account_name: 'Thala Boliba (Transactional Account)',
        account_type: 'transactional',
        account_label: 'Thala Boliba',
        currency: 'LSL',
        status: 'active',
        available_balance: 18450.0,
        ledger_balance: 18450.0,
        description: 'Day-to-day transactional account with overdraft access and instant transfers.'
      },
      {
        id: 'acct-003',
        member_id: 'member-001',
        account_number: 'BLB-00078123',
        account_name: 'Minor Account / Children\'s Account',
        account_type: 'minor',
        account_label: 'Minor Account',
        currency: 'LSL',
        status: 'active',
        available_balance: 3200.5,
        ledger_balance: 3200.5,
        description: 'Savings account for children and youth under 18, guardian-controlled until adulthood.'
      }
    ];
  }
};
