export type User = {
  userId: string;
  name: string;
  email: string;
};

export type Alert = {
  alertId: string;
  time: Date;
  coordinates: Coordinates;
  message: string;
};

type Coordinates = {
  latitude: number;
  longitude: number;
};
