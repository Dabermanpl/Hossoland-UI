import React from 'react';
import { ChevronRight, Users, Bell, Settings, LifeBuoy, LogOut } from 'lucide-react';
import './SettingsList.css';

interface SettingItemProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  isDestructive?: boolean;
}

const SettingItem: React.FC<SettingItemProps> = ({ icon, title, subtitle, isDestructive }) => {
  return (
    <div className={`settings-item ${isDestructive ? 'destructive' : ''}`}>
      <div className="settings-icon-wrapper">
        {icon}
      </div>
      <div className="settings-content">
        <h4 className="settings-title">{title}</h4>
        <p className="settings-subtitle">{subtitle}</p>
      </div>
      <ChevronRight size={20} className="settings-chevron" />
    </div>
  );
};

const SettingsList: React.FC = () => {
  return (
    <div className="settings-list">
      <div className="settings-group">
        <SettingItem 
          icon={<Users size={20} />} 
          title="Moja Rodzina" 
          subtitle="Ustawienia wzrostu dla filtrów mapy" 
        />
        <SettingItem 
          icon={<Bell size={20} />} 
          title="Powiadomienia i Zgody" 
          subtitle="Zarządzaj RODO i alertami" 
        />
        <SettingItem 
          icon={<Settings size={20} />} 
          title="Ustawienia Konta" 
          subtitle="Język, motyw, dane" 
        />
        <SettingItem 
          icon={<LifeBuoy size={20} />} 
          title="Pomoc" 
          subtitle="FAQ, kontakt, regulaminy" 
        />
      </div>
      
      <div className="settings-group">
        <SettingItem 
          icon={<LogOut size={20} />} 
          title="Wyloguj" 
          subtitle="Do zobaczenia wkrótce!" 
          isDestructive 
        />
      </div>
    </div>
  );
};

export default SettingsList;
