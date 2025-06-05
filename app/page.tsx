"use client";
import Link from "next/link";
import { motion } from "framer-motion";

import OrbitWrapper from "@/components/OrbitingLogo";


export default function HeroLayout() {
  return (
    <div className="flex flex-col md:flex-row h-screen w-full bg-white">
      <div className="w-full md:w-1/2 flex flex-col justify-between px-6 md:px-12 py-12">
        <motion.div 
      



        className="flex flex-col justify-center" >


          <motion.h1 
          initial={{opacity:0, x:-50}}
          animate={{opacity:1 , x:0}}
           transition={{ duration: 0.7 }}
          
          className="text-4xl md:text-5xl font-semibold mt-10 text-[#39383F] leading-tight">
            Inspiration<br />
            within and across<br />
            businesses.
          </motion.h1>

          <motion.p
                   initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
          
          
          className="text-[#39383F] mt-32 text-base max-w-md pb-10">
            Create and manage your company’s knowledge-sharing network,
            enabling employees to quickly connect with those who have solved or
            are solving similar challenges.
          </motion.p >


            <motion.div
                 initial={{  opacity: 0 , y:-50 }}
              animate={{ opacity: 1 , y:0}}
              transition={{ delay: 1, duration: 0.5 }}
            
            
            >



          <Link href={"/login"} className=" px-6 py-2 bg-[#39383F] text-white  hover:bg-gray-800 transition w-1/3">
            Log in →
          </Link>
            </motion.div>
        </motion.div>
      </div>

      {/* right  */}
      <motion.div
 initial={{ opacity: 0, scale: 0.8, rotate: 1 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{ delay: 1, duration: 0.8, ease: "easeOut" }}
      
      className="w-full md:w-1/2 bg-[#F8F8F8] relative sm:flex items-center justify-center px-4 hidden">
         {/* Orbit lines (simple placeholder SVG) */}
                <svg
                  className="absolute inset-0 w-full h-full "
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
        


                      <motion.div
    initial={{ opacity: 0, scale: 0.8, rotate: 10 }}
  animate={{ opacity: 1, scale: 1, rotate: 0 }}
  transition={{ delay: 2, duration: 0.8, ease: "easeOut" }}
  className="relative w-[600px] h-[600px]"
>

                      <OrbitWrapper/>


                  </motion.div>
              </motion.div>
              
      </div>
   
  );
}
