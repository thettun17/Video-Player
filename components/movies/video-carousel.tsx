'use client'

import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MovieCard from "./card";
import Link from "next/link";
import { useRouter } from "next/navigation";
interface VideoInterface {
  type: string;
  data: {
    poster: string;
    title: string;
  }[];
}

interface Movie {
  poster: string;
  title: string;
}

export default function VideoCarousel({ type, data }: VideoInterface) {
  const router = useRouter()
  const clickHandleFunction = (item: Movie) => {
    router.push(`/videos/89`)
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
          {data.map((item, index) => (
            <MovieCard key={index} item={item} onSelect={ () => clickHandleFunction(item) } />
          ))}
        </div>
      </div>
    </>
  );
}
