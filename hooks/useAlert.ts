import * as Location from "expo-location";

import { useAuth } from "./useAuth";
import { Alert } from "../types";

export const useAlert = () => {
  const { user } = useAuth();

  const generateAlert = (
    location: Location.LocationObject,
    message: string,
  ) => {
    const { longitude, latitude } = location.coords;

    return {
      alertId: "test-alert-id",
      user,
      time: new Date(),
      coordinates: { longitude, latitude },
      message,
    } as Alert;
  };

  return { generateAlert };
};
