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

export type Messages = {
  _id: string;
  text: string;
  createdAt: Date;
  user: User | null;
};
