import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function SearchForm({ ...props }: React.ComponentProps<"form">) {
  return (
    <div className="flex grow justify-center items-center">
      <div className="relative w-[80%] md:w-[30%]">
        <Input
          type="text"
          placeholder="Search..."
          className="w-full pl-8 rounded-full"
        />
        <Search className="pointer-events-none absolute left-2 top-1/2 size-4 -translate-y-1/2 select-none opacity-50" />
      </div>
    </div>
  );
}
