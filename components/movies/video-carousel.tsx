import {
  Carousel,
  CarouselPrevious,
  CarouselNext,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MovieCard from "./card";
import Link from "next/link";

interface VideoInterface {
    type: string,
    data: {
        image: string,
        title: string
    }[]
}

export default function VideoCarousel({ type, data }: VideoInterface) {
  return (
    <>
      <div className="mx-12 mt-4">
        <div className="my-2 flex justify-between items-center">
          <h2>{type}</h2>
          <Button variant="ghost" asChild>
            <Link href="/videos">See All <ChevronRight /></Link>
          </Button>
        </div>

        <Carousel className="w-full max-w-full"
          opts={{
            align: "start",
            loop: true,
          }}
          orientation="horizontal"
        >
          <CarouselContent>
            {data.map((item, index) => (
              <CarouselItem key={index} className="basis-1/6">
               <MovieCard item={item} />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
