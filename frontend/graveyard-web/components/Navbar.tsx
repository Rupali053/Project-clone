// "use client";
// import { useState } from "react";
// import {
//   Search,
//   ZoomIn,
//   ZoomOut,
//   RotateCcw,
//   Sun,
//   Moon,
//   Bell,
//   Home,
// } from "lucide-react";
// import Link from "next/link";

// export default function Navbar() {
//   const [darkMode, setDarkMode] = useState(false);
//   const [zoom, setZoom] = useState(100);

//   return (
//     <div className={darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"}>
//       {/* ===== Navbar ===== */}
//       <div className="border-gray-600 dark:border-gray-700">
//         <div className="flex items-center justify-between px-6 py-3">
//           {/* Logo */}
//           <div className="flex items-center gap-3">
//             <div className="bg-orange-500 text-white font-bold h-8 w-8 flex items-center justify-center rounded-md">
//               K
//             </div>
//             <div>
//               <h1 className="font-semibold">Kagaar Graveyard</h1>
//               <p className="text-xs text-gray-500 dark:text-gray-400">
//                 Where failed startups find meaning
//               </p>
//             </div>
//           </div>

//           {/* Middle */}
//           <div className="flex items-center gap-6">
//             {/* Navigation */}
//             <div className="flex items-center gap-6 text-sm font-medium">
//               <Link
//                 href="/"
//                 className="flex items-center gap-1 hover:font-semibold"
//               >
//                 <Home size={16} /> Home
//               </Link>
//               <Link href="/graveyard" className="hover:font-semibold">
//                 Graveyard
//               </Link>
//             </div>

//             {/* Search */}
//             <div className="flex items-center border rounded-md px-3 w-[420px] bg-transparent">
//               <Search className="h-5 w-5 text-gray-400 mr-2" />
//               <input
//                 type="text"
//                 placeholder="Search failed startups, founders, or learnings..."
//                 className="flex-1 py-2 text-sm outline-none bg-transparent"
//               />
//             </div>
//           </div>

//           {/* Right */}
//           <div className="flex items-center gap-4">
//             {/* Zoom Controls */}
//             <div className="flex items-center gap-2 border rounded-md px-3 py-1 text-sm">
//               <ZoomOut
//                 size={16}
//                 className="cursor-pointer"
//                 onClick={() => setZoom((z) => Math.max(50, z - 10))}
//               />
//               <span>{zoom}%</span>
//               <ZoomIn
//                 size={16}
//                 className="cursor-pointer"
//                 onClick={() => setZoom((z) => Math.min(200, z + 10))}
//               />
//               <RotateCcw
//                 size={16}
//                 className="cursor-pointer"
//                 onClick={() => setZoom(100)}
//               />
//             </div>

//             {/* 🔹 Page navigation for Add Entry */}
//             <Link
//               href="/add-entry"
//               className="bg-black text-white px-3 py-1 rounded-md text-sm hover:bg-gray-800"
//             >
//               + Add Entry
//             </Link>

//             {/* Dark Mode Toggle */}
//             <button
//               onClick={() => setDarkMode(!darkMode)}
//               className="p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
//             >
//               {darkMode ? <Sun size={18} /> : <Moon size={18} />}
//             </button>

//             {/* Notifications */}
//             <div className="relative">
//               <Bell size={20} className="cursor-pointer" />
//               <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
//                 3
//               </span>
//             </div>

//             {/* User Avatar */}
//             <img
//               src="https://i.pravatar.cc/40?img=65"
//               alt="user"
//               className="h-9 w-9 rounded-full cursor-pointer"
//             />
//           </div>
//         </div>

//         {/* ===== Stats Bar ===== */}
//         <div className="flex items-center justify-between px-6 py-2 text-sm">
//           {/* Left side */}
//           <div className="flex gap-6 items-center">
//             <span className="flex items-center gap-1">
//               <span className="h-2 w-2 rounded-full bg-orange-500"></span>
//               <span className="font-bold">506</span> failed startups
//             </span>
//             <span className="flex items-center gap-1">
//               <span className="h-2 w-2 rounded-full bg-blue-500"></span>
//               <span className="font-bold">0</span> this month
//             </span>
//             <span className="flex items-center gap-1">
//               <span className="h-2 w-2 rounded-full bg-green-500"></span>
//               <span className="font-bold">480</span> trying again
//             </span>
           
//           </div>

