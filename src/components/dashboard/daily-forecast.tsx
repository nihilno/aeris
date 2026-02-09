import { Sun } from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";

function DailyForecast() {
  return (
    <Card className="space-y-4 shadow">
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">Daily Forecast</CardTitle>
        <CardDescription>
          Check the weather for the upcoming days.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Day</TableHead>
              <TableHead>Weather</TableHead>
              <TableHead>Temp</TableHead>
              <TableHead>Min</TableHead>
              <TableHead>Max</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Array.from({ length: 7 }).map((_, index) => (
              <TableRow key={index}>
                <TableHead>Thu</TableHead>
                <TableHead>
                  <Sun />
                </TableHead>
                <TableHead>
                  <p>33&deg;C</p>
                </TableHead>
                <TableHead>
                  <p className="text-muted-foreground">25&deg;C</p>
                </TableHead>
                <TableHead>
                  <p className="text-muted-foreground">35&deg;C</p>
                </TableHead>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default DailyForecast;
