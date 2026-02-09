import WeatherIcon from "@/components/global/weather-icon";
import { CurrentWeatherSkeleton } from "@/components/skeletons/cards";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  formatDateTime,
  formatHumidity,
  formatTemperature,
  formatWindSpeed,
} from "@/lib/utils";

function CurrentWeather({ data, isPending }: CurrentWeatherProps) {
  if (isPending)
    return <CurrentWeatherSkeleton className="card-with-lines h-[490px]" />;
  if (!data) return <h1>No data available</h1>;

  const {
    summary,
    time,
    temperature,
    apparentTemperature,
    humidity,
    windSpeed,
    icon,
  } = data;

  return (
    <Card className="card-with-lines space-y-4 shadow">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Current Weather
        </CardTitle>
        <CardDescription>Check the latest weather conditions.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-6xl font-bold">{formatTemperature(temperature)}</h1>

        <div className="flex flex-col items-center gap-2">
          <WeatherIcon icon={icon} className="text-5xl" />
          <p>{summary}</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-muted-foreground text-lg">Local Time</h2>
          <p className="text-2xl font-semibold">
            {formatDateTime(time, "HH:mm")}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-between gap-4">
          <div className="text-center">
            <h4 className="text-muted-foreground">Feels like</h4>
            <p className="text-lg">{formatTemperature(apparentTemperature)}</p>
          </div>
          <div className="text-center">
            <h4 className="text-muted-foreground">Humidity</h4>
            <p className="text-lg">{formatHumidity(humidity)}</p>
          </div>
          <div className="text-center">
            <h4 className="text-muted-foreground">Wind</h4>
            <p className="text-lg">{formatWindSpeed(windSpeed)}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CurrentWeather;
