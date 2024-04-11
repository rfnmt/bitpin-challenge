import { ReactNode, useState } from "react";
import Switch from "../Switch";
import { useDarkMode } from "@/hooks/useDarkMode";

interface Props {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  const { theme, setTheme } = useDarkMode();

  const [isDark, setIsDark] = useState(theme === "dark");

  const themeHandler = () => {
    setIsDark(!isDark);
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <div className="font-Vazirmatn px-5 bg-white dark:bg-gray-700">
      <Switch
        className="my-4"
        isChecked={isDark}
        onChange={themeHandler}
        appendText="حالت تاریک"
        prependText="حالت روشن"
      />

      <div>{children}</div>
    </div>
  );
}
