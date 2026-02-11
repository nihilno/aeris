import { useWeatherData } from "@/api/queries";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ArrowUpRightIcon, RefreshCcwDot, ZapOff } from "lucide-react";

function Error() {
  const { refetch } = useWeatherData();

  return (
    <Empty className="rounded-xl border py-4!">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <ZapOff />
        </EmptyMedia>
        <EmptyTitle>We couldn't fetch the data</EmptyTitle>
        <EmptyDescription>
          There was an error fetching the data. Please try again later.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent className="flex-row justify-center gap-2">
        <Button onClick={() => refetch()} className="group">
          <RefreshCcwDot className="transition group-hover:rotate-90" /> Retry
        </Button>
      </EmptyContent>
      <Button
        variant="link"
        asChild
        className="text-muted-foreground"
        size="sm"
      >
        <span className="cursor-pointer hover:underline">
          Learn More <ArrowUpRightIcon />
        </span>
      </Button>
    </Empty>
  );
}

export default Error;
