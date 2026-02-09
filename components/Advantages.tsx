
import React from 'react';
import { Zap, Lock, MapPin, Headset } from 'lucide-react';

const advantages = [
  {
    icon: <Zap className="text-[#FF4B00]" size={28} />,
    title: "Vitesse Éclair",
    text: "Nous livrons en un clin d'œil, où que vous soyez."
  },
  {
    icon: <Lock className="text-[#FF4B00]" size={28} />,
    title: "100% Sécurisé",
    text: "Vos données et transactions sont protégées par Veetaa."
  },
  {
    icon: <MapPin className="text-[#FF4B00]" size={28} />,
    title: "Suivi Live",
    text: "Regardez votre livreur avancer vers vous en direct."
  },
  {
    icon: <Headset className="text-[#FF4B00]" size={28} />,
    title: "Support Veetaa",
    text: "Une question ? Notre équipe est disponible 24h/24."
  }
];

const Advantages: React.FC = () => {
  return (
    <section id="advantages" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8 border-t border-gray-100 pt-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {advantages.map((adv, index) => (
            <div key={index} className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
              <div className="flex-shrink-0 w-16 h-16 bg-orange-50 rounded-[1.5rem] flex items-center justify-center">
                {adv.icon}
              </div>
              <div className="space-y-2">
                <h4 className="text-xl font-black">{adv.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed font-medium">{adv.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Advantages;
