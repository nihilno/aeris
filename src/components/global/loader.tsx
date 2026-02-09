import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

function Loader({ className }: { className?: string }) {
  return (
    <section>
      <Loader2 className={cn("size-5.5 animate-spin", className)} />
    </section>
  );
}

export default Loader;
