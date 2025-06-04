import Link from "next/link";

export default function Login() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col mx-4 justify-center max-w-lg w-full">
        <div className="text-left pb-24">
          <h1 className="text-[3rem] font-medium text-[#39383F] pb-5 leading-none">
            Log in
          </h1>
          <p className="text-[#39383F] opacity-75">
            To get inspired and tackle challenges with joy.
          </p>
        </div>

        <form className="text-[#39383F]">
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
    </section>
  );
}
