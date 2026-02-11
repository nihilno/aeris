import { useWeatherData } from "@/api/queries";
import WeatherIcon from "@/components/global/weather-icon";
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
  SunMedium,
  Thermometer,
  ThermometerSnowflake,
  ThermometerSun,
} from "lucide-react";
import { EmptyWeather } from "../../global/empty";
import { CurrentWeatherSkeleton } from "../../skeletons/cards";

function CurrentTable() {
  const { data, isPending, error } = useWeatherData();

  if (isPending)
    return <CurrentWeatherSkeleton className="card-with-lines h-[430px]" />;
  if (error) return <h1>error</h1>;
  if (!data) return <EmptyWeather />;

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>
            <Calendar className="size-5.5 md:size-6.5" aria-hidden="true" />
            <span className="sr-only">Date</span>
          </TableHead>
          <TableHead className="flex items-center justify-center">
            <SunMedium className="size-5.5 md:size-6.5" aria-hidden="true" />
            <span className="sr-only">Weather</span>
          </TableHead>
          <TableHead>
            <Thermometer className="size-5.5 md:size-6.5" aria-hidden="true" />
            <span className="sr-only">Average Temperature</span>
          </TableHead>
          <TableHead>
            <ThermometerSun
              className="text-destructive size-5.5 md:size-6.5"
              aria-hidden="true"
            />
            <span className="sr-only">Max Temperature</span>
          </TableHead>
          <TableHead>
            <ThermometerSnowflake
              className="size-5.5 text-blue-500 md:size-6.5"
              aria-hidden="true"
            />
            <span className="sr-only">Min Temperature</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="text-muted-foreground md:text-base">
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
  );
}

export default CurrentTable;
