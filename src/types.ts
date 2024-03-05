export type User = {
  userId: string;
  name: string;
  email: string;
  phoneNumber: string;
};

export type Alert = {
  alertId: string;
  user: User | null;
  time: Date;
  coordinates: Coordinates;
  message: string;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};
