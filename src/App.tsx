import AdditionalWeather from "./components/dashboard/additional-weather";
import CurrentWeather from "./components/dashboard/current-weather";
import DailyForecast from "./components/dashboard/daily-forecast";
import HourlyForecast from "./components/dashboard/hourly-forecast";
import Footer from "./components/global/footer";
import Map from "./components/map/map";

function App() {
  return (
    <section className="container mx-auto grid grid-cols-1 gap-4 p-4">
      <Map />

      <CurrentWeather />
      <HourlyForecast />

      <div className="lg:grid lg:grid-cols-2 lg:gap-4">
        <DailyForecast />
        <div className="mt-4 flex flex-col gap-4 lg:mt-0">
          <AdditionalWeather />
          <Footer />
        </div>
      </div>
    </section>
  );
}

export default App;
