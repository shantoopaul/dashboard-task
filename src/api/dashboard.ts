import api from "./axios";

export interface DashboardOverview {
  totalUsers: number;
  activeUsers: number;
  revenue: number;
  growth: number;
}

export interface DashboardUser {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
  joinDate: string;
}

export interface DashboardAnalytics {
  date: string;
  views: number;
  clicks: number;
  conversions: number;
}

export interface DashboardProduct {
  id: number;
  name: string;
  price: number;
  sales: number;
  category: string;
}

export interface DashboardResponse {
  overview: DashboardOverview;
  users: DashboardUser[];
  analytics: DashboardAnalytics[];
  products: DashboardProduct[];
}

export const getDashboardData = async (): Promise<DashboardResponse> => {
  const response = await api.get<DashboardResponse>("/api/dashboard");
  return response.data;
};
