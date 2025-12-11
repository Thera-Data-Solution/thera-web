import * as React from "react";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { Menu, X, Instagram, Facebook, Mail, Music2 } from "lucide-react";
import Header from "../component/header";

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <TanStackRouterDevtools />
        <Header />
        
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
                {/* {NAVIGATION_CONFIG.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-earth-300 hover:text-white transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))} */}
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
