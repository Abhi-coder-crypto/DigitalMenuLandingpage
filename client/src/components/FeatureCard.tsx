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
      whileHover={{ y: -6, scale: 1.01 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 25 }}
      className="group relative p-0.5 rounded-[2rem] bg-gradient-to-br from-gray-100 to-transparent hover:from-blue-400 hover:via-green-400 hover:to-yellow-400 transition-all duration-500 shadow-sm hover:shadow-xl max-w-sm mx-auto w-full cursor-pointer"
    >
      <div className="h-full p-6 bg-white rounded-[1.9rem] flex flex-col items-center text-center transition-all duration-500 group-hover:bg-white/95">
        <div className={`relative w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colorClass} group-hover:scale-110 transition-all duration-500 shadow-inner overflow-hidden`}>
          <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <Icon className="w-7 h-7 relative z-10" />
        </div>
        
        <h3 className="text-xl font-bold font-display text-slate-800 mb-3 tracking-tight transition-colors duration-300">
          {title}
        </h3>
        
        <p className="text-gray-500 leading-relaxed text-sm font-medium px-2">
          {description}
        </p>

        <div className="mt-6 opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-1 group-hover:translate-y-0">
          <div className="h-1 w-10 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto" />
        </div>
      </div>
    </motion.div>
  );
}
