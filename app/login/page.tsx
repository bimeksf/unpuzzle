"use client";

import { GoogleAuthProvider, signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Login() {
  const [user, loadingUser] = useAuthState(auth);
  const router = useRouter();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (user) {
      router.push("/dashboard");
    }
  }, [user, router]);
  const handleGoogleLogin = async () => {
    try {
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      router.push("/dashboard");
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Google login failed");
    }
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("clicked!")
    setError("");
    setLoading(true);

    const email = (e.currentTarget.email as HTMLInputElement).value;
    const password = (e.currentTarget.password as HTMLInputElement).value;

    try {
      await signInWithEmailAndPassword(auth, email, password);
      
     // router.push("/dashboard");
    } catch (err) {
      if (err instanceof Error) setError(err.message);
      else setError("Login failed.");
    } finally {
      setLoading(false);
    }
  };

  if (loadingUser) return <p>Loading...</p>;

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen min-w-screen font-sans overflow-hidden bg-white">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col mx-4 sm:mx-12 justify-center max-w-lg w-full py-12"
      >
        <div className="text-left pb-10">
          <h1 className="text-4xl font-medium text-[#39383F] pb-3">Log in</h1>
          <p className="text-[#39383F] opacity-75">To get inspired and tackle challenges with joy.</p>
        </div>

        {/* FORM */}
        <form className="text-[#39383F] mb-10 w-full" onSubmit={handleLogin}>
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="E-mail address"
              className="border-b-2 border-black focus:border-b-4 pb-3 outline-0 transition-all"
              required
            />

            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="border-b-2 border-black focus:border-b-4 pb-3 outline-0 transition-all"
              required
            />

            <Link
              href="/forgot-password"
              className="text-right text-sm opacity-50 hover:underline"
            >
              Forgotten password?
            </Link>
          </div>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            type="submit"
            disabled={loading}
            className={`bg-[#39383F] text-white py-4 px-6 font-medium mt-6 w-full transition ${loading ? "opacity-50 cursor-not-allowed" : ""}`}
          >
            {loading ? "Signing in..." : "Continue"}
          </motion.button>

          <Link
            href="/create"
            className="border-2 border-[#39383F] text-[#39383F] py-4 px-6 font-medium mt-4 text-center hover:bg-[#39383F] hover:text-white transition block"
          >
            Create an Account
          </Link>
        </form>

        {/* Google Login */}
        <div className="mt-6 text-center">
          <p className="mb-4 text-sm text-gray-600">Or sign in with</p>
          <button
            onClick={handleGoogleLogin}
            className="flex items-center gap-3 justify-center bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition w-full"
          >
            <Image src="/chrome.svg" alt="Google" width={24} height={24} />
            Sign in with Google
          </button>
        </div>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-[#F4F4F4] overflow-hidden hidden sm:flex flex-col items-center justify-center min-h-screen md:w-full relative"
      >
        <svg width="100%" height="100%" className="absolute inset-0 w-full h-full">
          {[100, 200, 300, 400, 500, 600].map((r, i) => {
            const centerX = 100;
            const centerY = 400;
            const baseHeight = r * 1.8;
            const points = [
              [centerX + r, centerY],
              [centerX - r, centerY - baseHeight],
              [centerX - r, centerY + baseHeight],
            ]
              .map((point) => point.join(","))
              .join(" ");
            return <polygon key={i} points={points} stroke="#DADADA" strokeWidth="1" fill="none" />;
          })}
        </svg>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="text-5xl text-[#39383F] z-20"
        >
          Boost profitability
        </motion.h1>
      </motion.div>
    </section>
  );
}
