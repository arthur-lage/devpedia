import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";
import Head from "next/head";

export default function Home() {
  const router = useRouter();
  const { code } = router.query;

  const { setCode } = useAuth();

  useEffect(() => {
    if (code) {
      setCode(String(code));
      router.replace("/", undefined, { shallow: true });
    }
  }, [router]);

  return (
    <>
      <Head>
        <title>Home - Devpedia</title>
      </Head>
      <div className="flex flex-col">
        <Header />

        <main className="my-16">
          <Hero />
        </main>

        <Footer />
      </div>
    </>
  );
}
