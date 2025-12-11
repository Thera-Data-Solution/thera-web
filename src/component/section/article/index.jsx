import { Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { ArrowRight } from "lucide-react";

export default function ArticleSection({ articles, withLink }) {
    return (
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
                    {
                        withLink && (
                            <Link
                                to="/articles"
                                className="hidden md:flex items-center text-earth-800 hover:text-earth-600 transition-colors font-medium"
                            >
                                Semua Artikel
                                <ArrowRight size={18} className="ml-2" />
                            </Link>
                        )
                    }
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {articles.map((article, idx) => (
                        <motion.article
                            key={article.id}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group cursor-pointer"
                        >
                            {
                                article?.coverImage && (
                                    <div className="overflow-hidden rounded-xl mb-5 h-60">
                                        <img
                                            src={article.coverImage}
                                            alt={article.title}
                                        />
                                    </div>
                                )
                            }
             
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

                {
                    withLink && (
                        <div className="md:hidden mt-10 text-center">
                            <Link
                                to="/articles"
                                className="inline-flex items-center px-6 py-3 border border-earth-300 rounded-full text-earth-800"
                            >
                                Lihat Semua Article
                            </Link>
                        </div>
                    )
                }
            </div>
        </section>
    )
}