import { Buttons } from "./Buttons";
import { motion } from "framer-motion";

export default function Hero1({ hero, buttons }) {
    return (
        <section className="relative pt-28 md:pt-32">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <p className="bg-earth-600/60 inline-block px-2 rounded-full mb-2 text-md font-medium px-4 py-1 text-white">{hero?.subtitle}</p>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-4"
                        >
                            {hero?.title}
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            className="text-lg md:text-xl text-earth-700 mb-4"
                        >
                            {hero?.description}
                        </motion.p>
                        {hero?.subText ? (
                            <motion.p
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="text-sm text-earth-600 mb-8"
                            >
                                {hero?.subText}
                            </motion.p>
                        ) : null}
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.3 }}>
                            <Buttons buttons={buttons} />
                        </motion.div>
                    </div>
                    <div className="relative">
                        {hero?.image ? (
                            <img src={hero.image} alt="Hero" className="w-full h-full max-h-[60vh] object-cover rounded-2xl shadow-lg" />
                        ) : null}
                    </div>
                </div>
            </div>
        </section>
    )
}
