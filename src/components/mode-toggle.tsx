import { Laptop, Moon, Sun } from "lucide-react";
import { useTheme } from "./providers";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();

  function cycleTheme() {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("system");
    else setTheme("light");
  }

  const iconClasses = "size-4 transition-all duration-300 ease-in-out scale-0";

  const icon =
    theme === "light" ? (
      <Sun className={`${iconClasses} size-6 scale-100 opacity-100`} />
    ) : theme === "dark" ? (
      <Moon className={`${iconClasses} size-6 scale-100 opacity-100`} />
    ) : (
      <Laptop className={`${iconClasses} size-6 scale-100 opacity-100`} />
    );

  return (
    <button
      type="button"
      className="bg-card focus-visible:ring-ring hover:bg-accent/70 h-9 cursor-pointer rounded-md border p-1 transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:outline-none"
      onClick={cycleTheme}
    >
      <div className="grid place-items-center">{icon}</div>
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
