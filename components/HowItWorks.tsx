
import React from 'react';
import { Smartphone, Pointer, Bike, Home } from 'lucide-react';

const steps = [
  {
    icon: <Smartphone size={32} />,
    title: "Téléchargez Veetaa",
    text: "Installez notre APK officiel pour Android et créez votre profil en 1 minute."
  },
  {
    icon: <Pointer size={32} />,
    title: "Choisissez",
    text: "Naviguez entre les restaurants, magasins et pharmacies proches de vous."
  },
  {
    icon: <Bike size={32} />,
    title: "On récupère",
    text: "Un partenaire Veetaa récupère vos articles instantanément."
  },
  {
    icon: <Home size={32} />,
    title: "C'est livré !",
    text: "Suivez votre livreur en temps réel sur la carte jusqu'à votre porte."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="py-24 bg-[#F9F9F9]">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-6">Simple comme bonjour.</h2>
          <div className="w-32 h-2 bg-[#FF4B00] mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          <div className="hidden lg:block absolute top-16 left-32 right-32 h-1 bg-gray-200 -z-0"></div>

          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center relative z-10 group">
              <div className="w-28 h-28 bg-white rounded-[2.5rem] flex items-center justify-center text-[#FF4B00] shadow-xl mb-8 group-hover:bg-[#FF4B00] group-hover:text-white transition-all duration-500 transform group-hover:scale-110">
                {step.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{step.title}</h3>
              <p className="text-gray-500 font-medium max-w-[250px]">
                {step.text}
              </p>
              
              <div className="absolute -top-4 -right-2 w-10 h-10 bg-[#1E1E1E] text-white rounded-full flex items-center justify-center text-sm font-black border-4 border-[#F9F9F9]">
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
