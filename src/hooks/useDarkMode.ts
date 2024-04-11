import { useEffect } from "react";

const LOCAL_STORAGE_THEME_KEY = "theme";
const THEMES = {
  light: "light",
  dark: "dark",
};

type ThemesType = keyof typeof THEMES;

export function useDarkMode() {
  const theme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as ThemesType;
  const isDark = theme === "dark";

  const setTheme = (newTheme: ThemesType) => {
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(isDark ? THEMES.light : THEMES.dark);
    root.classList.add(isDark ? THEMES.dark : THEMES.light);
  }, [theme]);

  return { theme, setTheme };
}
