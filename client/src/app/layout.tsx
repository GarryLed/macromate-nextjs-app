// this file replaces the traditional App.tsx file in a React application, serving as the root layout for a Next.js application. 
// It sets up global styles and font imports, and defines the metadata for the application.

// app/layout.tsx
import '@/app/globals.css'; 

import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "MacroMate",
  description: "Track your meals, macros, and goals effortlessly",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        <Navbar />
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

