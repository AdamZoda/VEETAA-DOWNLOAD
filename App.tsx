
import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import DownloadSection from './components/DownloadSection';
import Advantages from './components/Advantages';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <Services />
        <HowItWorks />
        <DownloadSection />
        <Advantages />
      </main>
      <Footer />
    </div>
  );
};

export default App;
