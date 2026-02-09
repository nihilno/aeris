import type { ICONS } from "@/constants";

declare global {
  type WeatherResponse = {
    latitude: number;
    longitude: number;
    timezone: string;
    offset: number;
    elevation: number;
    currently: Currently;
    hourly: Hourly;
    daily: Daily;
    flags: Flags;
  };

  type Currently = {
    time: number;
    summary: string;
    icon: WeatherIcon;
    nearestStormDistance: number;
    nearestStormBearing: number;
    precipIntensity: number;
    precipProbability: number;
    precipIntensityError: number;
    precipType: "none" | "rain" | "snow" | "sleet" | "hail" | string;
    temperature: number;
    apparentTemperature: number;
    dewPoint: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windGust: number;
    windBearing: number;
    cloudCover: number;
    uvIndex: number;
    visibility: number;
    ozone: number;
  };

  type Hourly = {
    summary: string;
    icon: WeatherIcon;
    data: HourlyData[];
  };

  type HourlyData = {
    time: number;
    summary: string;
    icon: WeatherIcon;
    precipIntensity: number;
    precipProbability: number;
    precipIntensityError: number;
    precipAccumulation: number;
    precipType: "none" | "rain" | "snow" | "sleet" | "hail" | string;
    temperature: number;
    apparentTemperature: number;
    dewPoint: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windGust: number;
    windBearing: number;
    cloudCover: number;
    uvIndex: number;
    visibility: number;
    ozone: number;
    nearestStormDistance: number;
    nearestStormBearing: number;
  };

  type Daily = {
    summary: string;
    icon: WeatherIcon;
    data: DailyData[];
  };

  type DailyData = {
    time: number;
    summary: string;
    icon: WeatherIcon;
    sunriseTime: number;
    sunsetTime: number;
    moonPhase: number;
    precipIntensity: number;
    precipIntensityMax: number;
    precipIntensityMaxTime: number;
    precipProbability: number;
    precipAccumulation: number;
    precipType: "none" | "rain" | "snow" | "sleet" | "hail" | string;
    temperatureHigh: number;
    temperatureHighTime: number;
    temperatureLow: number;
    temperatureLowTime: number;
    apparentTemperatureHigh: number;
    apparentTemperatureHighTime: number;
    apparentTemperatureLow: number;
    apparentTemperatureLowTime: number;
    dewPoint: number;
    humidity: number;
    pressure: number;
    windSpeed: number;
    windGust: number;
    windGustTime: number;
    windBearing: number;
    cloudCover: number;
    uvIndex: number;
    uvIndexTime: number;
    visibility: number;
    temperatureMin: number;
    temperatureMinTime: number;
    temperatureMax: number;
    temperatureMaxTime: number;
    apparentTemperatureMin: number;
    apparentTemperatureMinTime: number;
    apparentTemperatureMax: number;
    apparentTemperatureMaxTime: number;
  };

  type Flags = {
    sources: string[];
    sourceTimes: { [key: string]: string };
    "nearest-station": number;
    units: string;
    version: string;
  };

  type CurrentWeatherProps = {
    data: Currently | undefined;
    isPending: boolean;
  };

  type HourlyForecastProps = {
    data: Hourly | undefined;
    isPending: boolean;
  };

  type DailyForecastProps = {
    data: Daily | undefined;
    isPending: boolean;
  };

  type WeatherIcon = keyof typeof ICONS;
}

export {};
