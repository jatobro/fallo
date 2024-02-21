export type User = {
  userId: string;
  name: string;
  email: string;
};

export type Alert = {
  alertId: string;
  time: Date;
  location: Location;
  message: string;
};

type Location = {
  latitude: number;
  longitude: number;
};
