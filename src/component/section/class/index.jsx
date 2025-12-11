import { Clock } from "lucide-react";
import { SectionHeading } from "../heading";
import { motion } from "framer-motion"
import { Globe } from "lucide-react";

export default function ClassSection({ categories }) {
    const renderDuration = (start, end) => {
        if (!start && end) return `${end}min`
        if (start && !end) return `${start}min`
        if (start && end) return `${start}min - ${end}min`
        if (!start && !end) return ""
    }

    const renderPrice = (item) => {
        if (item.isPayAsYouWish) return "Pay As You Wish"
        if (item.isFree) return "Free"
        return Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(item.price)
    }
    return (
        <section id="classes" className="py-24 px-6 container mx-auto">
            <SectionHeading title="Penawaran Kelas" subtitle="Layanan Kami" />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {categories.map((session, index) => (
                    <motion.div
                        key={session.id}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-earth-100"
                    >
                        <div className="h-64 overflow-hidden relative">
                            <img
                                src={session.image}
                                alt={session.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-earth-800 text-sm font-bold">
                                {renderPrice(session)}
                            </div>
                        </div>
                        <div className="p-8">
                            <div className="flex items-center text-earth-600 mb-3 text-sm font-medium">
                                <Clock size={16} className="mr-2" />
                                {renderDuration(session.start, session.end)}
                            </div>
                            <div className="flex items-center text-earth-600 mb-3 text-sm font-medium">
                                <Globe size={16} className="mr-2" />
                                {session.location || ""}
                            </div>
                            <h3 className="text-2xl font-serif font-bold text-earth-900 mb-3">
                                {session?.name || ""}
                            </h3>
                            <p className="text-earth-600 mb-6 leading-relaxed">
                                {session.description || ""}
                            </p>
                            <button className="w-full py-3 border border-earth-800 text-earth-800 hover:bg-earth-800 hover:text-white transition-colors rounded-lg font-medium flex justify-center items-center">
                                Reservasi Sekarang
                            </button>
                        </div>
                    </motion.div>
                ))}
            </div>

        </section>
    );
}