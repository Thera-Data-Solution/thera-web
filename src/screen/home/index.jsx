import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Star, Calendar, Clock, ArrowUpRight } from "lucide-react";
import { Collaborations } from "../../component/collaboration";

// --- MOCK DATA ---

const CLASSES = [
  {
    id: "1",
    title: "Private Healing",
    description:
      "Sesi privat satu-lawan-satu untuk penyembuhan mendalam dan relaksasi total sesuai kebutuhan energi Anda.",
    duration: "60 Menit",
    price: "IDR 850K",
    image: "https://picsum.photos/seed/singingbowl1/600/400",
  },
  {
    id: "2",
    title: "Group Sound Bath",
    description:
      "Rasakan resonansi kolektif dalam sesi grup yang intim. Cocok untuk teman atau keluarga.",
    duration: "90 Menit",
    price: "IDR 350K / pax",
    image: "https://picsum.photos/seed/singingbowl2/600/400",
  },
  {
    id: "3",
    title: "Chakra Balancing",
    description:
      "Fokus pada penyelarasan 7 titik energi utama tubuh menggunakan frekuensi spesifik dari 7 mangkuk.",
    duration: "75 Menit",
    price: "IDR 950K",
    image: "https://picsum.photos/seed/singingbowl3/600/400",
  },
];

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

const ARTICLES = [
  {
    id: "1",
    title: "Manfaat Singing Bowl untuk Insomnia",
    excerpt:
      "Bagaimana frekuensi suara membantu otak masuk ke gelombang theta dan delta untuk tidur yang lebih baik.",
    date: "12 Okt 2023",
    category: "Kesehatan",
    image: "https://picsum.photos/seed/article1/600/400",
  },
  {
    id: "2",
    title: "Sejarah Mangkuk Tibet Kuno",
    excerpt:
      "Menelusuri jejak asal usul mangkuk bernyanyi dari pegunungan Himalaya hingga ke studio modern.",
    date: "28 Sep 2023",
    category: "Sejarah",
    image: "https://picsum.photos/seed/article2/600/400",
  },
  {
    id: "3",
    title: "Memilih Mangkuk Pertama Anda",
    excerpt:
      "Panduan lengkap bagi pemula untuk memilih singing bowl yang sesuai dengan resonansi diri.",
    date: "15 Sep 2023",
    category: "Tips",
    image: "https://picsum.photos/seed/article3/600/400",
  },
  {
    id: "4",
    title: "Meditasi Suara di Kantor",
    excerpt: "Cara singkat melakukan grounding di sela-sela pekerjaan padat.",
    date: "10 Sep 2023",
    category: "Lifestyle",
    image: "https://picsum.photos/seed/article4/600/400",
  },
];

const GALLERY_IMAGES = [
  "https://picsum.photos/seed/gallery1/800/800",
  "https://picsum.photos/seed/gallery2/800/800",
  "https://picsum.photos/seed/gallery3/800/800",
  "https://picsum.photos/seed/gallery4/800/800",
  "https://picsum.photos/seed/gallery5/800/800",
  "https://picsum.photos/seed/gallery6/800/800",
];

// --- SUB-COMPONENTS ---

const SectionHeading = ({ title, subtitle }) => (
  <div className="text-center mb-16">
    {subtitle && (
      <span className="text-earth-600 font-medium tracking-widest text-sm uppercase block mb-3">
        {subtitle}
      </span>
    )}
    <h2 className="text-4xl md:text-5xl font-serif text-earth-900">{title}</h2>
    <div className="w-24 h-1 bg-earth-300 mx-auto mt-6"></div>
  </div>
);

