"use client";
import Bottom from "@/components/Bottom";
import Middle from "@/components/Middle";
import Sidebar from "@/components/Sidebar";
import Top from "@/components/Top";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="flex">
        <aside className="grid border-r-2 border-gray-700 min-h-screen p-6">
          <Sidebar />
        </aside>
        <div className="w-full">
          <div className="p-4 border-b-2 border-gray-700">Securing Your Flutter App: Best Practices and Techniques  </div>
          <main className="w-full p-10">
            <Top />
            <Middle />
            <Bottom />{" "}
          </main>
        </div>
      </div>
    </div>
  );
}
