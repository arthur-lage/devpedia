import type { AppProps } from "next/app";
import { AuthProvider } from "../contexts/AuthContext";
import "../styles/global.css";
import { Loading } from "../components/Loading";
import { useAuth } from "../hooks/useAuth";

export default function App({ Component, pageProps }: AppProps) {
  const { isLoadingUser } = useAuth();

  return (
    <AuthProvider>
      {isLoadingUser ? <Loading /> : <Component {...pageProps} />}
    </AuthProvider>
  );
}
