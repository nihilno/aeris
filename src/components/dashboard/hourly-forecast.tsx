import { EmptyWeather } from "@/components/global/empty";
import WeatherIcon from "@/components/global/weather-icon";
import { CurrentWeatherSkeleton } from "@/components/skeletons/cards";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CARD_STYLE } from "@/constants";
import { cn, formatDateTime, formatTemperature } from "@/lib/utils";
import { ChevronsLeftRight } from "lucide-react";
import CardLabel from "./card-label";

function HourlyForecast({ data, isPending }: HourlyForecastProps) {
  if (isPending)
    return (
      <CurrentWeatherSkeleton className="card-with-diagonal-lines h-[254px]" />
    );
  if (!data || !data.data) return <EmptyWeather />;

  return (
    <Card className={cn(CARD_STYLE, "card-with-diagonal-lines shadow")}>
      <CardLabel title="Hourly Forecast" />

      <CardContent className="scrollbar-thin flex items-center gap-6 overflow-x-scroll pb-8">
        {data.data.map((hour, index) => (
          <SingleForecast key={index} hourlyData={hour} />
        ))}
      </CardContent>
      <CardFooter className="mx-auto -mt-4">
        <ChevronsLeftRight className="text-muted-foreground" />
      </CardFooter>
    </Card>
  );
}

export default HourlyForecast;

function SingleForecast({ hourlyData }: { hourlyData: HourlyData }) {
  const { time, icon, temperature } = hourlyData;

  return (
    <div className="border-muted-foreground/50 hover:bg-accent/75 flex shrink-0 flex-col items-center gap-2 rounded-xl border border-dashed px-6 py-1 transition hover:border-solid">
      <p className="text-sm">{formatDateTime(time, "HH:mm")}</p>
      <WeatherIcon icon={icon} />
      <p>{formatTemperature(temperature)}</p>
    </div>
  );
}
