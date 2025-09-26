"use client";

import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import Cardgrid from "@/components/Cardgrid";

export default function Dashboard() {
  return (
    <div className="bg-white text-gray-900 min-h-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      <div className="flex flex-1">
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <main className="flex-1 p-6 overflow-y-auto">
          {/* Yaha cards grid aayegi */}
          <Cardgrid />
        </main>
      </div>
    </div>
  );
}























