"use client";
import { useState } from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
import MovieCard from "./card";
import SelectedMovie from "./selected-movie";
export default function List() {
  const popularMovie = [
    {
      title: "Smile - 2",
      image: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt10466872/img",
      title: "Dune: Prophecy",
    },
    {
      title: "Smile - 2",
      image: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt10466872/img",
      title: "Dune: Prophecy",
    },
    {
      title: "Smile - 2",
      image: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt10466872/img",
      title: "Dune: Prophecy",
    },
    {
      title: "Smile - 2",
      image: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt10466872/img",
      title: "Dune: Prophecy",
    },
    {
      title: "Smile - 2",
      image: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt10466872/img",
      title: "Dune: Prophecy",
    },
    {
      title: "Smile - 2",
      image: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt10466872/img",
      title: "Dune: Prophecy",
    },
    {
      title: "Smile - 2",
      image: "https://images.metahub.space/poster/small/tt29268110/img",
    },
    {
      title: "Arcane",
      image: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      image: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      image: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      image: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      image: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      image: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      image: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      image: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "Arcane",
      image: "https://images.metahub.space/poster/small/tt11126994/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt9813792/img",
      title: "From",
    },
    {
      title: "The Day of the Jackal",
      image: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      title: "The Day of the Jackal",
      image: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      title: "The Day of the Jackal",
      image: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      title: "The Day of the Jackal",
      image: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      title: "The Day of the Jackal",
      image: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      title: "The Day of the Jackal",
      image: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      title: "The Day of the Jackal",
      image: "https://images.metahub.space/poster/small/tt24053860/img",
    },
    {
      image: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
    {
      image: "https://images.metahub.space/poster/small/tt14218830/img",
      title: "Abbott Elementary",
    },
  ];
  interface Movie {
    image: string;
    title: string;
  }
  const [selectedMovie, setSelectedMovie] = useState<Movie>(popularMovie[0]);

  const handleMovieSelect = (movie: Movie) => {
    setSelectedMovie(movie);
  };
  return (
    <>
      <div className="w-full flex justify-between">
        <ScrollArea className="grow h-full-custom px-4">
          <div className="grid grid-cols-7 gap-4 w-full">
            {popularMovie.map((item, index) => (
              <MovieCard
                key={index}
                item={item}
                onSelect={() => handleMovieSelect(item)}
              />
            ))}
          </div>
        </ScrollArea>
        <SelectedMovie selectedItem={selectedMovie} />
      </div>
    </>
  );
}
