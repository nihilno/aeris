import { useWeatherData } from "@/api/queries";
import LightRay from "@/bits/light-ray";
import { EmptyWeather } from "@/components/global/empty";
import { CurrentWeatherSkeleton } from "@/components/skeletons/cards";
import { Card, CardContent } from "@/components/ui/card";
import { CARD_STYLE } from "@/constants";
import { cn, formatDateTime, getMoonPhase } from "@/lib/utils";
import CardLabel from "./card-label";

function AdditionalWeather() {
  const { data, isPending, error } = useWeatherData();

  if (isPending)
    return (
      <CurrentWeatherSkeleton className="card-with-diagonal-lines h-[382px]" />
    );
  if (error) return <h1>error</h1>;
  if (!data) return <EmptyWeather />;

  const today = data.daily.data[1] || data.daily.data[0];
  const details = {
    "Cloudiness (%)": `${today.cloudCover * 100}%`,
    "UV Index": today.uvIndex,
    "Pressure (hPa)": today.pressure?.toFixed(0) ?? "N/A",
    Sunrise: formatDateTime(today.sunriseTime, "HH:mm:ss"),
    Sunset: formatDateTime(today.sunsetTime, "HH:mm:ss"),
    "Moon Phase": getMoonPhase(today.moonPhase),
    Visibility: `${today.visibility}km`,
  };

  return (
    <section className="relative">
      <LightRay direction="top-right" />

      <Card
        className={cn(CARD_STYLE, "card-with-diagonal-lines space-y-4 shadow")}
      >
        <CardLabel
          title="Additional Weather Info"
          description=" Get more details about the current weather conditions."
        />

        <CardContent>
          <article className="space-y-4">
            {Object.entries(details).map(([label, value]) => (
              <div className="grid grid-cols-3 items-center gap-1" key={label}>
                <h5 className="text-muted-foreground shrink-0 place-self-start">
                  {label}
                </h5>
                <div className="bg-muted-foreground/15 h-px w-full rounded-full" />
                <p className="shrink-0 place-self-end">{value}</p>
              </div>
            ))}
          </article>
        </CardContent>
      </Card>
    </section>
  );
}

export default AdditionalWeather;
