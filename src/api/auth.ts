import api from "./axios";

export interface LoginResponse {
  id: number;
  email: string;
  token: string;
}

export const loginUser = async (
  email: string,
  password: string,
): Promise<LoginResponse> => {
  const response = await api.post<LoginResponse>("/api/login", {
    email,
    password,
  });

  return response.data;
};
