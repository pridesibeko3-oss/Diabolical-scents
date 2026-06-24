import { motion } from 'framer-motion'
import LogoSVG from './LogoSVG'

export default function Hero(){
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Faint drifting particles */}
      <div className="absolute inset-0 pointer-events-none">
        <canvas id="particles" className="w-full h-full" />
      </div>

      {/* Hero content */}
      <div className="z-10 text-center px-6">
        <div className="mx-auto w-64 h-64">
          <motion.div initial={{ scale: 0.7, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 1 }}>
            <LogoSVG />
          </motion.div>
        </div>

        <motion.h1 className="mt-8 text-4xl md:text-6xl font-serif tracking-widest text-diagold" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.6 }}>
          Luxury Fragrances Crafted To Tempt.
        </motion.h1>

        <motion.button className="mt-8 px-8 py-3 rounded-full bg-gradient-to-r from-diagold to-yellow-400 text-black font-semibold shadow-lg" whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
          Discover
        </motion.button>
      </div>

      {/* subtle background red highlight */}
      <div className="absolute inset-0 bg-gradient-to-t from-transparent via-black to-black opacity-40 pointer-events-none" />
    </section>
  )
}
