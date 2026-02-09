import { Cloud } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function CurrentWeather() {
  return (
    <Card className="space-y-4 shadow">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Current Weather
        </CardTitle>
        <CardDescription>Check the latest weather conditions.</CardDescription>
      </CardHeader>
      <CardContent className="flex flex-col items-center gap-8 text-center">
        <h1 className="text-6xl font-bold">33&deg;C</h1>

        <div className="flex flex-col items-center">
          <Cloud className="text-muted-foreground size-10" />
          <p>Scattered Clouds</p>
        </div>

        <div className="flex flex-col items-center">
          <h2 className="text-muted-foreground text-lg">Local Time</h2>
          <p className="text-2xl font-semibold">04:48AM</p>
        </div>
      </CardContent>
      <CardFooter>
        <div className="flex w-full items-center justify-between gap-4">
          <div className="text-center">
            <h4 className="text-muted-foreground">Feels like</h4>
            <p className="text-lg">35&deg;C</p>
          </div>
          <div className="text-center">
            <h4 className="text-muted-foreground">Humidity</h4>
            <p className="text-lg">60%</p>
          </div>
          <div className="text-center">
            <h4 className="text-muted-foreground">Wind</h4>
            <p className="text-lg">15 km/h</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
}

export default CurrentWeather;
