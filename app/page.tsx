import Link from "next/link";

import { FaLongArrowAltRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
    <section className="min-h-screen">
    <div className="flex flex-col mx-4 justify-center">

        <div className="text-left pb-[2.25rem] max-w-3xl">


        <h1 className="text-[3rem] font-medium text-[#39383F] pb-[6.25rem] leading-none">Inspiration within and across  businesses.</h1>

      <p className="text-[#39383F] opacity-75">
        Create and manage your company&apos;s knowledge-sharing network, enabling employees to quickly connect with those who have solved or are solving similiar challenges.
      </p>
        </div>
    
      <Link href="/login" className="bg-[#39383F] text-white py-5 px-8 flex items-center justify-between hover:bg-[#77767c]">
  Log in
  <FaLongArrowAltRight className="ml-2" fill="white" />
</Link>
    </div>

    </section>
    </>
  
  );
}
