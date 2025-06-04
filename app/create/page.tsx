import Link from "next/link";

export default function CreateAccount() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen min-w-screen font-sans overflow-hidden ">
      <div className="flex flex-col mx-4  sm:mx-12 justify-center max-w-lg w-full">
        <div className="text-left pb-20">
          <h1 className="text-[3rem] font-medium text-[#39383F] pb-5 leading-none">
            Create an Account
          </h1>
          <p className="text-[#39383F] opacity-75">
            To get inspired and tackle challenges with joy.
          </p>
        </div>



        <form className="text-[#39383F] pb-20 mb-20  w-[90%]  sm:px-0">
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
              id="password"
              type="password"
              name="password"
              placeholder="Password Confirm"
              className="border-b-2 border-black focus:border-b-4 pb-3 outline-0"
              aria-label="Password"
              />


         
              <Link href="/forgot-password" className="text-right text-sm opacity-50 hover:underline">
                Forgotten password?
              </Link>
            </div>



        <div className="flex flex-col">



          <button
            type="submit"
            className="bg-[#39383F] text-white py-4 px-6 font-medium mt-6 "
            >
            Create an Account
          </button>
             <Link href="/login"  className="border-2 border-[#39383F] text-[#39383F] py-4 px-6 font-medium mt-6 text-center hover:bg-[#39383F] hover:text-white transition">
             
                    Login
              </Link>
      

              </div>

        </form>
            </div>

 {/* RIGHT SIDE */}
 <div className="absolute top-0 right-0 w-1/2 min-h-screen bg-[#F4F4F4] overflow-hidden hidden  sm:flex flex-col items-center justify-center">
        {/* Orbit lines (simple placeholder SVG) */}
     <svg width="100%" height="100%" className="absolute inset-0 w-full h-full">
          {[100,200,300, 400, 500, 600].map((r, i) => {
            // Výpočet bodů pro trojúhelník se základnou vlevo
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

                <h1 className="text-5xl text-[#39383F] m-auto z-20">Boost profitability</h1>        
      </div>

    </section>

  );
}