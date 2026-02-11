import LightRay from "@/bits/light-ray";
import { Card } from "@/components/ui/card";
import { CARD_STYLE } from "@/constants";
import { cn } from "@/lib/utils";
import CardLabel from "../card-label";
import AdditionalContent from "./additional-content";

function AdditionalWeather() {
  return (
    <section className="relative">
      <LightRay direction="top-right" />

      <Card
        className={cn(CARD_STYLE, "card-with-diagonal-lines space-y-4 shadow")}
      >
        <CardLabel
          title="Additional Weather Info"
          description="Get more details about the current weather conditions."
        />
        <AdditionalContent />
      </Card>
    </section>
  );
}

export default AdditionalWeather;
