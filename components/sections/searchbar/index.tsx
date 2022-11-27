"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useState, type KeyboardEvent } from "react";

const Searchbar = () => {
  const [query, setQuery] = useState("");
  const router = useRouter();

  const handleSendQuery = (event: KeyboardEvent<HTMLDivElement>) => {
    console.log("hello");
    if (query && event.code === "Enter") {
      console.log("Enterd");
      router.push(`/search/${query}`);
    }
  };

  return (
    <div className="flex items-center gap-4 rounded bg-card-dark px-5 py-3">
      <MagnifyingGlassIcon className="h-6 w-6" />
      <input
        type="text"
        placeholder="Search Movies and Series"
        value={query}
        onKeyDown={handleSendQuery}
        onChange={(event) => setQuery(event.target.value)}
        className="h-full w-full bg-transparent focus:outline-none"
      />
    </div>
  );
};

export default Searchbar;
