import { FormEvent, useState } from "react";
import { Header } from "../components/Header";

export default function Search() {
  const [search, setSearch] = useState("");

  async function searchForTerm(e: FormEvent) {
    e.preventDefault();

    if (!search.trim()) return;

    // const res = await api.get("/search?q=" + search)

    // console.log(res.data)
  }

  return (
    <div className="flex flex-col">
      <Header />

      <main>
        <form
          onSubmit={searchForTerm}
          className="flex flex-col items-center mt-32"
        >
          <div className="flex flex-col">
            <label
              className="mb-3 text-pinkish-red-900 font-bold font-lato text-2xl"
              htmlFor="search-for-term"
            >
              Search for a word
            </label>

            <div className="flex items-center flex-col gap-8 w-[40rem]">
              <input
                type="text"
                autoFocus
                placeholder="Type the word you want to search for..."
                id="search-for-term"
                value={search}
                className="w-full transition-all duration-150 focus:border-pinkish-red-900 outline-none rounded-md border-2 font-lato border-slate-900 p-3 text-lg"
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit" className="w-full bg-pinkish-red-900 hover:brightness-150 transition-all duration-150 text-lg text-white rounded-md p-2 font-source-code-pro uppercase font-medium">
                Search
              </button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
