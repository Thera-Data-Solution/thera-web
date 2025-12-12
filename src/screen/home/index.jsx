import { motion } from "framer-motion";
import { ArrowRight, Star, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Collaborations } from "../../component/collaboration";
import GallerySection from "../../component/section/gallery";
import { SectionHeading } from "../../component/section/heading";
import ClassSection from "../../component/section/class";
import ArticleSection from "../../component/section/article";
import HeroSection from "../../component/section/hero";

const TESTIMONIALS = [
  {
    id: "1",
    name: "Sarah Wijaya",
    role: "Yoga Teacher",
    content:
      "Pengalaman yang luar biasa. Saya merasa beban di pundak saya hilang seketika setelah sesi private healing.",
    avatar: "https://picsum.photos/seed/user1/100/100",
  },
  {
    id: "2",
    name: "Budi Santoso",
    role: "Entrepreneur",
    content:
      "Awalnya skeptis, tapi ternyata sangat efektif untuk mengurangi stres pekerjaan saya. Sangat merekomendasikan sesi grup.",
    avatar: "https://picsum.photos/seed/user2/100/100",
  },
  {
    id: "3",
    name: "Amanda Lee",
    role: "Designer",
    content:
      "Suara mangkuknya sangat jernih dan teknik terapisnya sangat profesional. Tidur saya jadi jauh lebih nyenyak.",
    avatar: "https://picsum.photos/seed/user3/100/100",
  },
];


export default function HomeScreen({ gallery, categories, partners, articles, hero, heroLoading }) {


  return (
    <div className="bg-earth-50">
      {/* 1. HERO SECTION */}
      <HeroSection hero={hero} loading={heroLoading} />

      {/* 2. CLASS LIST */}
      <ClassSection categories={categories} />

      {/* 3. PREVIOUS COLLABORATIONS */}
      <Collaborations partners={partners} />

      {/* 4. TESTIMONIALS */}
      <section className="py-24 px-6 bg-earth-100">
        <div className="container mx-auto">
          <SectionHeading title="Kata Mereka" subtitle="Testimonial" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((testi, idx) => (
              <motion.div
                key={testi.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-earth-50 p-8 rounded-xl shadow-sm relative"
              >
                <div className="absolute -top-4 left-8 text-6xl text-earth-200 font-serif">
                  "
                </div>
                <div className="flex items-center mb-6 pt-4">
                  <div>
                    <h4 className="font-bold text-earth-900">{testi.name}</h4>
                    <span className="text-sm text-earth-600">Sesi Private Healing</span>
                  </div>
                </div>
                <p className="text-earth-800 italic leading-relaxed">
                  {testi.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALLERY */}
      <GallerySection gallery={gallery} withLink />

      {/* 6. ARTICLES */}
      <ArticleSection articles={articles} withLink />
    </div>
  );
};
