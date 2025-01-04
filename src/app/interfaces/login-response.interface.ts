export interface LoginResponse {
  accessToken: string;
  // Add any other properties that might be returned in the login response
  message?: string;
  userId?: string;
  email?: string;
}

export interface TicketResponse {
  id: number;
  name: string;
  price : number;
  image?: string;
  stockQuantity: number;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
}
