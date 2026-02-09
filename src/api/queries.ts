import { useQuery } from "@tanstack/react-query";
const API_KEY = import.meta.env.VITE_OPEN_WEATHER_API_KEY;

// Fetches
async function getWeatherData(lat: number, lon: number) {
  const url = `https://api.pirateweather.net/forecast/${API_KEY}/${lat},${lon}?exclude=minutely,alerts&lang=en&units=si&icon=pirate`;

  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch weather data");
  }

  const data: WeatherResponse = await response.json();
  return data;
}

// Hooks
export function useWeatherData() {
  const lat = 10;
  const lon = 25;

  return useQuery({
    queryKey: ["weather-data", lat, lon],
    queryFn: () => getWeatherData(lat, lon),
    enabled: lat !== undefined && lon !== undefined,
  });
}
