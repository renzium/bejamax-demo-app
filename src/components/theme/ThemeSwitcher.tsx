"use client";

import { useTheme } from "./ThemeProvider";
import { Button } from "@/components/ui/button";

export function ThemeSwitcher() {
  const { theme, setTheme } = useTheme();

  return (
    <div className="flex gap-2 flex-wrap">
      <Button
        variant={theme === "brand-a" ? "primary" : "outline"}
        onClick={() => setTheme("brand-a")}
      >
        Brand A (Blue)
      </Button>
      <Button
        variant={theme === "brand-b" ? "primary" : "outline"}
        onClick={() => setTheme("brand-b")}
      >
        Brand B (Purple)
      </Button>
      <Button
        variant={theme === "brand-c" ? "primary" : "outline"}
        onClick={() => setTheme("brand-c")}
      >
        Brand C (Orange)
      </Button>
    </div>
  );
}

