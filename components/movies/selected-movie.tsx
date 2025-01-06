import { CirclePlay, BookmarkCheck } from "lucide-react";
import Link from "next/link";
import { Movie } from "@/utils/movie";
interface SelectedMovieProps {
  selectedItem: Movie | null
  isDetail: boolean
}
export default function SelectedMovie({ selectedItem, isDetail }: SelectedMovieProps) {
  return (
    <>
      <div className={`flex-none self-stretch relative rounded-tl-lg px-[2.5rem] py-[2rem] bg-[#0f0d20]  z-10  md:flex flex-col ${isDetail ? 'md:w-full' : 'md:w-[30%] hidden h-full-custom'}`}>
        <div className="absolute w-full h-full left-[-10] right-[-10px] top-[10px] bottom-[10px] z-[-1]">
          <img
            src={selectedItem?.poster}
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.3] blur-[10px] block"
          />
        </div>

        <div className="text-white self-stretch flex-1 pt-4 z-20 overflow-y-auto">
          <h1 className="text-3xl mb-8 text-center">{selectedItem?.title}</h1>
          <div className="flex justify-between w-full mt-4">
            <div>{selectedItem?.minutes} min</div>
            <div>{selectedItem?.year}</div>
            <div>{selectedItem?.resolution && "1080p"}</div>
          </div>
          <div className="mt-4 leading-relaxed">
            <p>
              {selectedItem?.plot}
            </p>
          </div>

          <div className="mt-6 w-full">
            <div className="mb-3 text-white/90 hidden md:block">GENRES</div>
            <div className="flex w-full flex-wrap gap-4 justify-center md:justify-normal">
              {selectedItem?.genres.map((genre: string, genreIndex: number) => (
                <Link href="" className="selected-item-btn" key={genreIndex}>
                  {genre}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 w-full">
            <div className="mb-3 text-white/90">Cast</div>
            <div className="flex w-full flex-wrap gap-4">
              {selectedItem?.cast.map((cast: string, castIndex: number) => (
                <Link href="" className="selected-item-btn" key={castIndex}>
                  {cast}
                </Link>
              ))}
            </div>
          </div>

          <div className="mt-6 w-full">
            <div className="mb-3 text-white/90">Directors</div>
            <div className="flex w-full flex-wrap gap-4">
              {selectedItem?.directors.map((director: string, directorIndex: number) => (
                <Link href="#" className="selected-item-btn" key={directorIndex}>
                  {director}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="self-end flex w-full justify-between pt-14 text-red-50">
          <div className="circle-btn group/save">
            <BookmarkCheck className="group-hover/save:text-white" />
          </div>
          <Link href="/videos/98/play" className="player-btn group/player hover:bg-green-500">
            <CirclePlay className="group-hover/player:text-white" />
            <span className="group-hover/player:text-white">Play</span>
          </Link>
        </div>
      </div>
    </>
  );
}
