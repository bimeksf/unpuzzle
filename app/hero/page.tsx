"use client";

import MainHeader from "@/components/main-header";
import Link from "next/link";

export default function LoginScreen() {
  return (
<>


    <MainHeader/>
    <div className="flex flex-col md:flex-row h-screen w-full bg-white">
      <div className="w-full md:w-1/2 flex flex-col justify-between px-6 md:px-12 py-12">
        <div>
          <p className="text-lg font-medium text-[#39383F]">Unpuzzle</p>

          <h2 className="text-3xl md:text-4xl font-semibold mt-10 text-[#39383F]">
            Log In
          </h2>

          <p className="text-[#39383F] mt-2 mb-8 text-base">
            To get inspired and tackle challenges with joy.
          </p>

          <form className="flex flex-col gap-6">
            <div>
              <label
                htmlFor="email"
                className="block text-sm text-[#39383F] mb-1"
                >
                E-mail address
              </label>
              <input
                type="email"
                id="email"
                className="w-full border-b border-[#39383F] outline-none py-1 text-[#39383F]"
                />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm text-[#39383F] mb-1"
                >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full border-b border-[#39383F] outline-none py-1 text-[#39383F]"
                />
              <div className="text-right text-sm mt-1">
                <a href="#" className="text-[#39383F] hover:underline">
                  Forgotten password?
                </a>
              </div>
            </div>

            <button
              type="submit"
              className="bg-[#39383F] text-white py-2 px-6 mt-2 hover:bg-[#2e2d34] transition rounded"
              >
              Continue
            </button>
          </form>
        </div>

        <div className="flex gap-6 text-sm text-[#39383F] mt-10 md:mt-0">
          <span>support@unpuzzle.com</span>
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
      </div>

      <div className="w-full md:w-1/2 bg-[#F8F8F8] relative flex items-center justify-center px-4">
       <svg width="100%" height="100%" className="absolute inset-0 w-full h-full">
          {[100,200,300, 400, 500, 600].map((r, i) => {
            const centerX = 100; // Střed X
            const centerY = 400; // Střed Y
            const baseHeight = r * 1.8; // Výška základny (zúžení pro trojúhelník)
            const points = [
              [centerX + r, centerY], // Vrchol základny vlevo
              [centerX - r, centerY - baseHeight], // Horní pravý bod
              [centerX - r, centerY + baseHeight], // Spodní pravý bod
            ]
            .map(point => point.join(","))
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

        <p className="text-2xl md:text-3xl text-[#39383F] font-medium z-40">
          Accelerate innovation
        </p>

      </div>
    </div>
          </>
  );
}
