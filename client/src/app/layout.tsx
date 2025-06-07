import './globals.css'; 

import { ReactNode } from "react";
import { Providers } from './providers';
import SidebarNav from '@/components/SidebarNav';
import Footer from "@/components/Footer";

export const metadata = {
  title: "MacroMate",
  description: "Track your meals, macros, and goals effortlessly",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen flex flex-col bg-gray-50 text-gray-800 dark:bg-gray-900 dark:text-gray-100 transition-colors">
        <Providers>
          <div className="flex">
            <SidebarNav />
            <main className="flex-1 container mx-auto px-4 py-6">{children}</main>
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}


