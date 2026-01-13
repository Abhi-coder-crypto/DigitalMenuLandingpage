import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  colorClass: string; // e.g., "text-blue-500 bg-blue-50"
}

export function FeatureCard({ icon: Icon, title, description, colorClass }: FeatureCardProps) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="group p-8 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:border-gray-200 transition-all duration-300 flex flex-col items-center text-center"
    >
      <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${colorClass} group-hover:scale-110 transition-transform duration-300`}>
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold font-display text-gray-900 mb-3 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 leading-relaxed text-sm">
        {description}
      </p>
    </motion.div>
  );
}
