import { User } from "../types";

export const createAndWriteAlert = (message: string, user: User | null) => {
  const newAlert = {
    alertId: "test-alert-id",
    user,
    time: new Date(),
    coordinates: { longitude, latitude },
    message: "test message",
  };
};
