import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Header />

      <main className="my-16">
        <Hero />
      </main>

      <Footer />
    </div>
  );
}
