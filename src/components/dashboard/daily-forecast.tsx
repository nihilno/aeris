import { useWeatherData } from "@/api/queries";
import { EmptyWeather } from "@/components/global/empty";
import WeatherIcon from "@/components/global/weather-icon";
import { CurrentWeatherSkeleton } from "@/components/skeletons/cards";
import { Card, CardContent } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CARD_STYLE } from "@/constants";
import { cn, formatDateTime, formatTemperature } from "@/lib/utils";
import {
  Calendar,
  SunMedium,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
} from "lucide-react";
import CardLabel from "./card-label";

function DailyForecast() {
  const { data, isPending, error } = useWeatherData();

  if (isPending)
    return <CurrentWeatherSkeleton className="card-with-lines h-[566px]" />;
  if (error) return <h1>error</h1>;
  if (!data) return <EmptyWeather />;

  return (
    <Card
      className={cn(CARD_STYLE, "card-with-diagonal-lines space-y-4 shadow")}
    >
      <CardLabel
        title="Daily Forecast"
        description="Check the weather for the upcoming days."
      />
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Calendar className="size-5.5" aria-hidden="true" />
                <span className="sr-only">Date</span>
              </TableHead>
              <TableHead className="flex items-center justify-center">
                <SunMedium className="size-5.5" aria-hidden="true" />
                <span className="sr-only">Weather</span>
              </TableHead>
              <TableHead>
                <Thermometer className="size-5.5" aria-hidden="true" />
                <span className="sr-only">Average Temperature</span>
              </TableHead>
              <TableHead>
                <ThermometerSun
                  className="text-destructive size-5.5"
                  aria-hidden="true"
                />
                <span className="sr-only">Max Temperature</span>
              </TableHead>
              <TableHead>
                <ThermometerSnowflake
                  className="size-5.5 text-blue-500"
                  aria-hidden="true"
                />
                <span className="sr-only">Min Temperature</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-muted-foreground">
            {data.daily.data.map((day, index) => (
              <TableRow key={index}>
                <TableCell className="w-15">
                  {formatDateTime(day.time, "dd EEE")}
                </TableCell>
                <TableCell className="text-center">
                  <WeatherIcon icon={day.icon} />
                </TableCell>
                <TableCell>
                  {formatTemperature(
                    (day.temperatureHigh + day.temperatureLow) / 2,
                  )}
                </TableCell>
                <TableCell>{formatTemperature(day.temperatureHigh)}</TableCell>
                <TableCell>{formatTemperature(day.temperatureLow)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default DailyForecast;
