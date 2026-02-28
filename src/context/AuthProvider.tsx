import { useState, type ReactNode } from "react";
import { AuthContext, type User } from "./AuthContext";
import { getUserById } from "../api/user";
import { isTokenExpired } from "../utils/token";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [user, setUser] = useState<User | null>(() => {
    const storedUser =
      localStorage.getItem("user") || sessionStorage.getItem("user");

    if (!storedUser) return null;

    const parsedUser: User = JSON.parse(storedUser);

    if (parsedUser.token && isTokenExpired(parsedUser.token)) {
      localStorage.removeItem("user");
      sessionStorage.removeItem("user");
      return null;
    }

    return parsedUser;
  });

  const login = async (
    userData: {
      id: number;
      email: string;
      token: string;
    },
    remember: boolean,
  ) => {
    try {
      const profile = await getUserById(userData.id);

      const fullUser: User = {
        ...profile,
        token: userData.token,
      };

      setUser(fullUser);

      if (remember) {
        localStorage.setItem("user", JSON.stringify(fullUser));
      } else {
        sessionStorage.setItem("user", JSON.stringify(fullUser));
      }
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
