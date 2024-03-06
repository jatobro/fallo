import { useState } from "react";

import { writeAlertData } from "~/api/alerts";
import { Alert, Coordinates } from "~/types";
import { useAuth } from "./useAuth";

export const useAlert = () => {
  const { user } = useAuth();

  const [alert, setAlert] = useState<Alert>();

  const createAlert = (coordinates: Coordinates, message: string) => {
    setAlert({
      alertId: "test-alert-id",
      user,
      time: new Date(),
      coordinates,
      message,
    });
  };

  const writeAlert = () => {
    if (alert) {
      writeAlertData(alert);
    }
  };

  return { alert, createAlert, writeAlert };
};
