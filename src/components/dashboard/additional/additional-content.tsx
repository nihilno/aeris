import { useWeatherData } from "@/api/queries";
import { EmptyWeather } from "@/components/global/empty";
import Error from "@/components/global/error";
import { CurrentWeatherSkeleton } from "@/components/skeletons/cards";
import { CardContent } from "@/components/ui/card";
import { formatDateTime, getMoonPhase } from "@/lib/utils";
import {
  Cloud,
  Eye,
  Gauge,
  Moon,
  Sun,
  Sunrise,
  SunsetIcon,
} from "lucide-react";

function AdditionalContent() {
  const { data, isPending, error } = useWeatherData();

  if (isPending)
    return (
      <CurrentWeatherSkeleton className="card-with-diagonal-lines h-[240px]" />
    );
  if (error) return <Error />;
  if (!data) return <EmptyWeather />;

  const today = data.daily.data[1] || data.daily.data[0];
  const details = [
    {
      label: "Cloudiness (%)",
      icon: Cloud,
      value: today.cloudCover != null ? `${today.cloudCover * 100}%` : "N/A",
    },
    { label: "UV Index", icon: Sun, value: today.uvIndex ?? "N/A" },
    {
      label: "Pressure (hPa)",
      icon: Gauge,
      value: today.pressure?.toFixed(0) ?? "N/A",
    },
    {
      label: "Sunrise",
      icon: Sunrise,
      value: formatDateTime(today.sunriseTime, "HH:mm:ss"),
    },
    {
      label: "Sunset",
      icon: SunsetIcon,
      value: formatDateTime(today.sunsetTime, "HH:mm:ss"),
    },
    { label: "Moon Phase", icon: Moon, value: getMoonPhase(today.moonPhase) },
    {
      label: "Visibility",
      icon: Eye,
      value: today.visibility != null ? `${today.visibility}km` : "N/A",
    },
  ];
  return (
    <CardContent>
      <article className="space-y-4">
        {details.map(({ label, icon: Icon, value }) => (
          <div
            className="grid grid-cols-2 items-center gap-1 text-sm sm:grid-cols-3 md:text-base"
            key={label}
          >
            <div className="text-muted-foreground flex shrink-0 items-center gap-1.5 place-self-start">
              <Icon className="text-foreground size-4.5" />
              {label}
            </div>
            <div className="bg-muted-foreground/15 hidden h-px w-full rounded-full sm:block" />
            <p className="shrink-0 place-self-end text-right">{value}</p>
          </div>
        ))}
      </article>
    </CardContent>
  );
}

export default AdditionalContent;
