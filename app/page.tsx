import Image from "next/image";

export default function Home() {
  return (<main className="bg-gray-100 h-screen flex items-center justify-center p-5 sm:bg-red-200 md:bg-green-200 lg:bg-cyan-200 xl:bg-orange-200 2xl:bg-purple-200">
    <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2 *:outline-none has-[.peer]:bg-green-100 has-[:invalid]:bg-red-100 has-[:invalid]:ring has-[:invalid]:ring-red-500 ring ring-transparent transition-shadow">
      <input className="w-full rounded-full bg-gray-200 pl-5 h-12 ring ring-transparent invalid:focus:ring-orange-500 focus:ring-green-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow peer" type="text" placeholder="Email Address" required />
      <span className="text-red-500 font-medium hidden peer-invalid:block">Email is required.</span>
      <button className="text-white py-2 rounded-full active:scale-95 transition-transform font-medium md:px-10 peer-invalid:bg-black  peer-required:bg-green-500">Login</button>
    </div>
  </main>);
}
