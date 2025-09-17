import React from 'react';
import type { Car } from '../types';
import { ListingType } from '../types';
import GaugeIcon from './icons/GaugeIcon';
import GasStationIcon from './icons/GasStationIcon';
import TransmissionIcon from './icons/TransmissionIcon';

interface CarCardProps {
  car: Car;
}

const CarCard: React.FC<CarCardProps> = ({ car }) => {
  const priceLabel = car.type === ListingType.SALE ? 'جنيه' : 'جنيه / يوم';

  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-sky-500/20 transition-all duration-300 transform hover:-translate-y-1 flex flex-col">
      <div className="relative">
        <img className="w-full h-56 object-cover" src={car.imageUrl} alt={car.name} />
        <span className={`absolute top-2 left-2 px-3 py-1 text-sm font-bold text-white rounded-full ${car.type === ListingType.SALE ? 'bg-green-600' : 'bg-blue-600'}`}>
          {car.type === ListingType.SALE ? 'للبيع' : 'للإيجار'}
        </span>
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white truncate">{car.name}</h3>
        <p className="text-sm text-slate-400 mb-3">{car.year}</p>
        <div className="my-4 grid grid-cols-3 gap-2 text-center">
          <div className="flex flex-col items-center p-2 bg-slate-700/50 rounded-md">
            <GaugeIcon className="h-6 w-6 text-sky-400 mb-1" />
            <span className="text-xs text-slate-300">{car.mileage}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-slate-700/50 rounded-md">
            <GasStationIcon className="h-6 w-6 text-sky-400 mb-1" />
            <span className="text-xs text-slate-300">{car.fuelType}</span>
          </div>
          <div className="flex flex-col items-center p-2 bg-slate-700/50 rounded-md">
            <TransmissionIcon className="h-6 w-6 text-sky-400 mb-1" />
            <span className="text-xs text-slate-300">{car.transmission}</span>
          </div>
        </div>
        <div className="mt-auto">
          <div className="flex justify-between items-center">
            <p className="text-2xl font-bold text-sky-500">
              {car.price.toLocaleString()}
              <span className="text-sm text-slate-400 ms-1">{priceLabel}</span>
            </p>
            <button className="px-4 py-2 bg-slate-700 hover:bg-sky-600 text-white rounded-lg transition-colors">
              تفاصيل
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;