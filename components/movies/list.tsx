"use client";
import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import MovieCard from "./card";
import SelectedMovie from "./selected-movie";
import { useRouter } from "next/navigation";
import InfiniteScroll from "react-infinite-scroll-component";
import { Movie } from "@/utils/movie";

const fetchMovies = async (search: string, page: number) => {
  const trimmedSearch = search?.trim();
  let url = `/api/movies?page=${page}&limit=20`;
  if (trimmedSearch) {
    url = `/api/movies?search=${encodeURIComponent(trimmedSearch)}&page=${page}&limit=10`;
  }

  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default function List({ searchTerm }: { searchTerm: string }) {
  const router = useRouter();
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>("");
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [page, setPage] = useState<number>(1);
  const [hasMore, setHasMore] = useState<boolean>(true);
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
      setPage(1)
      if(searchTerm === null) {
        setHasMore(true)
      }
    }, 500);
    return () => clearTimeout(handler);
   
  }, [searchTerm]);

  const { data, error, isLoading, isError } = useQuery<any, Error>({
    queryKey: ["movies", debouncedSearchTerm, page],
    queryFn: () => fetchMovies(debouncedSearchTerm, page),
  });

  useEffect(() => {
    if (data) {
      if (page === 1) {
        setMovies(data.movies);
        setSelectedMovie(data.movies[0])
      } else {
        setMovies((prevMovies) => [...prevMovies, ...data.movies]); 
      }
      setHasMore((data?.pagination?.totalPages !== page)); 
    }
  }, [data, page]);

  const fetchMoreData = () => {
    if (hasMore) {
      setPage((prev) => {
        return prev + 1
      });
    }
    console.log(page, "Has page")
  };

  const handleMovieSelect = (movie: Movie, index: number) => {
    if (selectedIndex === index) {
      router.push(`/videos/8999`);
    }
    setSelectedIndex(index);
    setSelectedMovie(movie);
  };

  if (isLoading && page === 1) {
    return <div className="text-center w-full">Loading...</div>;
  }

  if (isError) {
    return <div className="text-center w-full">Error: {error.message}</div>;
  }
  

  return (
    <>
      <div className="w-full flex justify-between">
        <div id="scrollableDiv" style={{ overflow: "auto" }} className="w-full md:w-[70%] h-full-custom px-4">
          <InfiniteScroll
            dataLength={data?.pagination?.totalMovies}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4 className="text-center w-full">Loading...</h4>}
            inverse={false}
            scrollableTarget="scrollableDiv"
          >
            <div className="grid grid-cols-mobile md:grid-cols-laptop gap-4 w-full">
              {movies.map((item: Movie, index: number) => (
                <MovieCard
                  key={index}
                  item={item}
                  onSelect={() => handleMovieSelect(item, index)}
                  isSeleted={selectedIndex === index}
                />
              ))}
            </div>
          </InfiniteScroll>
        </div>
        <SelectedMovie selectedItem={selectedMovie} isDetail={false} />
      </div>
    </>
  );
}
