export type User = {
  name: string;
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

export type Messages = {
  _id: number;
  text: string;
  createdAt: Date;
  user: User;
};
