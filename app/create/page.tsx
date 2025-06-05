"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CreateAccount() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen min-w-screen font-sans overflow-hidden bg-white">
      {/* LEFT SIDE */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="flex flex-col mx-4 sm:mx-12 justify-center max-w-lg w-full py-12"
      >
        <div className="text-left pb-20">
          <h1 className="text-[3rem] font-medium text-[#39383F] pb-5 leading-none">
            Create an Account
          </h1>
          <p className="text-[#39383F] opacity-75">
            To get inspired and tackle challenges with joy.
          </p>
        </div>

        <form className="text-[#39383F] pb-20 mb-20 w-[90%] sm:px-0">
          <div className="flex flex-col gap-4">
            <label htmlFor="email" className="sr-only">Email</label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="E-mail address"
              className="border-b-2 border-black focus:border-b-4 pb-3 outline-0"
              aria-label="Email"
            />

            <label htmlFor="password" className="sr-only">Password</label>
            <input
              id="password"
              type="password"
              name="password"
              placeholder="Password"
              className="border-b-2 border-black focus:border-b-4 pb-3 outline-0"
              aria-label="Password"
            />

            <input
              id="password-confirm"
              type="password"
              name="passwordConfirm"
              placeholder="Password Confirm"
              className="border-b-2 border-black focus:border-b-4 pb-3 outline-0"
              aria-label="Password Confirm"
            />

            <Link
              href="/login"
              className="text-right text-sm opacity-50 hover:underline"
            >
              Already have an Account?
            </Link>
          </div>

          <div className="flex flex-col">
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              type="submit"
              className="bg-[#39383F] text-white py-4 px-6 font-medium mt-6"
            >
              Create an Account
            </motion.button>
          </div>
        </form>
      </motion.div>

      {/* RIGHT SIDE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, duration: 0.6 }}
        className="bg-[#F4F4F4] overflow-hidden hidden sm:flex flex-col items-center justify-center min-h-screen min-w-full md:w-1/2 h-screen relative"
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

            return (
              <polygon
                key={i}
                points={points}
                stroke="#DADADA"
                strokeWidth="1"
                fill="none"
              />
            );
          })}
        </svg>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.7 }}
          className="text-5xl text-[#39383F] m-auto z-20"
        >
          Boost profitability
        </motion.h1>
      </motion.div>
    </section>
  );
}
