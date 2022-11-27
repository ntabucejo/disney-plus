"use client";

import { ArrowRightIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { type MouseEvent, useState } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSendQuery = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    if (query) {
      router.push(`/search/${query}`);
    }
  };

  return (
    <form>
      <div className="flex items-center gap-4 rounded bg-card-dark px-5 py-3">
        <MagnifyingGlassIcon className="h-6 w-6" />
        <input
          type="text"
          placeholder="Search Movies and Series"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          className="h-full w-full bg-transparent focus:outline-none"
        />
        {query ? (
          <button onClick={handleSendQuery}>
            <ArrowRightIcon className="h-6 w-6" />
          </button>
        ) : null}
      </div>
    </form>
  );
};

export default Searchbar;
