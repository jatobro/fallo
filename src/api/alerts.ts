import { ref, set } from "firebase/database";
import { db } from "../firebase/config";
import { type Alert } from "../types";

export const writeAlertData = (alert: Alert) => {
  console.log("attempting to write alert...");

  set(ref(db, "alerts/" + alert.alertId), alert)
    .then(() =>
      console.log(`alert '${JSON.stringify(alert)}' written to database`),
    )
    .catch((error) =>
      console.error("Error writing alert to database: ", error),
    );
};
