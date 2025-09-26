"use client";
import { RefreshCw, EyeOff, TrendingUp, Flag } from "lucide-react";
import { useState } from "react";
import CardModal from "./CardModal";

export default function CardGrid() {
  const [selectedCard, setSelectedCard] = useState<any>(null);

  // Deterministic data (no Math.random())
  const cards = Array.from({ length: 70 }, (_, i) => {
    const hasAvatar = i % 5 !== 0; // deterministic
    return {
      id: i,
      name: i % 2 === 0 ? "EcoCart" : "PayFlow",
      founder: i % 2 === 0 ? "Kadir Nep" : "John Doe",
      img: hasAvatar ? `https://i.pravatar.cc/100?img=${i + 1}` : null,
      category:
        i % 4 === 0
          ? "E-commerce"
          : i % 4 === 1
          ? "Fintech"
          : i % 4 === 2
          ? "FoodTech"
          : "Gaming",
      border:
        i % 4 === 0
          ? "border-red-300"
          : i % 4 === 1
          ? "border-green-300"
          : i % 4 === 2
          ? "border-blue-300"
          : "border-yellow-300",
      details: {
        subtitle: "Random subtitle for card " + (i + 1),
        timeline: "2021 - 2022",
        duration: `${6 + (i % 12)} months`,
        team: `${2 + (i % 5)} people`,
        funding: `$${(i + 1) * 10000}`,
        status:
          i % 3 === 0
            ? ["Shut Down", "Funding Gap"]
            : i % 3 === 1
            ? ["Shut Down"]
            : ["Funding Gap"],
        problem:
          "This is a sample problem statement for card " + (i + 1) + ".",
        solution: "Proposed solution for card " + (i + 1) + ".",
        wrong: "What went wrong for card " + (i + 1) + ".",
        learnings: "Key learnings from card " + (i + 1) + ".",
        likes: (i * 7) % 100,
        comments: (i * 3) % 20,
        saves: (i * 5) % 15,
      },
    };
  });

  return (
    <>
      <div
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(auto-fill, minmax(90px, 1fr))` }}
      >
        {cards.map((card) => (
          <div
            key={card.id}
            onClick={() => setSelectedCard(card)}
            className={`relative h-24 w-24 rounded-xl border-2 ${card.border} bg-white flex items-center justify-center cursor-pointer hover:shadow-md transition`}
          >
            {/* Top-right action icons */}
            <div className="absolute top-1 right-1 flex gap-1">
              <RefreshCw size={12} className="text-blue-400" />
              <EyeOff size={12} className="text-gray-400" />
            </div>

            {/* Avatar or placeholder */}
            {card.img ? (
              <img
                src={card.img}
                alt={card.name}
                className="h-10 w-10 rounded-full object-cover"
              />
            ) : (
              <Flag size={20} className="text-gray-400" />
            )}

            {/* Bottom-left dots */}
            <div className="absolute bottom-1 left-1 flex gap-1">
              {card.category === "E-commerce" && (
                <>
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                </>
              )}
              {card.category === "Fintech" && (
                <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
              )}
              {card.category === "FoodTech" && (
                <>
                  <span className="h-1.5 w-1.5 rounded-full bg-red-400"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-green-400"></span>
                  <span className="h-1.5 w-1.5 rounded-full bg-yellow-400"></span>
                </>
              )}
              {card.category === "Gaming" && (
                <span className="h-1.5 w-1.5 rounded-full bg-blue-400"></span>
              )}
            </div>

            {/* Top-left trending icon */}
            <TrendingUp
              className="absolute top-1 left-1 text-purple-400"
              size={12}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      <CardModal
        isOpen={!!selectedCard}
        onClose={() => setSelectedCard(null)}
        card={selectedCard}
      />
    </>
  );
}
