import React, { useState, useEffect } from 'react';
import { Download, ChevronRight, Signal, Wifi, Battery, Phone, MessageSquare, Camera, Settings } from 'lucide-react';

const Hero: React.FC = () => {
  const [screen, setScreen] = useState<'welcome' | 'home'>('welcome');
  const [showAppPreview, setShowAppPreview] = useState(false);

  // Typewriter Logic
  const words = ["vite.", "veetaa."];
  const [activeWordIdx, setActiveWordIdx] = useState(0);
  const [currentText, setCurrentText] = useState(words[0]);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const targetWord = words[activeWordIdx];
    const typeSpeed = isDeleting ? 100 : 200;
    const holdTime = 3000;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing phase
        if (currentText !== targetWord) {
          setCurrentText(targetWord.substring(0, currentText.length + 1));
        } else {
          // Finished typing: wait 3s then start deleting
          setTimeout(() => setIsDeleting(true), holdTime);
        }
      } else {
        // Deleting phase
        // Only delete down to "V" IF the next word also starts with "V"
        // Otherwise delete everything if needed. But here all words start with V or v.
        if (currentText.length > 1) {
          setCurrentText(currentText.substring(0, currentText.length - 1));
        } else {
          // Finished deleting down to 1 character (V/v), switch to next word index
          setIsDeleting(false);
          setActiveWordIdx((prev) => (prev + 1) % words.length);
        }
      }
    }, typeSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, activeWordIdx]);

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

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black leading-[1] text-[#1E1E1E] tracking-tight min-h-[1.2em]">
              Livré <span className="text-[#FF4B00] inline-block border-r-4 border-[#FF4B00] pr-2 animate-pulse-cursor">
                {currentText}
              </span><br />
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

          {/* Visual: Interactive Phone Mockup */}
          <div className="w-full lg:w-1/2 relative flex justify-center">
            <div className="relative z-10 w-full flex justify-center">
              {/* Phone Container */}
              <div className="card scale-[0.85] md:scale-100 transform transition-transform">
                <div className="btn1"></div>
                <div className="btn2"></div>
                <div className="btn3"></div>
                <div className="btn4"></div>

                {/* Screen Content */}
                <div className="card-int overflow-hidden relative bg-black">

                  {/* WELCOME SCREEN */}
                  <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out z-20 flex flex-col items-center justify-end p-8 text-center ${screen === 'welcome' ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                      }`}
                    style={{
                      backgroundImage: 'url(/welcome-bg.png)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center'
                    }}
                  >
                    <button
                      onClick={() => setScreen('home')}
                      className="w-full bg-[#FF4B00] hover:bg-[#ff6022] text-white py-5 rounded-2xl text-xl font-black uppercase tracking-widest shadow-2xl transition-all active:scale-95 mb-10"
                    >
                      Commencer
                    </button>

                    <div className="absolute bottom-6 text-[10px] text-white/40 font-bold uppercase tracking-widest">
                      v3.1.2 stable
                    </div>
                  </div>

                  {/* HOME SCREEN */}
                  <div
                    className={`absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out z-10 flex flex-col ${screen === 'home' ? 'opacity-100' : 'opacity-0'
                      }`}
                    style={{
                      background: 'linear-gradient(180deg, #8EC5FC 0%, #E0C3FC 100%)' // Soft gradient similar to reference
                    }}
                  >

                    {/* Status Bar */}
                    <div className="w-full flex justify-between items-center px-6 pt-3 pb-2 text-white text-xs font-bold drop-shadow-md">
                      <span>9:41</span>
                      <div className="flex items-center gap-1.5">
                        <Signal size={12} fill="currentColor" />
                        <Wifi size={12} />
                        <Battery size={12} fill="currentColor" />
                      </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 px-4 py-6 flex flex-col justify-between">

                      {/* Widgets */}
                      {/* Mini Map Widget */}
                      <div className="w-full mb-4 bg-white rounded-3xl p-4 shadow-lg border border-white/20 flex flex-col items-center justify-center relative overflow-hidden">
                        <span className="text-gray-800 font-bold text-lg mb-2 z-10">Zone de travail</span>
                        <img
                          src="/MAPS.png"
                          alt="Zone de travail"
                          className="w-full h-auto object-contain z-10"
                        />
                      </div>

                      {/* App Grid */}
                      <div className="mt-auto">
                        {/* Dots */}
                        <div className="flex justify-center mb-6 gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                          <div className="w-1.5 h-1.5 rounded-full bg-white/50"></div>
                        </div>

                        {/* Dock */}
                        <div className="bg-white/10 backdrop-blur-3xl rounded-[2.8rem] p-4 flex justify-between items-end shadow-2xl mx-1 mb-2 border border-white/10">
                          <div className="flex flex-col items-center gap-1.5 group">
                            <div className="w-11 h-11 bg-gradient-to-br from-[#10b981] to-[#059669] rounded-[1.2rem] flex items-center justify-center text-white shadow-lg transition-transform active:scale-90">
                              <Phone size={22} fill="currentColor" />
                            </div>
                            <span className="text-[7px] text-white font-bold drop-shadow-lg tracking-wider opacity-90">Appels</span>
                          </div>

                          <div className="flex flex-col items-center gap-1.5 group">
                            <div className="w-11 h-11 bg-gradient-to-br from-[#3b82f6] to-[#2563eb] rounded-[1.2rem] flex items-center justify-center text-white shadow-lg relative transition-transform active:scale-90">
                              <MessageSquare size={22} fill="currentColor" />
                              <div className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#ff3b30] rounded-full border-[1.5px] border-white/20 flex items-center justify-center text-[9px] font-black shadow-md">2</div>
                            </div>
                            <span className="text-[7px] text-white font-bold drop-shadow-lg tracking-wider opacity-90">Messages</span>
                          </div>

                          <div
                            className="flex flex-col items-center gap-1.5 group cursor-pointer"
                            onClick={() => setShowAppPreview(true)}
                          >
                            <div className="w-14 h-14 bg-white/5 backdrop-blur-md rounded-[1.4rem] flex items-center justify-center shadow-2xl p-0 overflow-hidden transform scale-110 -translate-y-1.5 transition-transform active:scale-100">
                              <img src="/veetaa-app-icon.png" className="w-full h-full object-cover" alt="Veetaa" />
                            </div>
                            <span className="text-[8px] text-white font-black drop-shadow-lg tracking-widest">VEETAA</span>
                          </div>

                          <div className="flex flex-col items-center gap-1.5 group">
                            <div className="w-11 h-11 bg-gradient-to-br from-gray-100 to-gray-300 rounded-[1.2rem] flex items-center justify-center text-gray-800 shadow-lg transition-transform active:scale-90">
                              <Camera size={22} />
                            </div>
                            <span className="text-[7px] text-white font-bold drop-shadow-lg tracking-wider opacity-90">Photo</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* APP PREVIEW OVERLAY */}
                  <div
                    className={`absolute inset-0 w-full h-full bg-black z-50 transition-all duration-500 ease-in-out ${showAppPreview ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-full pointer-events-none'
                      }`}
                    onClick={() => setShowAppPreview(false)}
                  >
                    <img src="/gh.jpg" className="w-full h-full object-cover" alt="App Preview" />
                  </div>
                </div>

                <div className="top">
                  <div className="camera">
                    <div className="int"></div>
                  </div>
                  <div className="speaker"></div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#FF4B00] rounded-full blur-[80px] opacity-20 -z-10"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
