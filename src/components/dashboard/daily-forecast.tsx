import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { formatDateTime, formatTemperature } from "@/lib/utils";
import {
  Calendar,
  Cloud,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
} from "lucide-react";
import WeatherIcon from "../global/weather-icon";
import { CurrentWeatherSkeleton } from "../skeletons/cards";

function DailyForecast({ data, isPending }: DailyForecastProps) {
  if (isPending)
    return <CurrentWeatherSkeleton className="card-with-lines h-[566px]" />;
  if (!data || !data.data) return <h1>No data available</h1>;

  return (
    <Card className="card-with-lines space-y-4 shadow">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Daily Forecast</CardTitle>
        <CardDescription>
          Check the weather for the upcoming days.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>
                <Calendar className="size-5.5" />
              </TableHead>
              <TableHead className="flex items-center justify-center">
                <Cloud className="size-5.5" />
              </TableHead>
              <TableHead>
                <Thermometer className="size-5.5" />
              </TableHead>
              <TableHead>
                <ThermometerSun className="text-destructive size-5.5" />
              </TableHead>
              <TableHead>
                <ThermometerSnowflake className="size-5.5 text-blue-500" />
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody className="text-muted-foreground">
            {data.data.map((day, index) => (
              <TableRow key={index}>
                <TableCell>{formatDateTime(day.time, "EEE")}</TableCell>
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
