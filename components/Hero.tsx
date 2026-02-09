
import React from 'react';
import { Download, ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-2/3 h-full soft-orange-bg -z-10 rounded-l-[100px] hidden lg:block"></div>
      
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
          
          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-8 text-center lg:text-left">
            <div className="inline-block px-4 py-1.5 bg-orange-100 text-[#FF4B00] rounded-full text-sm font-bold">
              ✨ Nouveau : Livraison en 20min
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1] text-[#1E1E1E] tracking-tight">
              Livré <span className="text-[#FF4B00]">vite.</span><br />
              Tout ce que vous <span className="text-[#FF4B00]">voulez.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
              Repas, courses, pharmacies... Tout ce dont vous avez besoin, livré chez vous en un temps record avec Veetaa.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4">
              <a 
                href="/veetaa.apk" 
                download
                className="w-full sm:w-auto bg-[#FF4B00] hover:bg-[#E64400] text-white px-10 py-5 rounded-2xl text-xl font-bold shadow-2xl shadow-orange-200 flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1"
              >
                <Download size={24} />
                Télécharger l'APK
              </a>
              <button 
                className="w-full sm:w-auto bg-white border-2 border-gray-100 hover:border-[#FF4B00] px-10 py-5 rounded-2xl text-xl font-bold flex items-center justify-center gap-2 transition-all hover:text-[#FF4B00]"
              >
                Découvrir
                <ChevronRight size={24} />
              </button>
            </div>
          </div>

          {/* Visual: Replicating the splash screen look inside a phone mockup */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative z-10 w-full max-w-[320px] md:max-w-[380px]">
              {/* Phone Mockup */}
              <div className="bg-[#1E1E1E] p-3 rounded-[3.5rem] shadow-[0_50px_100px_-20px_rgba(255,75,0,0.3)] border-[8px] border-gray-800">
                {/* The "Veetaa" Splash Screen */}
                <div className="veetaa-gradient overflow-hidden rounded-[2.8rem] aspect-[9/19] flex flex-col items-center justify-center text-center p-8 space-y-6 relative">
                  
                  {/* Veetaa Logo Symbol */}
                  <div className="w-32 h-32 bg-white rounded-[2.5rem] flex items-center justify-center shadow-2xl transform -rotate-6">
                    <span className="text-7xl font-black text-[#FF4B00]">V</span>
                  </div>

                  <div className="space-y-2">
                    <h2 className="text-5xl font-black text-white tracking-tight">Veetaa</h2>
                    <p className="text-white/90 text-sm font-medium leading-tight">
                      Tout ce que vous voulez, livré vite.
                    </p>
                  </div>

                  {/* Commencer Button */}
                  <div className="w-full pt-8">
                    <div className="bg-white text-[#FF4B00] py-4 rounded-full text-lg font-black uppercase tracking-wider shadow-xl">
                      Commencer
                    </div>
                  </div>

                  {/* Dots */}
                  <div className="absolute bottom-10 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                    <div className="w-5 h-2 rounded-full bg-white"></div>
                    <div className="w-2 h-2 rounded-full bg-white/40"></div>
                  </div>
                </div>
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF4B00] rounded-full blur-[80px] opacity-20 -z-10"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
