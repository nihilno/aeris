import AdditionalWeather from "./components/dashboard/additional-weather";
import CurrentWeather from "./components/dashboard/current-weather";
import DailyForecast from "./components/dashboard/daily-forecast";
import HourlyForecast from "./components/dashboard/hourly-forecast";
import Map from "./components/map/map";

function App() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-4 bg-[radial-gradient(circle_at_center,var(--color-foreground),transparent_35%)] p-4">
      <Map />

      <CurrentWeather />
      <HourlyForecast />
      <DailyForecast />
      <AdditionalWeather />
    </section>
  );
}

export default App;
