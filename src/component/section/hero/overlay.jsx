import { motion } from "framer-motion";
import { Buttons } from "./Buttons";

export default function HeroOverlay({ hero, buttons }) {
    return(
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 z-0">
                {hero?.image ? (
                    <img src={hero.image} alt="Hero" className="w-full h-full object-cover brightness-[0.6]" />
                ) : null}
            </div>
            <div className="relative z-10 w-full max-w-4xl mx-auto px-6 pt-28 text-earth-50 text-center">
                <p className="bg-earth-600/60 inline-block px-2 rounded-full mb-2 text-md font-medium px-4 py-1">{hero?.subtitle}</p>
                <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-4xl md:text-5xl font-serif font-bold mb-4">
                    {hero?.title}
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.1 }} className="text-lg md:text-xl mb-3 text-earth-100/90">
                    {hero?.description}
                </motion.p>
                {hero?.subText ? (
                    <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="text-sm mb-8 text-earth-200">
                        {hero?.subText}
                    </motion.p>
                ) : null}
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }} className="flex items-center justify-center">
                    <Buttons buttons={buttons} type="overlay" />
                </motion.div>
            </div>
        </section>
    )
}