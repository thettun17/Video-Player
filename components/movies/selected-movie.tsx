interface SelectedMovieProps {
  selectedItem: { image: string; title: string };
}
import { CirclePlay, BookmarkCheck } from "lucide-react";
import Link from "next/link";
export default function SelectedMovie({ selectedItem }: SelectedMovieProps) {
  return (
    <>
      <div className="hidden md:w-[30%] flex-none self-stretch relative rounded-tl-lg px-[2.5rem] py-[2rem] bg-[#0f0d20] h-full-custom z-10  md:flex flex-col">
        <div className="absolute w-full h-full left-[-10] right-[-10px] top-[10px] bottom-[10px] z-[-1]">
          <img
            src={selectedItem.image}
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.3] blur-[10px] block"
          />
        </div>

        <div className="text-white self-stretch flex-1 pt-4 z-20 overflow-y-auto">
          <h1 className="text-3xl mb-8 text-center">{selectedItem.title}</h1>
          <div className="flex justify-between w-full mt-4">
            <div>127 min</div>
            <div>2024</div>
            <div>1080p</div>
          </div>
          <div className="mt-4 leading-relaxed">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Recusandae ab iste a labore tenetur ipsa exercitationem ut! Nemo
              dolor quis cupiditate, beatae at dolores magnam suscipit, rerum
              soluta, obcaecati deserunt!
            </p>
          </div>

          <div className="mt-6 w-full">
            <div className="mb-3 text-white/90">GENRES</div>
            <div className="flex w-full flex-wrap gap-4">
              <Link href="#" className="selected-item-btn">
                Horry
              </Link>
              <Link href="#" className="selected-item-btn">
                Mystrey
              </Link>
              <Link href="#" className="selected-item-btn">
                Thriller
              </Link>
            </div>
          </div>

          <div className="mt-6 w-full">
            <div className="mb-3 text-white/90">Cast</div>
            <div className="flex w-full flex-wrap gap-4">
              <Link href="#" className="selected-item-btn">
                Horry
              </Link>
              <Link href="#" className="selected-item-btn">
                Mystrey
              </Link>
              <Link href="#" className="selected-item-btn">
                Thriller
              </Link>
              <Link href="#" className="selected-item-btn">
                Thriller
              </Link>
            </div>
          </div>

          <div className="mt-6 w-full">
            <div className="mb-3 text-white/90">Directors</div>
            <div className="flex w-full flex-wrap gap-4">
              <Link href="#" className="selected-item-btn">
                Horry
              </Link>
              <Link href="#" className="selected-item-btn">
                Mystrey
              </Link>
            </div>
          </div>
        </div>

        <div className="self-end flex w-full justify-between pt-14 text-red-50">
          <div className="circle-btn group/save">
            <BookmarkCheck className="group-hover/save:text-white"/>
          </div>
          <Link href="#" className="player-btn group/player hover:bg-green-500">
            <CirclePlay className="group-hover/player:text-white"/>
            <span className="group-hover/player:text-white">Play</span>
          </Link>
        </div>
      </div>
    </>
  );
}
