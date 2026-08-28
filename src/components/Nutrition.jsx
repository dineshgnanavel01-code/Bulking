import React from 'react';
import { nutritionTips } from "../data/content";

const tipImages = {
  "Caloric Surplus": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=600&auto=format&fit=crop",
  "Protein Intake": "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=600&auto=format&fit=crop",
  "Carb Refueling": "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=600&auto=format&fit=crop",
  "Hydration & Electrolytes": "https://images.unsplash.com/photo-1523362628745-0c100150b504?q=80&w=600&auto=format&fit=crop",
  "Meal Timing": "https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=600&auto=format&fit=crop",
  "Recovery Supplements": "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?q=80&w=600&auto=format&fit=crop",
};

export default function Nutrition() {
  return (
    <section id="nutrition" className="py-20 border-t border-white/5 bg-zinc-900 scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        
        <div className="text-center">
          <h2 className="text-3xl font-black uppercase text-white sm:text-4xl">
            Bulking Nutrition Protocols
          </h2>
          <p className="mt-3 text-zinc-400 max-w-2xl mx-auto">
            Fuel your high-intensity training with optimal macronutrient ratios, timing strategies, and hydration targets.
          </p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {nutritionTips.map((tip) => (
            <div 
              key={tip.title} 
              className="flex flex-col overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition-all duration-300 hover:border-lime-400/40 hover:shadow-xl hover:shadow-lime-400/5">
              <div className="h-52 w-full overflow-hidden relative">
                <img 
                  src={tipImages[tip.title] || "https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&w=600&auto=format&fit=crop"}
                  alt={tip.title}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"/>
              </div>

              <div className="flex flex-1 flex-col p-6 lg:p-8">
                <span className="text-2xl font-black text-lime-400 sm:text-3xl">{tip.stat}</span>
                <h3 className="mt-3 text-xl font-bold text-white">{tip.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-400">{tip.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}