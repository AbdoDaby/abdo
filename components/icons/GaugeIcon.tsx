
import React from 'react';

const GaugeIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" {...props}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.393v1.659M16.157 8.843l-1.173 1.173M7.843 8.843l1.173 1.173M12 21a9 9 0 100-18 9 9 0 000 18z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.693l-4.243 4.243" />
  </svg>
);

export default GaugeIcon;
