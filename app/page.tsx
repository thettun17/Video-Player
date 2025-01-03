'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import VideoCarousel from "@/components/movies/video-carousel";
import SearchForm from "@/components/search-form";
import { useEffect, useState } from "react";

export default function Page() {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await fetch("/api/movies");
    const data = await response.json();
    console.log(data, "inside fetchMovies");
    setMovies(data.data);
  };

  useEffect(() => {fetchMovies()}, []);

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
  ];

  const popularSeries = [
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
  ];

  const featuredMovies = [
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
  return (
    <>
      <header className="flex items-center justify-between h-16 border-b px-4 ">
        <div className="flex shrink-0 items-center">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <SearchForm />
      </header>
      <ScrollArea className="h-full-custom px-4">
        <div className="w-full max-w-full overflow-x-hidden">
          <VideoCarousel type=" Movie" data={movies} />
          <VideoCarousel type="Popular - Movie" data={popularMovie} />
          <VideoCarousel type="Popular - Series" data={popularSeries} />
          <VideoCarousel type="Featured - Movie" data={featuredMovies} />
        </div>
        <div className="mb-5"></div>
      </ScrollArea>
    </>
  );
}
