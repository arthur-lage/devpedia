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
        <form onSubmit={searchForTerm}>
          <div className="flex flex-col">
            <label className="mb-3" htmlFor="search-for-term">Search for a term</label>

            <div className="flex items-center gap-8">
              <input
                type="text"
                autoFocus
                id="search-for-term"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <button type="submit">Search</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
