import { formatDateTime, formatTemperature } from "@/lib/utils";
import WeatherIcon from "../../global/weather-icon";

function SingleForecast({ hourlyData }: { hourlyData: HourlyData }) {
  const { time, icon, temperature } = hourlyData;

  return (
    <section className="flex flex-col items-center gap-2 pt-4 transition-transform duration-500 ease-in-out hover:scale-110 md:gap-4">
      <div className="border-muted-foreground/50 hover:bg-accent/30 flex shrink-0 flex-col items-center gap-2 rounded-xl border border-dashed px-6 py-1 transition-all duration-500 ease-in-out hover:border-solid">
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

export default SingleForecast;
