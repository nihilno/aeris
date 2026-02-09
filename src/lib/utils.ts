import { clsx, type ClassValue } from "clsx";
import { format } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatTemperature(temp: number) {
  return `${temp.toFixed(0)}°C`;
}

export function formatHumidity(humidity: number) {
  return `${(humidity * 100).toFixed(0)}%`;
}

export function formatWindSpeed(speed: number) {
  return `${speed.toFixed(0)} km/h`;
}

export function formatDateTime(time: number, type: string) {
  const date = new Date(time * 1000);
  return format(date, type);
}

export function getMoonPhase(phase: number): string {
  if (phase < 0 || phase > 1) return "Invalid phase";

  const phases = [
    { max: 0.0625, name: "New Moon" },
    { max: 0.1875, name: "Waxing Crescent" },
    { max: 0.3125, name: "First Quarter" },
    { max: 0.4375, name: "Waxing Gibbous" },
    { max: 0.5625, name: "Full Moon" },
    { max: 0.6875, name: "Waning Gibbous" },
    { max: 0.8125, name: "Last Quarter" },
    { max: 1.0, name: "Waning Crescent" },
  ];

  return phases.find((p) => phase <= p.max)?.name ?? "Unknown";
}
