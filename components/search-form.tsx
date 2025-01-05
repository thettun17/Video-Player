"use client"
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import {memo} from "react";

function SearchForm({ handleSearch } : { handleSearch: (term: string) => void}) {
  console.log("render search form");

  return (
    <div className="flex grow justify-center items-center">
      <div className="relative w-[80%] md:w-[30%]">
        <Input
          type="text"
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="Search..."
          className="w-full pl-8 rounded-full"
        />
        <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
      </div>
    </div>
  );
}

export default memo(SearchForm);
