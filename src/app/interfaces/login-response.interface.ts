export interface LoginResponse {
  token: string;
  // Add any other properties that might be returned in the login response
  userId?: string;
  email?: string;
}
