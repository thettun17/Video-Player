import { ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import MovieCard from "./card";
import Link from "next/link";
interface VideoInterface {
  type: string;
  data: {
    image: string;
    title: string;
  }[];
}

export default function VideoCarousel({ type, data }: VideoInterface) {
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

        <div className="grid grid-cols-3 md:grid-cols-6 w-full">
          {data.map((item, index) => (
            <MovieCard key={index} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}
