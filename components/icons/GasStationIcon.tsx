
import React from 'react';

const GasStationIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.125 15.062a.375.375 0 01.375.375v3.188c0 .207.168.375.375.375h3.75a.375.375 0 01.375-.375v-3.188a.375.375 0 01.375-.375h.375a.375.375 0 01.375.375v7.5a.375.375 0 01-.375.375h-4.5a.375.375 0 01-.375-.375v-7.5a.375.375 0 01.375-.375h.375zM12 3.375a3.375 3.375 0 00-3.375 3.375v1.5c0 1.86 1.516 3.375 3.375 3.375S15.375 10.11 15.375 8.25v-1.5A3.375 3.375 0 0012 3.375z" />
  </svg>
);

export default GasStationIcon;
