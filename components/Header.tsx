
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-slate-900/70 backdrop-blur-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 border-b border-slate-800">
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-sky-500">
              سيارتي
            </a>
          </div>
          <nav className="hidden md:flex md:space-s-8">
            <a href="#" className="text-slate-300 hover:text-sky-500 transition-colors">الرئيسية</a>
            <a href="#" className="text-slate-300 hover:text-sky-500 transition-colors">شراء سيارة</a>
            <a href="#" className="text-slate-300 hover:text-sky-500 transition-colors">تأجير سيارة</a>
            <a href="#" className="text-slate-300 hover:text-sky-500 transition-colors">اتصل بنا</a>
          </nav>
          <div>
            <a
              href="#"
              className="px-5 py-2 text-white bg-sky-600 hover:bg-sky-700 rounded-lg shadow-md transition-all duration-300"
            >
              أضف سيارتك
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
