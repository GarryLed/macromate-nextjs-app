// src/app/page.tsx

import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white px-6 py-12">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">🥗 Welcome to MacroMate</h1>
      <p className="text-gray-600 text-center max-w-xl mb-6">
        Your personal companion for calorie tracking, macro goals, and daily progress. Log meals, track water, and stay on top of your goals — all in one place.
      </p>
      <div className="flex gap-4">
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
      </div>
    </main>
  );
}

