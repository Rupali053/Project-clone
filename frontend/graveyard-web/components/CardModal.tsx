"use client";
import {
  X,
  Calendar,
  Clock,
  Users,
  DollarSign,
  Heart,
  MessageSquare,
  Bookmark,
  Share2,
  RefreshCw,
  Flag,
} from "lucide-react";

interface CardModalProps {
  isOpen: boolean;
  onClose: () => void;
  card: any;
}

export default function CardModal({ isOpen, onClose, card }: CardModalProps) {
  if (!isOpen || !card) return null;

  const details = card.details || {};

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-white w-full max-w-4xl rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="flex justify-between items-center px-6 py-4 border-b border-gray-200">
          <h2 className="text-2xl font-bold">{card.name}</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">
            <X size={20} />
          </button>
        </div>

        <div className="flex flex-col md:flex-row">
          {/* Left Section */}
          <div className="flex-1 px-6 py-4">
            <p className="text-gray-700 font-semibold">
              {details.subtitle || card.category}
            </p>

            {/* Meta info */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-500 mt-3">
              <span className="flex items-center gap-1">
                <Calendar size={14} /> {details.timeline}
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> {details.duration}
              </span>
              <span className="flex items-center gap-1">
                <Users size={14} /> {details.team}
              </span>
              <span className="flex items-center gap-1">
                <DollarSign size={14} /> {details.funding}
              </span>
            </div>

            {/* Status Tags */}
            <div className="flex gap-2 mt-4 flex-wrap">
              <span className="px-2 py-1 bg-blue-100 text-blue-600 text-xs rounded-md">
                {card.category}
              </span>
              {details.status?.map((tag: string, idx: number) => (
                <span
                  key={idx}
                  className={`px-2 py-1 text-xs rounded-md ${
                    tag === "Shut Down"
                      ? "bg-gray-100 text-gray-600"
                      : tag === "Funding Gap"
                      ? "bg-red-100 text-red-600 border border-red-400 font-medium"
                      : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Problem Statement */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <h3 className="font-semibold text-gray-900">Problem Statement</h3>
              <p className="text-sm text-gray-700 mt-1">
                {details.problem ||
                  "Consumers want to shop sustainably but struggle to find eco-friendly products."}
              </p>
              <p className="text-sm text-gray-500 mt-2 leading-relaxed">
                {details.problemDetails ||
                  "This creates friction in adoption as users often have to compromise between sustainability and affordability."}
              </p>
            </div>

            {/* Solution */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <h3 className="font-semibold text-gray-900">Solution</h3>
              <p className="text-sm text-gray-700 mt-1">{details.solution}</p>
            </div>

            {/* What Went Wrong */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <h3 className="font-semibold text-gray-900">What Went Wrong</h3>
              <p className="text-sm text-gray-700 mt-1">{details.wrong}</p>
            </div>

            {/* Key Learnings */}
            <div className="mt-6 border-t border-gray-200 pt-4">
              <h3 className="font-semibold text-gray-900">Key Learnings</h3>
              <p className="text-sm text-gray-700 mt-1">{details.learnings}</p>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="w-full md:w-64 border-t md:border-t-0 md:border-l border-gray-200 px-6 py-4">
            <h3 className="font-semibold mb-3">Founder</h3>
            <div className="flex items-center gap-3">
              {card.img ? (
                <img
                  src={card.img}
                  alt={card.founder}
                  className="h-10 w-10 rounded-full object-cover"
                />
              ) : (
                <div className="h-10 w-10 rounded-full bg-gray-300 flex items-center justify-center text-gray-600">
                  {card.founder[0]}
                </div>
              )}
              <span className="text-gray-700">{card.founder}</span>
            </div>

            {/* Founder extra icons */}
            <div className="flex gap-3 mt-2 text-gray-600">
              <Users size={18} className="cursor-pointer hover:text-blue-500" />
              <Share2 size={18} className="cursor-pointer hover:text-blue-500" />
            </div>

            {/* Engagement */}
            <h3 className="font-semibold mt-6 mb-2">Engagement</h3>
            <div className="flex gap-4 text-gray-600 text-sm">
              <span className="flex items-center gap-1 cursor-pointer hover:text-red-500">
                <Heart size={16} /> {details.likes || 34}
              </span>
              <span className="flex items-center gap-1 cursor-pointer hover:text-blue-500">
                <MessageSquare size={16} /> {details.comments || 8}
              </span>
              <span className="flex items-center gap-1 cursor-pointer hover:text-green-600">
                <Bookmark size={16} /> {details.saves || 15}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-col gap-2 mt-4">
              <button className="w-full px-3 py-2 rounded-md border text-sm flex items-center gap-2 hover:bg-gray-50">
                <Share2 size={14} /> Share Story
              </button>
              <button className="w-full px-3 py-2 rounded-md border text-sm flex items-center gap-2 hover:bg-gray-50">
                <RefreshCw size={14} /> Try Again
              </button>
              <button className="w-full px-3 py-2 rounded-md border text-sm text-red-600 flex items-center gap-2 hover:bg-red-50">
                <Flag size={14} /> Report
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
