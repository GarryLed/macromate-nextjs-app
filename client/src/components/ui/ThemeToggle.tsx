"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("theme") as "light" | "dark" | null;
    const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const preferredTheme = saved || (systemPrefersDark ? "dark" : "light");

    setTheme(preferredTheme);
    document.documentElement.classList.toggle("dark", preferredTheme === "dark");
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  if (!mounted) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 group">
      <button
        onClick={toggleTheme}
        className="p-3 rounded-full bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white shadow-lg hover:scale-105 transition"
        aria-label="Toggle Dark Mode"
      >
        {theme === "dark" ? "☀️" : "🌙"}
      </button>
      <div className="absolute bottom-14 right-0 bg-black text-white text-xs rounded px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        Toggle Dark Mode
      </div>
    </div>
  );
}
