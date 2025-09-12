import { useEffect, useState } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  // carregar tema salvo no localStorage
  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") {
      setTheme(stored);
    }
  }, []);

  // aplicar classe no <body> e salvar no localStorage
  useEffect(() => {
    document.body.classList.remove("light", "dark");
    document.body.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
