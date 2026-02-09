import { useWeatherData } from "./api/queries";
import AdditionalWeather from "./components/dashboard/additional-weather";
import CurrentWeather from "./components/dashboard/current-weather";
import DailyForecast from "./components/dashboard/daily-forecast";
import HourlyForecast from "./components/dashboard/hourly-forecast";

function App() {
  const { data, isPending, error } = useWeatherData(10, 25);
  if (error) return <h1>Error: {error.message}</h1>;

  return (
    <section className="container mx-auto grid grid-cols-1 gap-4 p-4">
      <CurrentWeather data={data?.currently} isPending={isPending} />
      <HourlyForecast data={data?.hourly} isPending={isPending} />
      <DailyForecast data={data?.daily} isPending={isPending} />
      <AdditionalWeather data={data?.daily} isPending={isPending} />
    </section>
  );
}

export default App;
