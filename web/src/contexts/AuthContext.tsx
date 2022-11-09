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
  setIsLoadingUser: (state: boolean) => void;
  isLoadingUser: boolean;
}

export const AuthContext = createContext({} as AuthContextProps);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [code, setCode] = useState<string | null>(null);
  const [accessToken, setAccessToken] = useState<string | null>(null);
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [isLoadingUser, setIsLoadingUser] = useState(false);

  function logout() {
    setAccessToken(null);
    setCode(null);
    setCurrentUser(null);
    localStorage.setItem("devpedia.accessToken", JSON.stringify(null));
  }

  function handleChangeAccessToken(token: string | null) {
    api.defaults.headers.common["Authorization"] = "Bearer " + token;
    localStorage.setItem("devpedia.accessToken", JSON.stringify(token));
    setAccessToken(token);
  }

  useEffect(() => {
    async function authenticateUser() {
      if (localStorage.getItem("my_todos:token") !== null) {
      }

      try {
        setIsLoadingUser(true);

        const res = await api.post("/users", {
          code: code,
        });

        handleChangeAccessToken(res.data.token)
      } catch (err: any) {
        console.error(err);
      } finally {
        setIsLoadingUser(false);
      }
    }

    authenticateUser();
  }, [code]);

  async function fetchUserData() {
    setIsLoadingUser(true);

    try {
      const res = await api.get("/me", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      setCurrentUser(res.data.user);
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsLoadingUser(false);
    }
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
    isLoadingUser,
    setIsLoadingUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
