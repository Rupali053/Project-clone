"use client";
import AddEntryModal from "@/components/AddEntryModal";

export default function AddEntryPage() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      {/* 🔹 Form open as full page instead of modal */}
      <AddEntryModal />
    </div>
  );
}
