"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react"; 

const navLinks = [
  { href: "/", label: "Dashboard" },
  { href: "/meals", label: "Meals" },
  { href: "/search", label: "Search" },
  { href: "/goals", label: "Goals" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-red border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-indigo-600">
          MacroMate
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-medium hover:text-indigo-600 ${
                pathname === link.href
                  ? "text-indigo-600 border-b-2 border-indigo-600 pb-1"
                  : "text-gray-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Auth */}
        <div className="hidden md:flex gap-4">
          <Link
            href="/login"
            className="text-gray-600 hover:text-indigo-600 font-medium"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="bg-indigo-600 text-white px-4 py-1.5 rounded hover:bg-indigo-700 transition"
          >
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pt-2 pb-4 space-y-2 bg-white shadow">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`block font-medium ${
                pathname === link.href
                  ? "text-indigo-600"
                  : "text-gray-700 hover:text-indigo-600"
              }`}
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <div className="pt-2 border-t border-gray-200">
            <Link
              href="/login"
              className="block text-gray-700 hover:text-indigo-600"
              onClick={() => setMenuOpen(false)}
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="block text-indigo-600 font-semibold hover:underline"
              onClick={() => setMenuOpen(false)}
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </nav>
    
  );
}
