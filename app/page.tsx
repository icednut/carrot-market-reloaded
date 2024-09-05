import Image from "next/image";

export default function Home() {
  return (<main className="bg-gray-100 h-screen flex items-center justify-center p-5 sm:bg-red-200 md:bg-green-200 lg:bg-cyan-200 xl:bg-orange-200 2xl:bg-purple-200">
    <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col md:flex-row gap-2">
      <input className="w-full rounded-full bg-gray-200 pl-5 h-12 outline-none ring ring-transparent focus:ring-orange-500 focus:ring-offset-2 transition-shadow placeholder:drop-shadow" type="text" placeholder="Search here" />
      <button className="bg-black text-white py-2 rounded-full active:scale-95 transition-transform font-medium outline-none md:px-10">Search</button>
    </div>
  </main>);
}