//           {/* Right side */}
//           <div className="flex gap-8 items-center">
//             <div className="text-center">
//               <span className="font-bold block">117</span>
//               <span className="text-xs text-black">Shut Down</span>
//             </div>
//             <div className="text-center">
//               <span className="font-bold block">366</span>
//               <span className="text-xs text-black">Would Retry</span>
//             </div>
//             <div className="text-center">
//               <span className="font-bold block">239</span>
//               <span className="text-xs text-black">Had Funding</span>
//             </div>
//             <span className="text-xs text-black whitespace-nowrap">
//               Last updated: 2 minutes ago
//             </span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }








"use client";
import { useState, useEffect } from "react";
import {
  Search,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sun,
  Moon,
  Bell,
  Home,
} from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  const [zoom, setZoom] = useState(100);

  // ✅ Zoom effect -> full page
  useEffect(() => {
    document.body.style.zoom = `${zoom}%`;
  }, [zoom]);

  return (
    <div className="bg-white text-gray-900">
      {/* ===== Navbar ===== */}
      <div className="border-gray-200">
        <div className="flex items-center justify-between px-6 py-3">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-orange-500 text-white font-bold h-8 w-8 flex items-center justify-center rounded-md">
              K
            </div>
            <div>
              <h1 className="font-semibold">Kagaar Graveyard</h1>
              <p className="text-xs text-gray-500">
                Where failed startups find meaning
              </p>
            </div>
          </div>

          {/* Middle */}
          <div className="flex items-center gap-6">
            {/* Navigation */}
            <div className="flex items-center gap-6 text-sm font-medium">
              <Link
                href="/"
                className="flex items-center gap-1 hover:font-semibold"
              >
                <Home size={16} /> Home
              </Link>
              <Link href="/graveyard" className="hover:font-semibold">
                Graveyard
              </Link>
            </div>

            {/* Search */}
            <div className="flex items-center border rounded-md px-3 w-[420px] bg-transparent">
              <Search className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="text"
                placeholder="Search failed startups, founders, or learnings..."
                className="flex-1 py-2 text-sm outline-none bg-transparent"
              />
            </div>
          </div>

          {/* Right */}
          <div className="flex items-center gap-4">
            {/* ✅ Zoom Controls */}
            <div className="flex items-center gap-2 border rounded-md px-3 py-1 text-sm">
              <ZoomOut
                size={16}
                className="cursor-pointer"
                onClick={() => setZoom((z) => Math.max(50, z - 10))}
              />
              <span>{zoom}%</span>
              <ZoomIn
                size={16}
                className="cursor-pointer"
                onClick={() => setZoom((z) => Math.min(200, z + 10))}
              />
              <RotateCcw
                size={16}
                className="cursor-pointer"
                onClick={() => setZoom(100)}
              />
            </div>

            {/* 🔹 Page navigation for Add Entry */}
            <Link
              href="/add-entry"
              className="bg-black text-white px-3 py-1 rounded-md text-sm hover:bg-gray-800"
            >
              + Add Entry
            </Link>

            {/* 🌙☀️ Dummy Dark/Light Mode Button */}
            <button className="p-2 rounded-md hover:bg-gray-100">
              <Moon size={18} />
            </button>

            {/* Notifications */}
            <div className="relative">
              <Bell size={20} className="cursor-pointer" />
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                3
              </span>
            </div>

            {/* User Avatar */}
            <img
              src="https://i.pravatar.cc/40?img=65"
              alt="user"
              className="h-9 w-9 rounded-full cursor-pointer"
            />
          </div>
        </div>

        {/* ===== Stats Bar ===== */}
        <div className="flex items-center justify-between px-6 py-2 text-sm">
          {/* Left side */}
          <div className="flex gap-6 items-center">
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-orange-500"></span>
              <span className="font-bold">506</span> failed startups
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-blue-500"></span>
              <span className="font-bold">0</span> this month
            </span>
            <span className="flex items-center gap-1">
              <span className="h-2 w-2 rounded-full bg-green-500"></span>
              <span className="font-bold">480</span> trying again
            </span>
          </div>

          {/* Right side */}
          <div className="flex gap-8 items-center">
            <div className="text-center">
              <span className="font-bold block">117</span>
              <span className="text-xs text-black">Shut Down</span>
            </div>
            <div className="text-center">
              <span className="font-bold block">366</span>
              <span className="text-xs text-black">Would Retry</span>
            </div>
            <div className="text-center">
              <span className="font-bold block">239</span>
              <span className="text-xs text-black">Had Funding</span>
            </div>
            <span className="text-xs text-black whitespace-nowrap">
              Last updated: 2 minutes ago
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}


