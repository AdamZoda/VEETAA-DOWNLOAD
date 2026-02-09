
import React, { useState, useEffect } from 'react';
import { Download } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        {/* Logo Veetaa */}
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 bg-[#FF4B00] rounded-xl flex items-center justify-center text-white shadow-lg font-black text-2xl">
            V
          </div>
          <span className="text-2xl font-extrabold tracking-tight text-[#1E1E1E]">
            Veetaa
          </span>
        </div>

        {/* CTA - Bouton unique de téléchargement */}
        <div className="flex items-center gap-4">
          <a 
            href="#download" 
            className="bg-[#FF4B00] hover:bg-[#E64400] text-white px-6 py-2.5 rounded-full text-sm font-bold shadow-lg shadow-orange-200 flex items-center gap-2 transition-all transform active:scale-95"
          >
            <Download size={18} />
            <span className="hidden sm:inline">Télécharger l'APK</span>
            <span className="sm:hidden text-xs uppercase font-black">Télécharger</span>
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
