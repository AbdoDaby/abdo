
import React from 'react';

interface HeroProps {
  searchTerm: string;
  onSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Hero: React.FC<HeroProps> = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative h-[60vh] bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080')" }}>
      <div className="absolute inset-0 bg-black/60"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
          سيارة أحلامك بانتظارك
        </h1>
        <p className="text-lg md:text-xl text-slate-300 mb-8 max-w-2xl">
          تصفح أضخم مجموعة من السيارات الجديدة والمستعملة للبيع والإيجار في مكان واحد.
        </p>
        <div className="w-full max-w-lg">
          <div className="relative">
            <input
              type="text"
              placeholder="ابحث عن سيارة (مثال: تويوتا كامري)..."
              value={searchTerm}
              onChange={onSearchChange}
              className="w-full py-3 px-5 text-slate-900 rounded-full bg-white/90 focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
            />
            <div className="absolute top-1/2 -translate-y-1/2 left-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
