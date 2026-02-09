import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";

function AdditionalWeather() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-2xl font-semibold">
          Additional Weather Info
        </CardTitle>
        <CardDescription>
          Get more details about the current weather conditions.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <article className="space-y-4">
          <div className="flex items-center justify-between">
            <h5 className="text-muted-foreground">Cloudiness (%)</h5>
            <p>Value</p>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-muted-foreground">UV Index</h5>
            <p>Value</p>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-muted-foreground">Wind Direction</h5>
            <p>Value</p>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-muted-foreground">Pressure (hPa)</h5>
            <p>Value</p>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-muted-foreground">Sunrise</h5>
            <p>Value</p>
          </div>
          <div className="flex items-center justify-between">
            <h5 className="text-muted-foreground">Sunset</h5>
            <p>Value</p>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}

export default AdditionalWeather;
