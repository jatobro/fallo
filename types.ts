export type User = {
  userId: string;
  name: string;
  email: string;
};

export type Alert = {
  alertId: string;
  time: Date;
  location: string;
  message: string;
};
