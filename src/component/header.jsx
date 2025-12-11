import { Link, useLocation } from "@tanstack/react-router";
import { AnimatePresence, motion } from "framer-motion";
import { Music2, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

export default function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
      const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
      const pathname = useLocation().pathname

      console.log(pathname)
    
      const NAVIGATION_CONFIG = [
        { label: "Beranda", path: "/" },
        { label: "Tentang Saya", path: "/profile" },
        { label: "Workshop", path: "/page/workshop" },
        { label: "Retreat", path: "/page/retreat" },
        { label: "Kontak", path: "/page/contact" },
      ];
    
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
            <nav className="hidden md:flex space-x-8">
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