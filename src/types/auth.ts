export type AuthSessionState = {
  isLoading: boolean;
  user: { id: string; email?: string } | null;
  isAuthenticated: boolean;
};
