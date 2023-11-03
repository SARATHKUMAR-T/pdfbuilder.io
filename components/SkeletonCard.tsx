import { Skeleton } from "@/components/ui/skeleton";
import { Card } from "./ui/card";
export function SkeletonCard() {
  return (
    <>
      {Array.from(new Array(8), (el, i) => (
        <Card key={i} className="p-2 w-[16rem] h-[14rem] flex flex-col ">
          <div className="h-[1/2] flex-1">
            <Skeleton className="w-full  h-full" />
          </div>
          <div className=" h-[1/2] flex-1 flex flex-col justify-center w-full gap-3">
            <Skeleton className="w-full h-10" />
            <Skeleton className="w-full h-10" />
          </div>
        </Card>
      ))}
    </>
  );
}
