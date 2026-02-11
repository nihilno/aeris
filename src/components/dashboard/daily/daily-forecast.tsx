import LightRay from "@/bits/light-ray";
import { Card, CardContent } from "@/components/ui/card";
import { CARD_STYLE } from "@/constants";
import { cn } from "@/lib/utils";
import CardLabel from "../card-label";
import CurrentTable from "../current/current-table";

function DailyForecast() {
  return (
    <section className="relative">
      <LightRay direction="top-left" />

      <Card className={cn(CARD_STYLE, "card-with-lines space-y-4 shadow")}>
        <CardLabel
          title="Daily Forecast"
          description="Check the weather for the upcoming days."
        />
        <CardContent>
          <CurrentTable />
        </CardContent>
      </Card>
    </section>
  );
}

export default DailyForecast;
