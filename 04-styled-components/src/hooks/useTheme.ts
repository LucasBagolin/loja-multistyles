import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../styles/theme";

export function useTheme() {
  const [themeName, setThemeName] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setThemeName(stored);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", themeName);
  }, [themeName]);

  const toggleTheme = () => {
    setThemeName((t) => (t === "light" ? "dark" : "light"));
  };

  const theme = themeName === "light" ? lightTheme : darkTheme;

  return { theme, themeName, toggleTheme };
}
