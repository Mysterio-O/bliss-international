"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const themeOptions = [
  { label: "Light", value: "light" as const },
  { label: "Dark", value: "dark" as const },
  { label: "System", value: "system" as const },
];

export function ThemeControl() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="inline-flex rounded-full border border-border bg-card p-1">
        <span className="px-3 py-1 text-xs text-muted-foreground">Theme</span>
      </div>
    );
  }

  return (
    <div className="inline-flex items-center rounded-full border border-border bg-card p-1">
      {themeOptions.map((option) => {
        const isActive = theme === option.value;

        return (
          <Button
            key={option.value}
            size="xs"
            variant={isActive ? "default" : "ghost"}
            className={cn("rounded-full px-3", !isActive && "text-muted-foreground")}
            onClick={() => setTheme(option.value)}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
}
