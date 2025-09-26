"use client";

import { Search, Filter, Trophy, Star, Tag } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray  border-gray-400 h-screen flex flex-col px-5 py-6 overflow-y-auto">
      {/* Title */}
      <h2 className="text-lg font-semibold mb-4">Graveyard Tools</h2>

      {/* Search Bar with Icon */}
      <div className="flex items-center border rounded-md px-2 py-1 bg-white">
        <Search className="h-4 w-4 text-gray-400 mr-2" />
        <input
          type="text"
          placeholder="Search failed startups, founders, or learnings..."
          className="flex-1 text-sm outline-none bg-transparent"
        />
      </div>

      <p className="mt-3 text-xs text-gray-500">
        Showing <span className="font-medium text-gray-700">506</span> of 506 entries
      </p>

      {/* Tabs */}
      <div className="flex gap-6 mt-5 text-sm border-gray-50">
        <button className="flex items-center gap-1 pb-2 font-medium border-b-2 border-b-blue-700">
          <Filter size={14} /> Filters
        </button>
        <button className="flex items-center gap-1 pb-2 text-gray-500 hover:text-black">
          <Trophy size={14} /> Top
        </button>
        <button className="flex items-center gap-1 pb-2 text-gray-500 hover:text-black">
          <Star size={14} /> Picks
        </button>
      </div>

      {/* Categories */}
      <div className="mt-6 space-y-3 text-sm">
        <div className="flex items-center gap-2 text-gray-700 font-medium mb-2">
          <Tag size={14} /> Categories
        </div>
        {[
          "SaaS",
          "D2C",
          "Fintech",
          "Content",
          "Edtech",
          "Web3",
          "Healthcare",
          "E-commerce",
          "Gaming",
          "AI/ML",
          "IoT",
          "Social",
          "Marketplace",
          "Other",
        ].map((cat) => (
          <label
            key={cat}
            className="flex items-center gap-2 cursor-pointer hover:text-black"
          >
            <input
              type="checkbox"
              className="rounded border-gray-300 focus:ring-black"
            />
            {cat}
          </label>
        ))}
      </div>
    </aside>
  );
}
