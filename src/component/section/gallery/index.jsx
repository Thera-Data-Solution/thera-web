import { useState } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "../heading";
import { Link } from "@tanstack/react-router";

export default function GallerySection({ gallery, withLink = false }) {
  const [preview, setPreview] = useState(null);

  return (
    <section className="py-24 px-6 container mx-auto">
      <SectionHeading title="Galeri Momen" subtitle="Dokumentasi" />

      {/* GRID GALERI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {gallery.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="aspect-square relative overflow-hidden rounded-xl cursor-pointer group"
            onClick={() => setPreview(item.imageUrl)}   // << PREVIEW
          >
            <img
              src={item.imageUrl}
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

      {withLink && (
        <div className="text-center mt-12">
          <Link
            href="/gallery"
            className="text-earth-800 font-semibold border-b-2 border-earth-800 pb-1 hover:text-earth-600 hover:border-earth-600 transition-all"
          >
            Lihat Semua
          </Link>
        </div>
      )}

      {/* PREVIEW MODAL */}
      {preview && (
        <div
          className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center z-[999]"
          onClick={() => setPreview(null)}
        >
          <div className="relative max-w-3xl w-full px-4" onClick={(e) => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white text-2xl"
              onClick={() => setPreview(null)}
            >
              ✕
            </button>
            <img
              src={preview}
              alt="Preview"
              className="w-full h-auto rounded-xl shadow-lg"
            />
          </div>
        </div>
      )}
    </section>
  );
}
