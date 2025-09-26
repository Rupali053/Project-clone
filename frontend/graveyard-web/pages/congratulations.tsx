"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

export default function CongratulationsPage() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-100 via-pink-50 to-yellow-100">
      {/* Animated Emoji */}
      <motion.div
        initial={{ scale: 0, rotate: -20 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="text-6xl mb-6"
      >
        🎉
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-4xl font-extrabold text-gray-800 mb-3"
      >
        Congratulations!
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
        className="text-lg text-gray-600 mb-8 text-center max-w-md"
      >
        Your entry has been <span className="font-semibold text-green-600">published successfully</span> 🚀  
        Thank you for contributing to the community!
      </motion.p>

      {/* Button */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        <Button
          onClick={() => router.push("/")}
          className="px-6 py-2 text-base font-medium rounded-xl shadow-md hover:shadow-lg bg-green-600 hover:bg-green-700 text-white"
        >
          Go back to Home
        </Button>
      </motion.div>
    </div>
  );
}
