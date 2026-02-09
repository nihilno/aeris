import { useWeatherData } from "@/api/queries";
import { EmptyWeather } from "@/components/global/empty";
import WeatherIcon from "@/components/global/weather-icon";
import { CurrentWeatherSkeleton } from "@/components/skeletons/cards";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CARD_STYLE } from "@/constants";
import { cn, formatDateTime, formatTemperature } from "@/lib/utils";
import { ChevronsLeftRight } from "lucide-react";
import CardLabel from "./card-label";

function HourlyForecast() {
  const { data, isPending, error } = useWeatherData();

  if (isPending)
    return (
      <CurrentWeatherSkeleton className="card-with-diagonal-lines h-[254px]" />
    );
  if (error) return <h1>error</h1>;
  if (!data) return <EmptyWeather />;

  return (
    <Card className={cn(CARD_STYLE, "card-with-diagonal-lines shadow")}>
      <CardLabel title="Hourly Forecast" />

      <CardContent className="scrollbar-thin flex items-center gap-6 overflow-x-scroll pb-8">
        {data.hourly.data.map((hour, index) => (
          <SingleForecast key={index} hourlyData={hour} />
        ))}
      </CardContent>
      <CardFooter className="mx-auto -mt-4">
        <ChevronsLeftRight className="text-muted-foreground size-8" />
      </CardFooter>
    </Card>
  );
}

export default HourlyForecast;

function SingleForecast({ hourlyData }: { hourlyData: HourlyData }) {
  const { time, icon, temperature } = hourlyData;

  return (
    <section className="flex flex-col items-center gap-2 md:gap-4">
      <div className="border-muted-foreground/50 hover:bg-accent/75 flex shrink-0 flex-col items-center gap-2 rounded-xl border border-dashed px-6 py-1 transition hover:border-solid">
        <p className="text-sm md:text-base">{formatDateTime(time, "HH:mm")}</p>
        <WeatherIcon icon={icon} className="text-4xl md:text-5xl" />
        <p className="md:text-lg">{formatTemperature(temperature)}</p>
      </div>

      <small className="m text-xs sm:text-sm">
        {formatDateTime(time, "MMM d")}
      </small>
    </section>
  );
}
