/*
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "@/lib/firebase"; // ! Fix import path



export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isClient, setIsClient] = useState(false); // ✅ Fix hydration issue
  const router = useRouter();

  // Ensure component only renders on the client (fixes hydration issue)
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Detect auth state and redirect if already logged in
  useEffect(() => {
    if (!isClient) return; // Prevent running on the server
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log("User Auth State Changed:", currentUser); // Debugging
      if (currentUser) {
        router.push("/dashboard"); // Redirect on login
      }
    });
    return () => unsubscribe();
  }, [isClient, router]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.refresh(); // Fix stale session state
      router.push("/dashboard"); // Redirect to dashboard
      console.log("User logged in successfully."); // Debugging
    } catch (error: unknown) {
      if (error instanceof Error) {
        console.error("Login Error:", error.message);
        setError(error.message);
      } else {
        setError("An unknown error occurred.");
      }
    }
  };

  if (!isClient) return null; // Prevents hydration error

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <form onSubmit={handleLogin} className="p-6 bg-white shadow-md rounded-lg">
        <h2 className="text-xl font-semibold mb-4 text-black">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        
        <label className="block text-black font-medium">Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="block w-full p-2 border rounded-md text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <label className="block text-black font-medium mt-3">Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="block w-full p-2 border rounded-md text-black bg-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        
        <button 
          type="submit" 
          className="w-full bg-blue-500 text-black font-semibold py-2 rounded-md mt-4 hover:bg-blue-600"
        >
          Login
        </button>
      </form>
    </div>
  );
}
*/