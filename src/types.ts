export type User = {
  name: string;
  phoneNumber: string;
};

export type Alert = {
  user: User | null;
  time: Date;
  coordinates: Coordinates;
  message: string;
};

export type Coordinates = {
  latitude: number;
  longitude: number;
};
