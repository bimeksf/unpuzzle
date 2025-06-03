"use client"

import Link from "next/link";
import { useState } from "react";

export default function MainHeader (){

        const[open, setOpen ]=useState(false)

        function handleClick(){
            setOpen(prev=>!prev)
        }

    return <>

        <header className="mx-4 py-6">
                <nav className="flex justify-between">
                         
            <Link href={"/"} className="text-[#39383F] text-[1.375rem] font-medium relative">
                    Unpuzzle
            </Link>

                        <div onClick={handleClick} className="bg-[#39383F] text-white font-medium  p-2">en</div>
                        {open && <ul className="absolute right-14 bg-white shadow-2xl text-[#39383F] p-2 z-20">
                                <li className="p-2 hover:bg-[#d1d1d1] cursor-pointer">English</li>
                                <li className="p-2 hover:bg-[#d1d1d1] cursor-pointer">Čeština</li>
                                <li className="p-2 hover:bg-[#d1d1d1] cursor-pointer">Français</li>
                                <li className="p-2 hover:bg-[#d1d1d1] cursor-pointer">Deutsch</li>
                                <li className="p-2 hover:bg-[#d1d1d1] cursor-pointer">Nederland</li>
                        </ul>}



                </nav>


        </header>

    
    
    </>

}