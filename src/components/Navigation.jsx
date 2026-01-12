import { motion } from 'framer-motion'
import { Coffee, Menu } from 'lucide-react'

const Navigation = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 w-full z-50 bg-slate-950/50 backdrop-blur-lg p-4"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Coffee className="text-orange-500" />
          <h1 className="text-xl font-bold tracking-tighter">Coffee Code Crypto</h1>
        </div>
        <div className="hidden md:flex space-x-6">
          <a href="#features" className="hover:text-orange-500 transition">Features</a>
          <a href="#pricing" className="hover:text-orange-500 transition">Pricing</a>
          <a href="#login" className="hover:text-orange-500 transition">Login</a>
        </div>
        <Menu className="md:hidden text-white" />
      </div>
    </motion.nav>
  )
}