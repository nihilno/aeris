import { ICONS } from "@/constants";
import { cn } from "@/lib/utils";

function WeatherIcon({
  icon,
  className,
}: {
  icon: keyof typeof ICONS;
  className?: string;
}) {
  return (
    <div className={cn("text-2xl select-none", className)}>{ICONS[icon]}</div>
  );
}

export default WeatherIcon;
