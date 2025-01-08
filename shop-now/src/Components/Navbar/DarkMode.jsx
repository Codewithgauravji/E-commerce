import React, { useEffect, useState } from "react";

const DarkMode = () => {
  // State to track the current theme
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const element = document.documentElement;

  // Apply theme changes and save to localStorage
  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]); // Runs only when `theme` changes

  // Function to toggle the theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="flex items-center justify-center ">
      <button
        onClick={toggleTheme}
        className="px-4 py-2 text-sm font-semibold rounded-lg transition-all duration-300"
        style={{
          backgroundColor: theme === "dark" ? "#333" : "#fff",
          color: theme === "dark" ? "#fff" : "#333",
          border: "2px solid #ccc",
        }}
      >
        {theme === "dark" ? " Dark Mode" : " Light Mode"}
      </button>
    </div>
  );
};

export default DarkMode;
