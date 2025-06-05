"use client"

import Link from "next/link";
import { useState } from "react";
export default function MainHeader() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en");




  function handleClick() {
    setOpen((prev) => !prev);
 setActive((prev) => !prev);
  }
  function handleLanguage(code : string) {
    setOpen((prev) => !prev);
    setSelectedLanguage(code) 
 setActive((prev) => !prev);

   
  }


  const languages = [
    { code: "en", label: "English" },
    { code: "cs", label: "Čeština" },
    { code: "fr", label: "Français" },
    { code: "de", label: "Deutsch" },
    { code: "nl", label: "Nederland" },
    { code: "es", label: "Español" },
    { code: "it", label: "Italiano" },
    { code: "pl", label: "Polski" },
    { code: "hu", label: "Magyar" },
    { code: "ru", label: "Русский" },
  ];
  return (




    <>
      <header className="fixed top-0 left-0 w-full z-50 px-4 sm:px-12 py-4">

        
  
        <nav className="flex justify-between items-center">
          <Link
            href={"/"}
            className="text-[#39383F] text-[1.375rem] font-medium relative"
          >
            Unpuzzle
          </Link>

          <span
            onClick={handleClick}
            className={`${
              active ? "bg-[#39383F] text-white" : ""
            } border border-[#39383F] px-2 py-1 text-black font-medium cursor-pointer sm:hidden`}
          >
                      {selectedLanguage}
          </span>

          {open && (
            <ul className="scrollbar-thin scrollbar-thumb-[#39383F] scrollbar-track-[#e7e7e7] absolute right-4 top-20 w-40 sm:left-[3%] sm:top-[710%] sm:w-48 bg-white shadow-2xl text-[#39383F] p-2 z-100 rounded max-h-60 overflow-y-auto">
         


              {languages.map(lang=><li 
              onClick={()=>handleLanguage(lang.code)}
              
              key={lang.code} className="p-2 hover:bg-[#e7e7e7] cursor-pointer"> 
          {lang.label}
        </li>)}
            </ul>
          )}
        </nav>

 
      </header>
       {/* Bottom bar (only on md and up) */}
        <div className="hidden sm:flex gap-6 items-center text-sm text-[#39383F] py-4 fixed bottom-0 left-0 px-4 sm:px-12 sm:z-100">
          <span
            onClick={handleClick}
            className={`border px-2 py-1 cursor-pointer ${
              active ? "bg-[#39383F] text-white" : ""
            } text-black font-medium border-[#39383F]`}
          >
                      {selectedLanguage}
          </span>
          <span>support@unpuzzle.com</span>
          <Link href="/terms" className="hover:underline">
            Terms & Conditions
          </Link>
        </div>
    </>
  );
}
