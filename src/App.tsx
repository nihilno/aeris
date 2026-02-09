import { useWeatherData } from "./api/queries";

function App() {
  const { data } = useWeatherData(10, 25);

  return <div>App</div>;
}

export default App;
