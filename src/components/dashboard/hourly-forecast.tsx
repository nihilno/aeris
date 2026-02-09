import { ChevronsLeftRight, Sun } from "lucide-react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

function HourlyForecast() {
  return (
    <Card className="shadow">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Hourly Forecast (Next 48 Hours)
        </CardTitle>
      </CardHeader>
      <CardContent className="mx-4 flex items-center gap-16 overflow-x-scroll pb-8">
        {Array.from({ length: 48 }, (_, index) => (
          <SingleForecast key={index} />
        ))}
      </CardContent>
      <CardFooter className="mx-auto -mt-4">
        <ChevronsLeftRight className="text-muted-foreground" />
      </CardFooter>
    </Card>
  );
}

export default HourlyForecast;

function SingleForecast() {
  return (
    <div className="flex shrink-0 flex-col items-center gap-2">
      <p className="text-sm">04:00</p>
      <Sun className="size-6" />
      <p>28&deg;C</p>
    </div>
  );
}
