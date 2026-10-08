// This module documents the exact integration boundary for future external providers.
export const providerBoundaries = {
  coreBanking: 'Supabase-backed adapter; replace with official core banking API later',
  paymentProvider: 'EcoCash provider boundary; credentials are not hardcoded',
  documents: 'Private storage buckets with member-scoped access'
};

export default providerBoundaries;
