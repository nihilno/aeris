import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDateTime, formatTemperature } from "@/lib/utils";
import { ChevronsLeftRight } from "lucide-react";
import WeatherIcon from "../global/weather-icon";
import { CurrentWeatherSkeleton } from "../skeletons/cards";

function HourlyForecast({ data, isPending }: HourlyForecastProps) {
  if (isPending)
    return (
      <CurrentWeatherSkeleton className="card-with-diagonal-lines h-[254px]" />
    );
  if (!data || !data.data) return <h1>No data available</h1>;

  return (
    <Card className="card-with-diagonal-lines shadow">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Hourly Forecast (Next 48 Hours)
        </CardTitle>
      </CardHeader>
      <CardContent className="mx-4 flex items-center gap-16 overflow-x-scroll pb-8">
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
    <div className="flex shrink-0 flex-col items-center gap-2">
      <p className="text-sm">{formatDateTime(time, "HH:mm")}</p>
      <WeatherIcon icon={icon} />
      <p>{formatTemperature(temperature)}</p>
    </div>
  );
}
