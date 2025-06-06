import './globals.css'; 

import { ReactNode } from "react";
import SidebarNav from '@/components/SidebarNav';
import Footer from "@/components/Footer";

export const metadata = {
  title: "MacroMate",
  description: "Track your meals, macros, and goals effortlessly",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800">
        <SidebarNav />
        <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}



