
export enum ListingType {
  SALE = 'sale',
  RENT = 'rent',
}

export interface Car {
  id: number;
  name: string;
  brand: string;
  year: number;
  price: number;
  type: ListingType;
  imageUrl: string;
  mileage: string;
  fuelType: string;
  transmission: string;
}
