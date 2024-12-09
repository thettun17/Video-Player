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
import VideoCarousel from "@/components/video-carousel";
import SearchForm from "@/components/search-form";

export default function Page() {
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
  ];

  const popularSeries = [
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
  ];

  const featuredMovies = [
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
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Videos</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <SearchForm />
      </header>
      <ScrollArea className="h-full-custom w-full px-4">
        <div className="w-full">
          <VideoCarousel type="Popular - Movie" data={popularMovie} />
          <VideoCarousel type="Popular - Series" data={popularSeries} />
          <VideoCarousel type="Featured - Movie" data={featuredMovies} />
        </div>
        <div className="mb-5"></div>
      </ScrollArea>
    </>
  );
}
