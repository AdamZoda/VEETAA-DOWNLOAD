
import React from 'react';
import { Utensils, ShoppingCart, Pill, PackageCheck } from 'lucide-react';

const services = [
  {
    icon: <Utensils className="text-[#FF4B00]" size={32} />,
    title: "Restaurants",
    description: "Vos plats favoris livrés chauds, de la pizza locale au burger gourmet.",
    color: "bg-orange-50"
  },
  {
    icon: <ShoppingCart className="text-green-500" size={32} />,
    title: "Supermarchés",
    description: "Évitez les files d'attente. Vos courses de la semaine livrées à votre porte.",
    color: "bg-green-50"
  },
  {
    icon: <Pill className="text-red-500" size={32} />,
    title: "Pharmacies",
    description: "Santé et bien-être. Vos médicaments et produits de soin en urgence.",
    color: "bg-red-50"
  },
  {
    icon: <PackageCheck className="text-blue-500" size={32} />,
    title: "Livraison Express",
    description: "Documents, clés ou cadeaux. On transporte tout ce qui compte pour vous.",
    color: "bg-blue-50"
  }
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-black text-[#1E1E1E]">Une seule app, <span className="text-[#FF4B00]">tout</span> votre quartier.</h2>
          <p className="text-lg text-gray-600 font-medium">Découvrez une large gamme de services conçus pour vous simplifier la vie avec Veetaa.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="group p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-[#FF4B00] hover:shadow-2xl hover:shadow-orange-100 transition-all duration-500 transform hover:-translate-y-2"
            >
              <div className={`${service.color} w-20 h-20 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500`}>
                {service.icon}
              </div>
              <h3 className="text-2xl font-black mb-4">{service.title}</h3>
              <p className="text-gray-500 leading-relaxed font-medium">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
