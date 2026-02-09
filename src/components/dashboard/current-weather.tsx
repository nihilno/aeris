import { useWeatherData } from "@/api/queries";
import LightRay from "@/bits/light-ray";
import { EmptyWeather } from "@/components/global/empty";
import WeatherIcon from "@/components/global/weather-icon";
import { CurrentWeatherSkeleton } from "@/components/skeletons/cards";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { CARD_STYLE } from "@/constants";
import {
  cn,
  formatDateTime,
  formatHumidity,
  formatTemperature,
  formatWindSpeed,
} from "@/lib/utils";
import CardLabel from "./card-label";

function CurrentWeather() {
  const { data, isPending, error } = useWeatherData();

  if (isPending)
    return <CurrentWeatherSkeleton className="card-with-lines h-[490px]" />;
  if (error) return <h1>error</h1>;
  if (!data) return <EmptyWeather />;

  console.log(data);

  const {
    summary,
    time,
    temperature,
    apparentTemperature,
    humidity,
    windSpeed,
    icon,
  } = data.currently;

  return (
    <section className="relative">
      <LightRay />

      <Card className={cn(CARD_STYLE, "card-with-lines space-y-4 shadow")}>
        <CardLabel title="Current Weather" description={data.daily.summary} />

        <section className="grid grid-cols-1 gap-10 lg:grid-cols-2">
          <CardContent className="flex flex-col items-center gap-8 text-center">
            <h1 className="relative z-50 text-6xl font-bold">
              {formatTemperature(temperature)}
            </h1>

            <div className="flex flex-col items-center gap-2">
              <WeatherIcon icon={icon} className="text-5xl lg:text-6xl" />
              <p>{summary}</p>
            </div>

            <section className="flex flex-col items-center gap-12 sm:flex-row">
              <div className="flex flex-col items-center">
                <h2 className="text-muted-foreground text-lg">
                  {data.timezone}
                </h2>
                <p className="text-2xl font-semibold">
                  {data.latitude}&deg;&nbsp;
                  {data.latitude < 0 ? "S" : "N"}, {data.longitude}&deg;&nbsp;
                  {data.longitude < 0 ? "W" : "E"}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <h2 className="text-muted-foreground text-lg">Local Time</h2>
                <p className="text-2xl font-semibold">
                  {formatDateTime(time, "HH:mm")}
                </p>
              </div>
            </section>
          </CardContent>
          <CardFooter className="border-t">
            <div className="flex w-full items-center justify-between gap-4 text-sm sm:text-base md:flex-col lg:gap-12 lg:text-2xl">
              <div className="text-center">
                <h4 className="text-muted-foreground">Feels like</h4>
                <p>{formatTemperature(apparentTemperature)}</p>
              </div>
              <div className="text-center">
                <h4 className="text-muted-foreground">Humidity</h4>
                <p>{formatHumidity(humidity)}</p>
              </div>
              <div className="text-center">
                <h4 className="text-muted-foreground">Wind</h4>
                <p>{formatWindSpeed(windSpeed)}</p>
              </div>
            </div>
          </CardFooter>
        </section>
      </Card>
    </section>
  );
}

export default CurrentWeather;
