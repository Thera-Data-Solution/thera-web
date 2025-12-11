import { motion } from "framer-motion";

export const Collaborations = ({ partners }) => {
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
            duration: 10,
          }}
        >
          {partners.map((item) => (
            <div
              key={item.id}
              className="inline-flex items-center justify-center mx-8 md:mx-16 opacity-60 hover:opacity-100 transition-opacity"
            >
              <img
                src={item.logo}
                alt={item.name}
                className="w-16 h-16 md:w-24 md:h-24 object-contain"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
