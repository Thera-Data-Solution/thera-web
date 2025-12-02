import React from "react";
import { motion } from "framer-motion";

const COLLABS = [
  "Yoga Festival 2023",
  "Mandala Retreat",
  "Wellness Center JKT",
  "Corporate Balance",
  "Hotel Mulia Spa",
  "Bali Spirit",
  "Mindful Corp",
  "Zen Space",
];

// Duplicate list for infinite scroll effect
const SCROLL_ITEMS = [...COLLABS, ...COLLABS, ...COLLABS];

export const Collaborations = () => {
  return (
    <div className="w-full overflow-hidden bg-earth-100 py-12">
      <div className="container mx-auto px-6 mb-6 text-center">
        <h3 className="text-sm uppercase tracking-widest text-earth-600 font-semibold">
          Kolaborasi Sebelumnya
        </h3>
      </div>

      <div className="relative w-full flex overflow-hidden mask-gradient-x">
        <motion.div
          className="flex whitespace-nowrap"
          animate={{ x: "-50%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 25,
          }}
        >
          {SCROLL_ITEMS.map((item, index) => (
            <div
              key={index}
              className="inline-flex items-center justify-center mx-8 md:mx-16 opacity-60 hover:opacity-100 transition-opacity"
            >
              <span className="text-xl md:text-2xl font-serif font-bold text-earth-800 whitespace-nowrap">
                {item}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
