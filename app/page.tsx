import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 min-h-screen min-w-screen font-sans overflow-hidden">
      {/* LEFT SIDE */}
      <div className="bg-white flex flex-col justify-between px-8 py-12">
        {/* Top */}
        <div>
          <h1 className="text-[2.8rem] font-medium text-[#39383F] leading-[1.1] mb-10 max-w-md">
            Inspiration within and across businesses.
          </h1>
          <p className="text-[#39383F] opacity-75 max-w-md mb-8">
            Create and manage your company’s knowledge-sharing network, enabling employees to quickly connect with those who have solved or are solving similar challenges.
          </p>
          <Link
            href="/login"
            className="inline-flex items-center justify-center bg-[#1C1C1C] text-white px-6 py-3 text-sm font-medium hover:bg-[#39383F]"
          >
            Log in <FaArrowRight className="ml-2" />
          </Link>
        </div>

      
      </div>

      {/* RIGHT SIDE */}
 <div className="absolute top-0 right-0 w-1/2 min-h-screen bg-[#F4F4F4] overflow-hidden hidden sm:block">
        {/* Orbit lines (simple placeholder SVG) */}
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 600 600"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {[80, 140, 200, 260].map((r, i) => (
            <circle
              key={i}
              cx="300"
              cy="300"
              r={r}
              stroke="#DADADA"
              strokeWidth="1"
            />
          ))}
        </svg>

        <div className="absolute top-[20%] left-[45%] w-12 h-12 bg-white p-2 shadow-md rounded">
          <Image src="/Discord.svg" alt="Discord" fill className="object-contain" />
        </div>
        <div className="absolute top-[40%] left-[25%] w-12 h-12 bg-white p-2 shadow-md rounded">
          <Image src="/spotify.svg" alt="Spotify" fill className="object-contain" />
        </div>
        <div className="absolute top-[60%] left-[50%] w-12 h-12 bg-white p-2 shadow-md rounded">
          <Image src="/ups.svg" alt="UPS" fill className="object-contain" />
        </div>
        <div className="absolute top-[30%] left-[70%] w-12 h-12 bg-white p-2 shadow-md rounded">
          <Image src="/Shell.svg" alt="Shell" fill className="object-contain" />
        </div>
        <div className="absolute top-[50%] left-[60%] w-12 h-12 bg-white p-2 shadow-md rounded">
          <Image src="/apple.svg" alt="Apple" fill className="object-contain" />
        </div>
        <div className="absolute top-[70%] left-[75%] w-12 h-12 bg-white p-2 shadow-md rounded">
          <Image src="/YouTube.svg" alt="YouTube" fill className="object-contain" />
        </div>
        <div className="absolute top-[50%] left-[85%] w-12 h-12 bg-white p-2 shadow-md rounded">
          <Image src="/chrome.svg" alt="Google" fill className="object-contain" />
        </div>
      </div>
    </div>
  );
}
