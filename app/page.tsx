import Image from "next/image";

export default function Home() {
  return (<main className="bg-gray-100 h-screen flex items-center justify-center p-5 sm:bg-red-200 md:bg-green-200 lg:bg-cyan-200 xl:bg-orange-200 2xl:bg-purple-200">
    <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-4">
      {["Nico", "Me", "You", "Yourself"].map((person, index) => 
        <div key={index} className="flex items-center gap-5 border-b-2 pb-5 last:border-0 last:pb-0">
          <div className= "size-10 bg-blue-400 rounded-full" />
          <span className="text-lg font-medium">{person}</span>
          <div className="size-6 bg-red-500 text-white flex items-center justify-center rounded-full">
            <span>{index}</span>
          </div>
        </div>)}
    </div>
  </main>);
}
