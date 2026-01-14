import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string | React.ReactNode;
  description: string;
  colorClass: string; // e.g., "text-blue-500 bg-blue-50"
}

export function FeatureCard({ icon: Icon, title, description, colorClass }: FeatureCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-gray-100 to-transparent hover:from-blue-400 hover:via-green-400 hover:to-yellow-400 transition-all duration-500 shadow-sm hover:shadow-2xl"
    >
      <div className="h-full p-8 bg-white rounded-[2.4rem] flex flex-col items-center text-center transition-all duration-500 group-hover:bg-white/95">
        <div className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-8 ${colorClass} group-hover:scale-110 transition-all duration-500 shadow-inner overflow-hidden`}>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Icon className="w-8 h-8 relative z-10" />
        </div>
        
        <h3 className="text-2xl font-bold font-display text-gray-900 mb-4 tracking-tight group-hover:text-blue-600 transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-500 leading-relaxed text-base font-medium px-4">
          {description}
        </p>

        <div className="mt-8 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-2 group-hover:translate-y-0">
          <div className="h-1 w-12 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto" />
        </div>
      </div>
    </motion.div>
  );
}
