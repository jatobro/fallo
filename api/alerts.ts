import { set, ref } from "firebase/database";

import { db } from "../firebase/config";
import { type Alert } from "../types";

export const writeAlertData = (alert: Alert) => {
  console.log("attempting to write alert...");

  const { alertId, time, location, message } = alert;

  set(ref(db, "alerts/" + alertId), {
    alertId,
    time,
    location,
    message,
  })
    .then(() => console.log(`alert with id '${alertId}' written to database`))
    .catch((error) =>
      console.error("Error writing alert to database: ", error),
    );
};
