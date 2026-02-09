import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatDateTime, getMoonPhase } from "@/lib/utils";
import { CurrentWeatherSkeleton } from "../skeletons/cards";

function AdditionalWeather({ data, isPending }: DailyForecastProps) {
  if (isPending)
    return (
      <CurrentWeatherSkeleton className="card-with-diagonal-lines h-[382px]" />
    );
  if (!data || !data.data) return <h1>No data available</h1>;
  const today = data.data[1];

  return (
    <Card className="card-with-diagonal-lines shadow">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Additional Weather Info
        </CardTitle>
        <CardDescription>
          Get more details about the current weather conditions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <article className="space-y-4">
          <div className="flex items-center justify-between">
            <h5 className="text-muted-foreground">Cloudiness (%)</h5>
            <p>{today.cloudCover * 100}%</p>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-muted-foreground">UV Index</h5>
            <p>{today.uvIndex}</p>
          </div>

          <div className="flex items-center justify-between">
            <h5 className="text-muted-foreground">Pressure (hPa)</h5>
            <p>{today.pressure.toFixed(0)}</p>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-muted-foreground">Sunrise</h5>
            <p>{formatDateTime(today.sunriseTime, "HH:mm:ss")}</p>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-muted-foreground">Sunset</h5>
            <p>{formatDateTime(today.sunsetTime, "HH:mm:ss")}</p>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-muted-foreground">Moon Phase</h5>
            <p>{getMoonPhase(today.moonPhase)}</p>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-muted-foreground">Visiblity</h5>
            <p>{today.visibility}km</p>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}

export default AdditionalWeather;
