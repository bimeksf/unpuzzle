import Link from "next/link";

export default function Login() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen min-w-screen font-sans overflow-hidden">
      <div className="flex flex-col mx-12 justify-center max-w-lg w-full">
        <div className="text-left pb-20">
          <h1 className="text-[3rem] font-medium text-[#39383F] pb-5 leading-none">
            Log in
          </h1>
          <p className="text-[#39383F] opacity-75">
            To get inspired and tackle challenges with joy.
          </p>
        </div>

        <form className="text-[#39383F] pb-20 mb-20">
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

            <Link href="/forgot-password" className="text-right text-sm opacity-50 hover:underline">
              Forgotten password?
            </Link>
          </div>

          <button
            type="submit"
            className="bg-[#39383F] text-white py-4 px-6 font-medium mt-6 "
          >
            Continue
          </button>
        </form>
      </div>

 {/* RIGHT SIDE */}
 <div className="absolute top-0 right-0 w-1/2 min-h-screen bg-[#F4F4F4] overflow-hidden hidden  sm:flex flex-col items-center justify-center">
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

                <h1 className="text-5xl text-[#39383F] m-auto z-20">Boost profitability</h1>        
      </div>

    </section>

  );
}
