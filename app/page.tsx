import Image from "next/image";

export default function Home() {
  return (<main className="bg-gray-100 h-screen flex items-center justify-center p-5 sm:bg-red-200 md:bg-green-200 lg:bg-cyan-200 xl:bg-orange-200 2xl:bg-purple-200">
    <div className="bg-white shadow-lg p-5 rounded-3xl w-full max-w-screen-sm flex flex-col gap-4">
      <div className="group flex flex-col">
        <input
          className="bg-gray-100 w-full"
          placeholder="Write your email"
        />
        <span className="group-focus-within:block hidden">
          Make sure valid email
        </span>
        <button>Submit</button>
      </div>
    </div>
  </main>);
}
