import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from "@/components/ui/empty";
import { ArrowUpRightIcon, CloudAlertIcon, RefreshCcw } from "lucide-react";

export function EmptyWeather() {
  return (
    <Card>
      <CardContent className="py-4">
        <Empty>
          <EmptyHeader>
            <EmptyMedia variant="icon" className="scale-140">
              <CloudAlertIcon />
            </EmptyMedia>
            <EmptyTitle>No Weather Data</EmptyTitle>
            <EmptyDescription>
              We couldn't find any weather for this specified location. Please,
              pick another one or try again later.
            </EmptyDescription>
          </EmptyHeader>
          <EmptyContent className="flex-row justify-center gap-2">
            <Button>
              <RefreshCcw /> Refresh
            </Button>
          </EmptyContent>
          <Button
            variant="link"
            asChild
            className="text-muted-foreground"
            size="sm"
          >
            <p className="cursor-pointer">
              Learn More <ArrowUpRightIcon />
            </p>
          </Button>
        </Empty>
      </CardContent>
    </Card>
  );
}
