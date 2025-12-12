import { useQuery } from "@tanstack/react-query";
import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Music2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { getArticles } from "../service/article";
import { useMemo } from "react";
import { useTranslation } from "../lib/i18n";

export default function Header() {
  const { t, locale, setLocale } = useTranslation("landing-layout");
  const { data: pages } = useQuery({
    queryKey: ["pages"],
    queryFn: () => getArticles({ pageSize: 100, type: "PAGE" }),
  });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NAVIGATION_CONFIG = useMemo(() => {
    const dynamicPages =
      pages?.data?.map((p) => ({
        label: p.title,
        path: `/article/${p.id}`,
      })) ?? [];
    console.log(pages?.data);
    return [
      { label: t("beranda", "Beranda"), path: "/" },
      ...dynamicPages,
      { label: t("kontak", "Kontak"), path: "/page/contact" },
    ];
  }, [pages, t]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-earth-900/90 backdrop-blur-md shadow-sm py-3"
            : "bg-earth-900/40 py-6"
        }`}
      >
        <div className="container mx-auto px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="p-2 bg-earth-600 rounded-full text-white group-hover:bg-earth-800 transition-colors">
              <Music2 size={24} />
            </div>
            <span
              className={`text-2xl font-serif font-bold tracking-wide ${
                isScrolled ? "text-earth-50" : "text-earth-900"
              }`}
            >
              Theravickya
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8 items-center">
            {NAVIGATION_CONFIG.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`text-sm uppercase tracking-widest font-medium transition-colors hover:text-earth-600 ${
                  isScrolled ? "text-earth-50" : "text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="flex items-center space-x-2 ml-4">
              <button
                className={`px-2 py-1 rounded-md text-xs font-semibold ${
                  locale === "id"
                    ? "bg-earth-600 text-white"
                    : isScrolled ? "text-earth-50" : "text-gray-900"
                }`}
                onClick={() => setLocale("id")}
              >
                ID
              </button>
              <button
                className={`px-2 py-1 rounded-md text-xs font-semibold ${
                  locale === "en"
                    ? "bg-earth-600 text-white"
                    : isScrolled ? "text-earth-50" : "text-gray-900"
                }`}
                onClick={() => setLocale("en")}
              >
                EN
              </button>
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-earth-800"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-earth-50 pt-24 px-6 md:hidden"
          >
            <nav className="flex flex-col space-y-6 text-center">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <button
                  className={`px-3 py-1 rounded-md text-sm font-semibold ${
                    locale === "id" ? "bg-earth-600 text-white" : "text-earth-900"
                  }`}
                  onClick={() => setLocale("id")}
                >
                  ID
                </button>
                <button
                  className={`px-3 py-1 rounded-md text-sm font-semibold ${
                    locale === "en" ? "bg-earth-600 text-white" : "text-earth-900"
                  }`}
                  onClick={() => setLocale("en")}
                >
                  EN
                </button>
              </div>
              {NAVIGATION_CONFIG.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-xl font-serif font-medium ${
                      isActive ? "text-earth-600" : "text-earth-900"
                    }`
                  }
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
