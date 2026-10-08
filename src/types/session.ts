export type SessionState = {
  user: { id: string; email?: string } | null;
  isAuthenticated: boolean;
};

export const initialSessionState: SessionState = {
  user: null,
  isAuthenticated: false
};
