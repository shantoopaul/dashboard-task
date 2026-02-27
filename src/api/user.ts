import api from "./axios";

export interface UserProfile {
  id: number;
  name: string;
  email: string;
  status: string;
  joinDate: string;
}

export const getUserById = async (id: number): Promise<UserProfile> => {
  const response = await api.get<UserProfile>(`/api/users/${id}`);
  return response.data;
};
