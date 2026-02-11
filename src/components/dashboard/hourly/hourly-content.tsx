import { useWeatherData } from "@/api/queries";
import { EmptyWeather } from "@/components/global/empty";
import Error from "@/components/global/error";
import { CurrentWeatherSkeleton } from "@/components/skeletons/cards";
import { CardContent } from "@/components/ui/card";
import SingleForecast from "./single-forecast";

function HourlyContent() {
  const { data, isPending, error } = useWeatherData();

  if (isPending)
    return (
      <CurrentWeatherSkeleton className="card-with-diagonal-lines h-[165px]" />
    );
  if (error) return <Error />;
  if (!data?.hourly?.data) return <EmptyWeather />;

  return (
    <CardContent className="scrollbar-thin flex items-center gap-6 overflow-x-scroll pb-8">
      {data.hourly.data.map((hour, index) => (
        <SingleForecast key={index} hourlyData={hour} />
      ))}
    </CardContent>
  );
}

export default HourlyContent;
