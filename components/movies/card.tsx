import { Card, CardContent, CardFooter } from "@/components/ui/card";
interface CartItem {
  item: {
    image: string;
    title: string;
  };
  onSelect?: () => void;
}

export default function MovieCard({ item, onSelect }: CartItem) {
  return (
    <>
      <div className="p-1">
        <Card
          className="flex flex-col items-center rounded-none justify-center cursor-pointer"
          onClick={onSelect}
        >
          <CardContent className="p-1 overflow-hidden">
            <img
              src={item.image}
              alt={item.title}
              className="hover:scale-110"
            />
          </CardContent>
          <CardFooter className="p-1">{item.title}</CardFooter>
        </Card>
      </div>
    </>
  );
}
