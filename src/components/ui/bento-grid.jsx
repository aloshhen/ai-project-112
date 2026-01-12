import { motion } from 'framer-motion'

export const BentoGrid = ({ features }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {features.map((feature, index) => (
        <motion.div 
          key={index}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.2 }}
          whileHover={{ scale: 1.05 }}
          className={`glass-morphism p-6 rounded-xl ${feature.className}`}
        >
          <div className="flex items-center space-x-4 mb-4">
            {feature.icon}
            <h3 className="text-xl font-bold">{feature.title}</h3>
          </div>
          <p className="text-slate-400">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  )
}