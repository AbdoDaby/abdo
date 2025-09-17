
import React from 'react';
import { ListingType } from '../types';

interface TabsProps {
  activeTab: ListingType;
  onTabChange: (type: ListingType) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, onTabChange }) => {
  const baseClasses = "px-6 py-3 text-lg font-bold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 focus:ring-sky-500";
  const activeClasses = "bg-sky-600 text-white shadow-lg";
  const inactiveClasses = "bg-slate-800 text-slate-300 hover:bg-slate-700";

  return (
    <div className="flex justify-center space-s-4 bg-slate-800/50 p-2 rounded-xl max-w-sm mx-auto">
      <button
        onClick={() => onTabChange(ListingType.SALE)}
        className={`${baseClasses} ${activeTab === ListingType.SALE ? activeClasses : inactiveClasses}`}
      >
        للبيع
      </button>
      <button
        onClick={() => onTabChange(ListingType.RENT)}
        className={`${baseClasses} ${activeTab === ListingType.RENT ? activeClasses : inactiveClasses}`}
      >
        للإيجار
      </button>
    </div>
  );
};

export default Tabs;
