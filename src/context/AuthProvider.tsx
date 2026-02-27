import { useState, type ReactNode } from "react";
import { AuthContext, type User } from "./AuthContext";
import { getUserById } from "../api/user";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = async (userData: {
    id: number;
    email: string;
    token: string;
  }) => {
    try {
      const profile = await getUserById(userData.id);

      const fullUser: User = {
        ...profile,
        token: userData.token,
      };

      setUser(fullUser);
      localStorage.setItem("user", JSON.stringify(fullUser));
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
