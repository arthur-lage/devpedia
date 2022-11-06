import { createContext, ReactNode, useEffect, useState } from "react";
import { api } from "../services/api";
import axios from "axios";

export interface AuthContextProps {
  code: string | null;
  setCode: (newCode: string) => void;
  accessToken: string | null;
  setAccessToken: (newAccessToken: string) => void;
  logout: () => void;
  currentUser: any;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [code, setCode] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);

  function logout() {
    setAccessToken(null);
    setCode(null);
    setCurrentUser(null);
    localStorage.setItem("devpedia.accessToken", JSON.stringify(null));
  }

  useEffect(() => {
    async function authenticateUser() {
      if (!code) return;

      try {
        const res = await api.post("/users", {
          code: code,
        });

        api.defaults.headers.common["Authorization"] =
          "Bearer " + res.data.token;
        localStorage.setItem(
          "devpedia.accessToken",
          JSON.stringify(res.data.token)
        );
        setAccessToken(res.data.token);
      } catch (err: any) {
        console.error(err);
      }
    }

    authenticateUser();
  }, [code]);

  async function fetchUserData() {
    const res = await api.get("/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });

    setCurrentUser(res.data.user);
  }

  useEffect(() => {
    if (accessToken) {
      fetchUserData();
    }
  }, [accessToken]);

  const value = {
    code,
    setCode,
    accessToken,
    setAccessToken,
    logout,
    fetchUserData,
    currentUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
