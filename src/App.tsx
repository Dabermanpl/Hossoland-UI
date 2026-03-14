import { useState, useEffect } from 'react';
import CouponsSection from './components/CouponsSection';
import TopHeader from './components/TopHeader';
import ScanCard from './components/ScanCard';
import ARSection from './components/ARSection';
import HowItWorks from './components/HowItWorks';
import BottomNav from './components/BottomNav';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('scan');
  const [headerAnimate, setHeaderAnimate] = useState(false);

  useEffect(() => {
    // Uruchom animację tylko raz przy startu aplikacji
    const timer = setTimeout(() => setHeaderAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const renderContent = () => {
    switch (activeTab) {
      case 'coupons':
        return <CouponsSection />;
      case 'scan':
        return (
          <>
            <ScanCard />
            <ARSection />
            <HowItWorks />
          </>
        );
      default:
        return (
          <div style={{ padding: '20px', textAlign: 'center', color: '#666' }}>
            Widok w budowie...
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      <TopHeader key="global-header" view={activeTab} animate={headerAnimate} />
      
      <main className="main-content">
        {renderContent()}
      </main>
      
      <BottomNav onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
