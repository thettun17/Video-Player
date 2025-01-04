import { Card, CardContent, CardFooter } from "@/components/ui/card";
interface CartItem {
  item: {
    poster: string;
    title: string;
  },
  onSelect?: () => void,
  isSeleted?: boolean
}

export default function MovieCard({ item, onSelect, isSeleted }: CartItem) {

  return (
    <>
      <div className="p-1">
        <Card
          className={`flex flex-col items-center rounded-none shrink justify-center cursor-pointer h-[250px] ${isSeleted ? "selected-card" : " "} `}
          onClick={onSelect}
        >
          <CardContent className="p-1 overflow-hidden">
            <img
              src={item.poster}
              alt={item.title}
              className="hover:scale-110 object-cover object-center"
            />
          </CardContent>
          <CardFooter className="p-1 hidden md:block text-center w-full truncate text-sm">{item.title}</CardFooter>
        </Card>
      </div>
    </>
  );
}
