import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { useState } from "react";
import { Menu, X, Instagram, Facebook, Mail, Music2 } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
    <>
      <div className="flex flex-col min-h-screen">
        <TanStackRouterDevtools />
        <header
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            isScrolled
              ? "bg-white/90 backdrop-blur-md shadow-sm py-3"
              : "bg-white/40 py-6"
          }`}
        >
          <div className="container mx-auto px-6 flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-2 group">
              <div className="p-2 bg-earth-600 rounded-full text-white group-hover:bg-earth-800 transition-colors">
                <Music2 size={24} />
              </div>
              <span
                className={`text-2xl font-serif font-bold tracking-wide ${
                  isScrolled ? "text-earth-900" : "text-earth-50"
                }`}
              >
                Thera
                <span className={!isScrolled ? "text-white" : "text-slate-900"}>
                  vickya
                </span>
              </span>
            </Link>
            <nav className="hidden md:flex space-x-8">
              {NAVIGATION_CONFIG.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `text-sm uppercase tracking-widest font-medium transition-colors hover:text-earth-600 ${
                      isActive
                        ? "text-earth-600 border-b-2 border-earth-600"
                        : "text-earth-800"
                    }`
                  }
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
        
        <main className="flex-grow">
          <Outlet />
        </main>
        <footer className="bg-earth-900 text-earth-100 py-16">
          <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
            <div>
              <span className="text-2xl font-serif font-bold tracking-wide block mb-4">
                Suara<span className="text-earth-300">Jiwa</span>
              </span>
              <p className="text-earth-200 leading-relaxed max-w-sm">
                Menyelaraskan tubuh dan pikiran melalui getaran harmonis singing
                bowl. Temukan ketenangan di tengah hiruk pikuk kehidupan.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-serif font-semibold mb-6 text-earth-50">
                Tautan Cepat
              </h4>
              <ul className="space-y-3">
                {NAVIGATION_CONFIG.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-earth-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-serif font-semibold mb-6 text-earth-50">
                Kontak & Sosial
              </h4>
              <div className="flex space-x-4 mb-6">
                <a
                  href="#"
                  className="p-2 bg-earth-800 rounded-full hover:bg-earth-600 transition-colors"
                >
                  <Instagram size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-earth-800 rounded-full hover:bg-earth-600 transition-colors"
                >
                  <Facebook size={20} />
                </a>
                <a
                  href="#"
                  className="p-2 bg-earth-800 rounded-full hover:bg-earth-600 transition-colors"
                >
                  <Mail size={20} />
                </a>
              </div>
              <p className="text-earth-300">Jakarta Selatan, Indonesia</p>
              <p className="text-earth-300">hello@suarajiwa.com</p>
            </div>
          </div>
          <div className="container mx-auto px-6 mt-12 pt-8 border-t border-earth-800 text-center text-sm text-earth-400">
            © {new Date().getFullYear()} Suara Jiwa. All rights reserved.
          </div>
        </footer>
      </div>
    </>
  );
}
