
import React, { useEffect } from 'react';

import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import DownloadSection from './components/DownloadSection';
import Advantages from './components/Advantages';


const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">

      <main className="flex-grow">
        <Hero />
        <Services />
        <HowItWorks />
        <DownloadSection />
        <Advantages />
      </main>

    </div>
  );
};

export default App;
