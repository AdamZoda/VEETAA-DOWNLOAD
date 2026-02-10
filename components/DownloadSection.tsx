
import React from 'react';
import { Download, ShieldCheck, QrCode, Smartphone } from 'lucide-react';

const DownloadSection: React.FC = () => {
  return (
    <section id="download" className="py-24 overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="bg-[#1E1E1E] rounded-[4rem] p-10 md:p-20 text-white relative flex flex-col lg:flex-row items-center gap-16 overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.4)]">

          <div className="absolute top-0 right-0 w-full h-full veetaa-gradient opacity-10 -z-0"></div>

          <div className="w-full lg:w-3/5 space-y-10 relative z-10 text-center lg:text-left">
            <h2 className="text-5xl md:text-7xl font-black leading-tight">
              Installez <span className="text-[#FF4B00]">Veetaa</span> <br />
              sur Android.
            </h2>

            <p className="text-xl text-gray-400 max-w-xl mx-auto lg:mx-0 font-medium">
              Téléchargez l'APK officiel et sécurisé pour commencer à commander tout ce dont vous avez besoin dès aujourd'hui.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-8">
              <a
                href="/veetaa.apk"
                download
                className="group w-full sm:w-auto bg-[#FF4B00] hover:bg-[#E64400] text-white px-12 py-6 rounded-3xl text-2xl font-black flex items-center justify-center gap-4 transition-all transform hover:scale-105 active:scale-95 shadow-2xl shadow-orange-900/50"
              >
                <Download size={32} />
                Télécharger l'APK
              </a>

              <div className="flex items-center gap-4 px-8 py-5 bg-white/5 rounded-[2rem] border border-white/10">
                <ShieldCheck className="text-green-400" size={32} />
                <div className="text-left">
                  <p className="text-lg font-black">Certifié Veetaa</p>
                  <p className="text-sm text-gray-400 font-medium">Sûr • Vérifié • Officiel</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-center lg:justify-start gap-8 text-gray-500 pt-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-sm font-bold tracking-widest uppercase">Android Compatible</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span className="text-sm font-bold tracking-widest uppercase">v1.1 stable</span>
              </div>
            </div>
          </div>

          <div className="w-full lg:w-2/5 flex flex-col items-center justify-center gap-10 relative z-10">
            <div className="bg-white p-8 rounded-[3rem] shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="w-56 h-56 bg-gray-50 rounded-2xl flex items-center justify-center relative overflow-hidden group">
                <QrCode size={160} className="text-[#1E1E1E] group-hover:scale-110 transition-transform" />
                <div className="absolute inset-0 bg-white/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-sm text-[#1E1E1E] font-black text-center px-6">Scanner pour installer</p>
                </div>
              </div>
              <p className="text-[#1E1E1E] text-center mt-6 text-lg font-black uppercase tracking-widest">VEETAA SCAN</p>
            </div>

            <div className="flex items-center gap-3 text-white/50 font-medium">
              <Smartphone size={20} />
              <span>Optimisé pour tous les smartphones Android</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
