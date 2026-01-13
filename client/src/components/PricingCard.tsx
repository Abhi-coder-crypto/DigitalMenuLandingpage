import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  recommended?: boolean;
  color: "blue" | "green" | "yellow" | "red";
}

export function PricingCard({ tier }: { tier: PricingTier }) {
  const colorStyles = {
    blue: "bg-blue-600 hover:bg-blue-700 shadow-blue-200",
    green: "bg-green-600 hover:bg-green-700 shadow-green-200",
    yellow: "bg-yellow-500 hover:bg-yellow-600 shadow-yellow-200",
    red: "bg-red-500 hover:bg-red-600 shadow-red-200",
  };

  const accentColor = {
    blue: "text-blue-600 bg-blue-50",
    green: "text-green-600 bg-green-50",
    yellow: "text-yellow-600 bg-yellow-50",
    red: "text-red-600 bg-red-50",
  };

  return (
    <div className={`
      relative p-8 rounded-3xl bg-white border transition-all duration-300 flex flex-col
      ${tier.recommended 
        ? "border-blue-200 shadow-xl scale-105 z-10" 
        : "border-gray-100 shadow-lg hover:shadow-xl hover:-translate-y-1"
      }
    `}>
      {tier.recommended && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-600 to-blue-500 text-white text-sm font-bold rounded-full shadow-md">
          Most Popular
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-500 uppercase tracking-wider mb-2">{tier.name}</h3>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold font-display text-gray-900">{tier.price}</span>
          <span className="text-gray-500 font-medium">/month</span>
        </div>
        <p className="mt-4 text-gray-600 text-sm leading-relaxed">{tier.description}</p>
      </div>

      <ul className="space-y-4 mb-8 flex-1">
        {tier.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3">
            <div className={`mt-0.5 p-1 rounded-full ${accentColor[tier.color]}`}>
              <Check className="w-3 h-3 stroke-[3]" />
            </div>
            <span className="text-gray-700 font-medium text-sm">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={`w-full py-6 rounded-xl font-bold text-white shadow-lg transition-all hover:scale-[1.02] ${colorStyles[tier.color]}`}
        onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
      >
        Choose {tier.name}
      </Button>
    </div>
  );
}
