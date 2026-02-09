import Loader from "@/components/global/loader";
import { CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { cn } from "@/lib/utils";

export function CurrentWeatherSkeleton({ className }: { className?: string }) {
  return (
    <Skeleton className={cn("space-y-4 shadow", className)}>
      <CardContent className="grid h-full place-items-center">
        <Loader className="size-12" />
      </CardContent>
    </Skeleton>
  );
}
