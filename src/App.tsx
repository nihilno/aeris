import AdditionalWeather from "./components/dashboard/additional-weather";
import CurrentWeather from "./components/dashboard/current-weather";
import DailyForecast from "./components/dashboard/daily-forecast";
import HourlyForecast from "./components/dashboard/hourly-forecast";

function App() {
  // const { data } = useWeatherData(10, 25);

  return (
    <section className="container mx-auto grid grid-cols-1 gap-4 p-4">
      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
      <AdditionalWeather />
    </section>
  );
}

export default App;
