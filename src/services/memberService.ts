export const memberService = {
  async getMemberProfile() {
    return {
      id: 'member-001',
      auth_user_id: 'demo-user',
      first_name: 'Mpho',
      last_name: 'Mokoena',
      phone: '+266 59001234',
      email: 'mpho.mokoena@boliba.co.ls',
      status: 'active'
    };
  }
};
