
export type UserRole = 'DONOR' | 'KITCHEN' | 'DISTRIBUTION';

export interface Donation {
  id: string;
  restaurant: string;
  item: string;
  quantity: string;
  expiryTime: Date;
  status: 'PENDING' | 'PICKED_UP' | 'PROCESSING' | 'COMPLETED';
}

export interface NeedPin {
  id: string;
  locationName: string;
  lat: number;
  lng: number;
  urgency: 'LOW' | 'MEDIUM' | 'HIGH';
  peopleCount: number;
}

export interface InventoryItem {
  id: string;
  name: string;
  quantity: number;
  unit: string;
  threshold: number;
}

export interface OrderOfHope {
  id: string;
  destination: string;
  mealsNeeded: number;
  status: 'QUEUED' | 'PREPARING' | 'READY' | 'DELIVERED';
}

export interface Badge {
  id: string;
  name: string;
  icon: string;
  unlocked: boolean;
}
