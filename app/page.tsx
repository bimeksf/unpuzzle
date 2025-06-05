"use client";
import Link from "next/link";
import Image from "next/image";



export default function HeroLayout() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white">
      <div className="w-full md:w-1/2 flex flex-col justify-between px-6 md:px-12 py-12">
        <div className="flex flex-col justify-center">


          <h1 className="text-4xl md:text-5xl font-semibold mt-10 text-[#39383F] leading-tight">
            Inspiration<br />
            within and across<br />
            businesses.
          </h1>

          <p className="text-[#39383F] mt-32 text-base max-w-md pb-10">
            Create and manage your company’s knowledge-sharing network,
            enabling employees to quickly connect with those who have solved or
            are solving similar challenges.
          </p >

          <Link href={"/login"} className=" px-6 py-2 bg-[#39383F] text-white  hover:bg-gray-800 transition w-1/3">
            Log in →
          </Link>
        </div>
      </div>

      {/* right  */}
      <div className="w-full md:w-1/2 bg-[#F8F8F8] relative sm:flex items-center justify-center px-4 hidden">
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
