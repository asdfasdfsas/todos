import { createContext, useContext, useEffect, useState } from "react";

export const DarkModeContext = createContext();

export function DarkModeProvider({ children }) {
  const [darkmode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkmode);
    updateDarkMode(!darkmode);
  };

  useEffect(() => {
    const isDark =
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    updateDarkMode(isDark);
  }, []);

  return (
    <DarkModeContext.Provider value={{ darkmode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
function updateDarkMode(darkMode) {
  if (darkMode) {
    document.documentElement.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    document.documentElement.classList.remove("dark");
    localStorage.theme = "light";
  }
}
export const useDarkMode = () => useContext(DarkModeContext);
