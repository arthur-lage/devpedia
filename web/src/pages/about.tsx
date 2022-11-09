import Head from "next/head";
import { Header } from "../components/Header";

export default function About() {
  return (
    <>
      <Head>
        <title>About - Devpedia</title>
      </Head>

      <div className="flex flex-col">
        <Header />

        <main>
          <h1>About</h1>
        </main>
      </div>
    </>
  );
}
