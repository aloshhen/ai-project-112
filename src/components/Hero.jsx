import { motion } from 'framer-motion'
import { ArrowRight, Coffee } from 'lucide-react'
import { BackgroundBeams } from './ui/background-beams'

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <BackgroundBeams />
      <div className="container mx-auto px-4 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-6"
        >
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
            Кофе. Код. Крипто.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Революционная экосистема для технологичных кофеманов
          </p>

          <div className="flex justify-center space-x-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 text-slate-950 px-6 py-3 rounded-full flex items-center space-x-2"
            >
              <span>Get Started</span>
              <ArrowRight size={20} />
            </motion.button>

            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border border-slate-700 text-slate-300 px-6 py-3 rounded-full flex items-center space-x-2"
            >
              <span>Documentation</span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </div>
  )
}

export default Hero