interface SelectedMovieProps {
  selectedItem: { image: string; title: string };
}
export default function SelectedMovie({ selectedItem }: SelectedMovieProps) {
  return (
    <>
      <div className="w-[29rem] flex-none self-stretch relative rounded-tl-lg px-[2.5rem] py-[2rem] bg-[#0f0d20]">
        <div className="absolute w-full h-full left-[-10] right-[-10px] top-[10px] bottom-[10px] ">
          <img
            src={selectedItem.image}
            alt=""
            className="w-full h-full object-cover object-center opacity-[0.3] blur-[10px] block"
          />
        </div>
        <div className="text-white flex flex-col justify-center items-center pt-4">
          <h1 className="text-3xl">{selectedItem.title}</h1>
          <div className="flex">
            <div>127 min</div>
            <div>2024</div>
          </div>
        </div>
      </div>
    </>
  );
}
