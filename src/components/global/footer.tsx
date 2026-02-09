import { CARD_STYLE } from "@/constants";
import { cn } from "@/lib/utils";
import { format } from "date-fns";
import { Card, CardContent, CardFooter } from "../ui/card";

function Footer() {
  const now = new Date();

  return (
    <footer className="mt-auto">
      <Card className={cn(CARD_STYLE, "card-with-lines text-muted-foreground")}>
        <CardContent>
          Made by{" "}
          <span className="text-foreground cursor-pointer hover:underline">
            Maciej Polowy
          </span>
        </CardContent>
        <CardFooter>&copy; {format(now, "yyyy")}</CardFooter>
      </Card>
    </footer>
  );
}

export default Footer;