export const HomeScreen = () => {
  const [showAllGallery, setShowAllGallery] = useState(false);
  const [showAllArticles, setShowAllArticles] = useState(false);

  // Limit items for display
  const displayedGallery = showAllGallery
    ? GALLERY_IMAGES
    : GALLERY_IMAGES.slice(0, 3);
  const displayedArticles = showAllArticles ? ARTICLES : ARTICLES.slice(0, 3);

  return (
    <div className="bg-earth-50">
      {/* 1. HERO SECTION */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          {/* Using a placeholder image with specific ID for consistency */}
          <img
            src="https://picsum.photos/id/10/1920/1080"
            alt="Singing Bowl Background"
            className="w-full h-full object-cover filter brightness-[0.6] sepia-[0.3]"
          />
        </div>
        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto text-earth-50">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight"
          >
            Temukan Harmoni <br /> Dalam Diri
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-xl md:text-2xl font-light mb-10 text-earth-100/90"
          >
            Perjalanan penyembuhan holistik melalui getaran suara suci bersama
            Praktisi Bersertifikat.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <a
              href="#classes"
              className="inline-flex items-center px-8 py-4 bg-earth-600 hover:bg-earth-500 text-white rounded-full transition-all duration-300 transform hover:scale-105"
            >
              <span className="mr-2 font-medium tracking-wide">
                Jelajahi Sesi
              </span>
              <ArrowRight size={20} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* 2. CLASS LIST */}
      <section id="classes" className="py-24 px-6 container mx-auto">
        <SectionHeading title="Penawaran Kelas" subtitle="Layanan Kami" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {CLASSES.map((session, index) => (
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
                  {session.price}
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-center text-earth-600 mb-3 text-sm font-medium">
                  <Clock size={16} className="mr-2" />
                  {session.duration}
                </div>
                <h3 className="text-2xl font-serif font-bold text-earth-900 mb-3">
                  {session.title}
                </h3>
                <p className="text-earth-600 mb-6 leading-relaxed">
                  {session.description}
                </p>
                <button className="w-full py-3 border border-earth-800 text-earth-800 hover:bg-earth-800 hover:text-white transition-colors rounded-lg font-medium flex justify-center items-center">
                  Reservasi Sekarang
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 3. PREVIOUS COLLABORATIONS */}
      <Collaborations />

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
                  <img
                    src={testi.avatar}
                    alt={testi.name}
                    className="w-14 h-14 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-earth-900">{testi.name}</h4>
                    <span className="text-sm text-earth-600">{testi.role}</span>
                  </div>
                </div>
                <p className="text-earth-800 italic leading-relaxed">
                  {testi.content}
                </p>
                <div className="flex text-yellow-500 mt-4 space-x-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. GALLERY */}
      <section className="py-24 px-6 container mx-auto">
        <SectionHeading title="Galeri Momen" subtitle="Dokumentasi" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayedGallery.map((img, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="aspect-square relative overflow-hidden rounded-xl cursor-pointer group"
            >
              <img
                src={img}
                alt="Gallery"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white border border-white px-4 py-2 rounded-full">
                  Lihat
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button
            onClick={() => setShowAllGallery(!showAllGallery)}
            className="text-earth-800 font-semibold border-b-2 border-earth-800 pb-1 hover:text-earth-600 hover:border-earth-600 transition-all"
          >
            {showAllGallery ? "Tutup Galeri" : "Lihat Semua Foto"}
          </button>
        </div>
      </section>

      {/* 6. ARTICLES */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto">
          <div className="flex justify-between items-end mb-12 border-b border-earth-100 pb-6">
            <div>
              <span className="text-earth-600 font-medium tracking-widest text-sm uppercase block mb-2">
                Jurnal
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-earth-900">
                Artikel & Wawasan
              </h2>
            </div>
            <button
              onClick={() => setShowAllArticles(!showAllArticles)}
              className="hidden md:flex items-center text-earth-800 hover:text-earth-600 transition-colors font-medium"
            >
              {showAllArticles ? "Lebih Sedikit" : "Semua Artikel"}{" "}
              <ArrowRight size={18} className="ml-2" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {displayedArticles.map((article, idx) => (
              <motion.article
                key={article.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group cursor-pointer"
              >
                <div className="overflow-hidden rounded-xl mb-5 h-60">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex items-center space-x-3 text-xs text-earth-500 mb-3 uppercase tracking-wider font-semibold">
                  <span className="text-earth-700">{article.category}</span>
                  <span>•</span>
                  <span>{article.date}</span>
                </div>
                <h3 className="text-xl font-serif font-bold text-earth-900 mb-3 group-hover:text-earth-600 transition-colors">
                  {article.title}
                </h3>
                <p className="text-earth-600 line-clamp-2 mb-4">
                  {article.excerpt}
                </p>
                <span className="inline-flex items-center text-earth-800 font-medium group-hover:translate-x-1 transition-transform">
                  Baca Selengkapnya <ArrowUpRight size={16} className="ml-1" />
                </span>
              </motion.article>
            ))}
          </div>

          {/* Mobile View All Button */}
          <div className="md:hidden mt-10 text-center">
            <button
              onClick={() => setShowAllArticles(!showAllArticles)}
              className="inline-flex items-center px-6 py-3 border border-earth-300 rounded-full text-earth-800"
            >
              {showAllArticles ? "Lebih Sedikit" : "Lihat Semua Artikel"}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};
