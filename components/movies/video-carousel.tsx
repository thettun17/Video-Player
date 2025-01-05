'use client'
import { useEffect, useState, useCallback } from "react";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MovieCard from "./card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
interface Movie {
  poster: string;
  title: string;
}

export default function VideoCarousel({ type, searchTerm }: { type: string, searchTerm: string }) {
  console.log("Render Videso")
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");

  const fetchMovies = async (search: string) => {
    const trimmedSearch = search?.trim();
    let url = `/api/movies`;
    if (trimmedSearch) url = `/api/movies?type=${encodeURIComponent(type.toLocaleLowerCase())}&search=${encodeURIComponent(trimmedSearch)}`;
  
    const response = await fetch(url);
    const data = await response.json();
    return data.data;
  };

  // Fetch movies based on searchTerm
  const { data, error, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["movies", debouncedSearchTerm],
    queryFn: () => fetchMovies(debouncedSearchTerm)
  });

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 500);
    return () => clearTimeout(handler);
  }, [searchTerm]);

  const router = useRouter()
  const clickHandleFunction = (item: Movie) => {
    router.push(`/videos/89`)
  }

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <>
      <div className="md:mx-12 mt-4">
        <div className="my-2 flex justify-between items-center">
          <h2 className="w-1/2">{type}</h2>
          <Button variant="ghost" asChild>
            <Link href="/videos">
              See All <ChevronRight />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 w-full">
          {data.map((item: Movie, index: number) => (
            <MovieCard key={index} item={item} onSelect={() => clickHandleFunction(item)} />
          ))}
        </div>
      </div>
    </>
  );
}
