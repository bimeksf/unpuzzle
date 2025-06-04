"use client"

import Link from "next/link";
import { useState } from "react";

export default function MainHeader (){

        const[open, setOpen ]=useState(false)
        const[active, setActive ]=useState(false)

        function handleClick(){
            setOpen(prev=>!prev)
            if(!open){
                setActive(true)
            }
            else setActive(false)
        }

    return <>

        <header className="mx-12 py-12">
                <nav className="flex justify-between ">
                         
            <Link href={"/"} className="text-[#39383F] text-[1.375rem] font-medium relative">
                    Unpuzzle
            </Link>

                        <span onClick={handleClick} className={`${active ? "bg-[#39383F] text-white" :"" } border border-[#39383F] px-2 py-1 text-black font-medium  cursor-pointer       p-2 sm:hidden`}>en</span>
                        {open && <ul
  className=" scrollbar-thin scrollbar-thumb-[#39383F] scrollbar-track-[#e7e7e7]         absolute right-4 top-20 w-40 sm:left-[5%] sm:top-[60%] sm:w-48 bg-white shadow-2xl text-[#39383F] p-2 z-20 rounded max-h-60 overflow-y-auto"
>
  <li className="p-2 hover:bg-[#e7e7e7] cursor-pointer">English</li>
  <li className="p-2 hover:bg-[#e7e7e7] cursor-pointer">Čeština</li>
  <li className="p-2 hover:bg-[#e7e7e7] cursor-pointer">Français</li>
  <li className="p-2 hover:bg-[#e7e7e7] cursor-pointer">Deutsch</li>
  <li className="p-2 hover:bg-[#e7e7e7] cursor-pointer">Nederland</li>
  <li className="p-2 hover:bg-[#e7e7e7] cursor-pointer">Español</li>
  <li className="p-2 hover:bg-[#e7e7e7] cursor-pointer">Italiano</li>
  <li className="p-2 hover:bg-[#e7e7e7] cursor-pointer">Polski</li>
  <li className="p-2 hover:bg-[#e7e7e7] cursor-pointer">Magyar</li>
  <li className="p-2 hover:bg-[#e7e7e7] cursor-pointer">Русский</li>
</ul>}

                </nav>

                                     {/* Bottom language + contact (only on md and up) */}
         <div className="hidden md:flex gap-6 items-center text-sm text-[#39383F]   py-4 absolute bottom-4 w-full">
        <span  onClick={handleClick}  className={`border  px-2 py-1 cursor-pointer ${active ? "bg-[#39383F]" :"" }  text-black font-medium  p-2  border-[#39383F]`}>en</span>
        <span>support@unpuzzle.com</span>
        <Link href="/terms" className="hover:underline">
          Terms & Conditions
        </Link>
      </div>


        </header>

    
    
    </>

}