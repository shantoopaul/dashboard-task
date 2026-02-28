import { createContext } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  status: string;
  joinDate: string;
  token: string;
}

interface AuthContextType {
  user: User | null;
  login: (
    userData: {
      id: number;
      email: string;
      token: string;
    },
    remember: boolean,
  ) => Promise<void>;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined,
);

export type { User, AuthContextType };
