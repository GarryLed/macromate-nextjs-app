"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Link from "next/link";

// placeholder for authentication check
const isAuthenticated = () => {
  // Replace with actual authentication logic
  return false; // Assume user is authenticated for this example
}

export default function HomePage() {
  const router = useRouter(); // Use Next.js router for navigation

  useEffect(() => {
    // Redirect to dashboard if user is authenticated
    if (isAuthenticated()) {
      router.push("/dashboard");
    }
  }, [router]);

 return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-12">
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl font-bold text-gray-800 mb-4"
      >
        🥗 Welcome to MacroMate
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="text-gray-600 text-center max-w-xl mb-6"
      >
        Your personal companion for calorie tracking, macro goals, and daily progress.
      </motion.p>

      <motion.div
        className="flex gap-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <Link
          href="/dashboard"
          className="bg-indigo-600 text-white px-6 py-2 rounded hover:bg-indigo-700 transition"
        >
          Go to Dashboard
        </Link>
        <Link
          href="/about"
          className="text-indigo-600 hover:underline"
        >
          Learn More
        </Link>
      </motion.div>
    </main>
  );
}