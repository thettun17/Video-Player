"use client";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MovieCard from "./card";
import SelectedMovie from "./selected-movie";
import { useRouter } from "next/navigation";
export default function List() {
  const router = useRouter()
  const popularMovie = [
    {
      title: "Smile - 2",
      poster: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt10466872/img",
      title: "Dune: Prophecy",
    },
    {
      title: "Smile - 2",
      poster: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt10466872/img",
      title: "Dune: Prophecy",
    },
    {
      title: "Smile - 2",
      poster: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt10466872/img",
      title: "Dune: Prophecy",
    },
    {
      title: "Smile - 2",
      poster: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt10466872/img",
      title: "Dune: Prophecy",
    },
    {
      title: "Smile - 2",
      poster: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt10466872/img",
      title: "Dune: Prophecy",
    },
    {
      title: "Smile - 2",
      poster: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt10466872/img",
      title: "Dune: Prophecy",
    },
    {
      title: "Smile - 2",
      poster: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      title: "Arcane",
      poster: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      poster: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      poster: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      poster: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      poster: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      poster: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      poster: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      poster: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      poster: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "The Day of the Jackal",
      poster: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      title: "The Day of the Jackal",
      poster: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      title: "The Day of the Jackal",
      poster: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      title: "The Day of the Jackal",
      poster: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      title: "The Day of the Jackal",
      poster: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      title: "The Day of the Jackal",
      poster: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      title: "The Day of the Jackal",
      poster: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      poster: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
  ];
  interface Movie {
    poster: string;
    title: string;
  }
  const [selectedMovie, setSelectedMovie] = useState<Movie>(popularMovie[0]);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const handleMovieSelect = (movie: Movie, index: number) => {
    if (selectedIndex == index) {
      router.push(`/videos/8999`)
    }
    setSelectedIndex(index)
    setSelectedMovie(movie)
  };

  return (
    <>
      <div className="w-full flex justify-between">
        <ScrollArea className="w-full md:w-[70%] h-full-custom px-4">
          <div className="grid grid-cols-mobile md:grid-cols-laptop gap-4 w-full">
            {popularMovie.map((item, index) => (
              <MovieCard
                key={index}
                item={item}
                onSelect={() => handleMovieSelect(item, index)}
                isSeleted={selectedIndex == index}
              />
            ))}
          </div>
        </ScrollArea>
        <SelectedMovie selectedItem={selectedMovie} isDetail={false} />
      </div>
    </>
  );
}
