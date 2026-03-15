import React, { useState } from 'react';
import { Map, Ticket, User } from 'lucide-react';
import './BottomNav.css';
import ScanIcon from './ScanIcon';

interface BottomNavProps {
  onTabChange?: (tabId: string) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('scan');

  const handleTabClick = (id: string) => {
    setActiveTab(id);
    if (onTabChange) {
      onTabChange(id);
    }
  };

  const tabs = [
    { id: 'map', icon: Map, label: 'Mapa' },
    { id: 'coupons', icon: Ticket, label: 'Kupony' },
    { id: 'scan', icon: ScanIcon, label: 'Skaner AR' },
    { id: 'profile', icon: User, label: 'Profil' },
  ];

  return (
    <div className="bottom-nav-wrapper">
      <nav className="bottom-nav">
        <div className="nav-container">
          {tabs.map((tab) => (
            <div 
              key={tab.id}
              className={`nav-item ${activeTab === tab.id ? 'active' : ''}`}
              onClick={() => handleTabClick(tab.id)}
            >
              {activeTab === tab.id && <div className="active-line" />}
              <div className="nav-item-pill">
                {tab.id === 'scan' ? (
                  <ScanIcon 
                    size={20} 
                    color={activeTab === 'scan' ? 'var(--color-cyan-primary)' : 'white'} 
                  />
                ) : (
                  // @ts-ignore
                  <tab.icon size={20} color={activeTab === tab.id ? 'var(--color-cyan-primary)' : 'white'} />
                )}
                <span>{tab.label}</span>
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default BottomNav;
