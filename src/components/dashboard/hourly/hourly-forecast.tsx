import CardLabel from "@/components/dashboard/card-label";
import { Card, CardFooter } from "@/components/ui/card";
import { CARD_STYLE } from "@/constants";
import { cn } from "@/lib/utils";
import { ChevronsLeftRight } from "lucide-react";
import HourlyContent from "./hourly-content";

function HourlyForecast() {
  return (
    <Card className={cn(CARD_STYLE, "card-with-diagonal-lines shadow")}>
      <CardLabel title="Hourly Forecast" />
      <HourlyContent />
      <CardFooter className="mx-auto -mt-4">
        <ChevronsLeftRight className="text-muted-foreground size-8" />
      </CardFooter>
    </Card>
  );
}

export default HourlyForecast;
