import { useEffect, useState } from "react";
import { useTheme } from "@heroui/use-theme";

export function useReactiveTheme() {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(theme);

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const stored = localStorage.getItem("heroui-theme");

      if (stored && stored !== currentTheme) {
        setCurrentTheme(stored);
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    // In case it updates programmatically:
    const interval = setInterval(() => {
      const stored = localStorage.getItem("heroui-theme");

      if (stored && stored !== currentTheme) {
        setCurrentTheme(stored);
      }
    }, 300);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, [currentTheme]);

  return {
    theme: currentTheme,
    setTheme,
  };
}
