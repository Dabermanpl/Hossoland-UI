import { useState, useEffect } from 'react';
import CouponsSection from './components/CouponsSection';
import TopHeader from './components/TopHeader';
import ScanCard from './components/ScanCard';
import ARSection from './components/ARSection';
import HowItWorks from './components/HowItWorks';
import BottomNav from './components/BottomNav';
import TicketsSection from './components/TicketsSection';
import PaymentSuccessSection from './components/PaymentSuccessSection';
import ProfileSection from './components/ProfileSection';
import MapSection from './components/MapSection';
import './index.css';

function App() {
  const [activeTab, setActiveTab] = useState('scan');
  const [headerAnimate, setHeaderAnimate] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  useEffect(() => {
    // Check for "payment success" simulation via URL param or similar
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
      setShowSuccess(true);
      setActiveTab('tickets');
      // Clean up URL
      window.history.replaceState({}, '', window.location.pathname);
    }

    const timer = setTimeout(() => setHeaderAnimate(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleCheckout = (cart: any) => {
    const params = new URLSearchParams();
    params.set('t_norm', cart.normal.toString());
    params.set('t_ulg', cart.reduced.toString());
    params.set('t_child', cart.child.toString());
    params.set('t_park', cart.parking.toString());
    
    const checkoutUrl = `https://hossoland.pl/mobile-checkout?${params.toString()}`;
    console.log('Redirecting to checkout:', checkoutUrl);
    
    // Simulate web checkout redirect and return
    alert(`Przekierowanie do: ${checkoutUrl}\n\n(Symulacja: Po płatności wrócisz tutaj)`);
    
    // After 2 seconds, simulate returning with success
    setTimeout(() => {
      setShowSuccess(true);
    }, 2000);
  };

  const renderContent = () => {
    if (showSuccess) {
      return <PaymentSuccessSection onBackToMap={() => {
        setShowSuccess(false);
        setActiveTab('map');
      }} />;
    }

    switch (activeTab) {
      case 'profile':
        return <ProfileSection onBuyTickets={() => setActiveTab('tickets')} />;
      case 'tickets':
        return <TicketsSection onCheckout={handleCheckout} />;
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
      case 'map':
        return <MapSection />;
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
      {activeTab !== 'profile' && activeTab !== 'map' && (
        <TopHeader key="global-header" view={activeTab} animate={headerAnimate} />
      )}
      
      <main className={`main-content ${activeTab === 'map' ? 'full-screen' : ''}`}>
        {renderContent()}
      </main>
      
      <BottomNav onTabChange={setActiveTab} />
    </div>
  );
}

export default App;
