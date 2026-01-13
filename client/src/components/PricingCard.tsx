import { Check, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  color: "green" | "vibrant-green" | "cream";
}

export function PricingCard({ tier }: { tier: PricingTier }) {
  const bgStyles = {
    green: "bg-[#FEF9C3] border-[#FDE047] shadow-sm",
    "vibrant-green": "bg-[#FEF9C3] border-[#FDE047] scale-105 z-10 shadow-xl",
    cream: "bg-[#FEF9C3] border-[#FDE047] shadow-sm",
  };

  const buttonStyles = {
    green: "bg-black hover:bg-gray-800",
    "vibrant-green": "bg-black hover:bg-gray-800",
    cream: "bg-black hover:bg-gray-800",
  };

  return (
    <div className={`
      relative p-10 rounded-[2.5rem] border transition-all duration-300 flex flex-col min-h-[550px]
      ${bgStyles[tier.color]}
    `}>
      {tier.recommended && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 px-5 py-1.5 bg-black text-white text-xs font-bold rounded-full shadow-md flex items-center gap-1">
          <Star className="w-3 h-3 fill-white" />
          Popular
        </div>
      )}

      <div className="text-center mb-8 pt-4">
        <h3 className="text-3xl font-bold text-gray-900 mb-2">{tier.name}</h3>
        <p className="text-gray-600 text-sm mb-8">{tier.description}</p>
        
        <div className="flex flex-col items-center justify-center">
          <span className="text-6xl font-black text-gray-900 flex items-start gap-1">
            <span className="text-4xl mt-2">₹</span>
            {tier.price}
          </span>
          <span className="text-gray-500 font-medium text-sm mt-1">per month</span>
        </div>
      </div>

      <div className="h-px bg-gray-200/50 w-full mb-8" />

      <ul className="space-y-4 mb-10 flex-1 px-2 flex flex-col items-center">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-center gap-3 w-full max-w-[240px]">
            <div className="bg-black p-1 rounded-full">
              <Check className="w-3 h-3 text-white stroke-[4]" />
            </div>
            <span className="text-gray-700 font-bold text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full py-8 rounded-[2rem] font-bold text-white text-lg transition-all active:scale-95 ${buttonStyles[tier.color]}`}
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Start {tier.name}
      </Button>
    </div>
  );
}
