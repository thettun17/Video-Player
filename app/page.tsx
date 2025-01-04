'use client';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { ScrollArea } from "@/components/ui/scroll-area";
import VideoCarousel from "@/components/movies/video-carousel";
import SearchForm from "@/components/search-form";
import { useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

const fetchMovies = async () => {
  const response = await fetch("/api/movies");
  const data = await response.json();
  return data.data;
};
export default function Page() {
  const { data, error, isLoading, isError } = useQuery({
    queryKey: ["movies"],
    queryFn: fetchMovies,
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError) {
    return <div>Error: {error.message}</div>;
  }

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
          <VideoCarousel type=" Movie" data={data} />
        </div>
        <div className="mb-5"></div>
      </ScrollArea>
    </>
  );
}
