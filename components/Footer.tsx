
import React from 'react';
import { Package, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-100 pt-24 pb-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">

          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-[#FF4B00] rounded-2xl flex items-center justify-center text-white font-black text-2xl">
                V
              </div>
              <span className="text-2xl font-black tracking-tight">Veetaa</span>
            </div>
            <p className="text-gray-500 text-base leading-relaxed max-w-xs font-medium">
              Tout ce que vous voulez, livré vite. La nouvelle référence de la livraison locale dans votre poche.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center hover:bg-[#FF4B00] hover:text-white transition-all text-gray-400 group">
                <Instagram size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center hover:bg-[#FF4B00] hover:text-white transition-all text-gray-400 group">
                <Twitter size={24} className="group-hover:scale-110 transition-transform" />
              </a>
              <a href="#" className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center hover:bg-[#FF4B00] hover:text-white transition-all text-gray-400 group">
                <Facebook size={24} className="group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-lg font-black mb-8">Navigation</h5>
            <ul className="space-y-5 text-base text-gray-500 font-medium">
              <li><a href="#services" className="hover:text-[#FF4B00] transition-colors">Nos Services</a></li>
              <li><a href="#how-it-works" className="hover:text-[#FF4B00] transition-colors">Comment ça marche</a></li>
              <li><a href="#download" className="hover:text-[#FF4B00] transition-colors">Téléchargement APK</a></li>
              <li><a href="#advantages" className="hover:text-[#FF4B00] transition-colors">Vos Avantages</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-black mb-8">Support</h5>
            <ul className="space-y-5 text-base text-gray-500 font-medium">
              <li><a href="#" className="hover:text-[#FF4B00] transition-colors">Contactez-nous</a></li>
              <li><a href="#" className="hover:text-[#FF4B00] transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-[#FF4B00] transition-colors">Devenir Partenaire</a></li>
              <li><a href="#" className="hover:text-[#FF4B00] transition-colors">Espace Admin</a></li>
            </ul>
          </div>

          <div>
            <h5 className="text-lg font-black mb-8">Newsletter</h5>
            <p className="text-gray-500 text-sm mb-6 font-medium">Recevez nos offres exclusives directement.</p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Votre email"
                className="bg-gray-50 border-none px-6 py-4 rounded-2xl focus:ring-2 focus:ring-[#FF4B00] font-medium"
              />
              <button className="bg-[#1E1E1E] text-white font-black py-4 rounded-2xl hover:bg-[#FF4B00] transition-colors">
                S'inscrire
              </button>
            </div>
          </div>

        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-gray-400 text-sm font-medium">
            © 2026 Veetaa App. Tous droits réservés. <span className="hidden md:inline"> | </span>
            <span className="block md:inline">Livré vite, à chaque fois.</span>
          </p>
          <div className="flex items-center gap-8 grayscale opacity-30">
            <img src="https://img.icons8.com/color/48/visa.png" alt="Visa" className="h-8" />
            <img src="https://img.icons8.com/color/48/mastercard.png" alt="Mastercard" className="h-8" />
            <img src="https://img.icons8.com/color/48/google-pay.png" alt="GPay" className="h-8" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
