import { motion } from 'framer-motion';

export const Profile=  () => {
  return (
    <div className="bg-earth-50 min-h-screen pt-24 pb-12">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-earth-900 mb-4">Tentang Saya</h1>
            <p className="text-xl text-earth-600">Pelayan Suara & Praktisi Wellness</p>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
             <div className="relative">
                <div className="absolute inset-0 border-2 border-earth-300 translate-x-4 translate-y-4 rounded-xl"></div>
                <img 
                  src="https://picsum.photos/seed/profile/800/1000" 
                  alt="Owner Profile" 
                  className="rounded-xl shadow-lg relative z-10 w-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
             </div>
             <div className="space-y-6 text-lg leading-relaxed text-earth-800">
                <h2 className="text-3xl font-serif font-bold text-earth-900">Halo, saya Maya.</h2>
                <p>
                  Perjalanan saya dengan <em>Sound Healing</em> dimulai 5 tahun yang lalu di kaki pegunungan Himalaya. Apa yang bermula sebagai rasa ingin tahu berubah menjadi panggilan jiwa untuk membantu orang lain menemukan kedamaian batin.
                </p>
                <p>
                  Saya percaya bahwa setiap tubuh memiliki frekuensi alaminya sendiri. Ketika stres dan trauma mengganggu aliran ini, <strong>Singing Bowl</strong> bertindak sebagai 'garpu tala' untuk mengembalikan harmoni tersebut.
                </p>
                <div className="pt-6 border-t border-earth-200">
                   <h3 className="font-bold font-serif mb-2">Sertifikasi & Pelatihan</h3>
                   <ul className="list-disc list-inside space-y-2 text-base text-earth-600">
                      <li>Certified Sound Healer (Kathmandu Academy)</li>
                      <li>200H Yoga Teacher Training</li>
                      <li>Reiki Level II Practitioner</li>
                   </ul>
                </div>
             </div>
          </div>
          
          {/* Philosophy Section */}
          <div className="bg-earth-100 p-10 rounded-2xl text-center">
             <h3 className="text-2xl font-serif font-bold mb-4">Filosofi Saya</h3>
             <p className="text-earth-700 italic text-xl">
               "Penyembuhan bukanlah tentang menjadi orang yang berbeda, melainkan tentang melepaskan segala sesuatu yang bukan diri Anda, agar Anda bisa menjadi diri Anda yang seutuhnya."
             </p>
          </div>

        </motion.div>
      </div>
    </div>
  );
};