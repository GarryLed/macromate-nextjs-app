"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ui/ThemeToggle";

const navLinks = [
  { href: "/", label: "🏠 Home" },
  { href: "/dashboard", label: "📊 Dashboard" },
  { href: "/diary", label: "🍽️ Diary" },
  { href: "/search", label: "🔍 Food Search" },
  { href: "/foods", label: "🥦 Foods" },
  { href: "/progress", label: "📈 Progress" },
  { href: "/goals", label: "🎯 Goals" },
  { href: "/calendar", label: "🗓️ Calendar" },
  { href: "/about", label: "ℹ️ About" },
  { href: "/profile", label: "👤 Profile" },
  { href: "/plans", label: "📋 Plans" },
  { href: "/settings", label: "⚙️ Settings" },
];

export default function SidebarNav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(true);

  return (
    <>
      {/* Mobile Toggle Button */}
      <button
        className="md:hidden fixed top-4 left-4 z-50 bg-white dark:bg-gray-800 p-2 rounded shadow"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Sidebar"
      >
        {menuOpen ? <X size={20} /> : <Menu size={20} />}
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-700 shadow-sm z-40 transition-transform transform ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 flex flex-col justify-between`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-gray-200 dark:border-gray-700">
          <Link href="/" className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">
            MacroMate
          </Link>
        </div>

        {/* Navigation Links */}
        <nav className="flex flex-col p-4 space-y-2 flex-grow">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block px-4 py-2 rounded font-medium transition ${
                pathname === link.href
                  ? "bg-indigo-100 text-indigo-600 dark:bg-indigo-700 dark:text-white"
                  : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}

          {/* Auth Links */}
          <div className="pt-4 mt-auto border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/login"
              className="block px-4 py-2 text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block px-4 py-2 mt-2 bg-indigo-600 text-white rounded hover:bg-indigo-700"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </nav>

        {/* Dark Mode Toggle */}
        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <ThemeToggle />
        </div>
      </aside>

      {/* Push content right for sidebar */}
      <div className="md:ml-64" />
    </>
  );
}
