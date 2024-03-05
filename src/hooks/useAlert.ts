import * as Location from "expo-location";

import { Alert } from "../types";
import { useAuth } from "./useAuth";

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
