import { motion } from 'framer-motion'
import { Coffee, Wallet, Trophy, BarChart3 } from 'lucide-react'
import { BentoGrid } from './ui/bento-grid'

const Features = () => {
  const features = [
    {
      title: 'Smart Order',
      description: 'Pre-order your coffee with AI recommendations',
      icon: <Coffee className="text-orange-500" />,
      className: 'md:col-span-1'
    },
    {
      title: 'Crypto Payments',
      description: 'Pay with TON and Stars cryptocurrency',
      icon: <Wallet className="text-emerald-500" />,
      className: 'md:col-span-2'
    },
    {
      title: 'NFT Loyalty',
      description: 'Unique digital bonuses and collectibles',
      icon: <Trophy className="text-purple-500" />,
      className: 'md:col-span-1'
    },
    {
      title: 'Live Analytics',
      description: 'Real-time insights for coffee shop owners',
      icon: <BarChart3 className="text-blue-500" />,
      className: 'md:col-span-1'
    }
  ]

  return (
    <section className="container mx-auto px-4 py-24">
      <h2 className="text-4xl font-bold tracking-tighter text-center mb-12 bg-gradient-to-r from-orange-400 via-amber-500 to-yellow-600 bg-clip-text text-transparent">
        Features
      </h2>
      <BentoGrid features={features} />
    </section>
  )
}

export default Features