import React, { createContext, useState, useContext } from "react";
import "./App.css";

// Create a context for the theme
const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

const ThemeProvider = ({ children }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
    const root = document.documentElement;
    if (isDarkTheme) {
      root.style.setProperty("--bg-color", "#f0f0f0");
      root.style.setProperty("--text-color", "#101114");
    } else {
      root.style.setProperty("--bg-color", "#101114");
      root.style.setProperty("--text-color", "#FFFFFF");
    }
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
