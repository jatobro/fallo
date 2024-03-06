import { onValue, ref, set } from "firebase/database";

import { db } from "~/firebase/config";
import { type Alert } from "~/types";

export const writeAlertData = (alert: Alert) => {
  console.log("attempting to write alert...");

  const alertId = "test-id";

  set(ref(db, "alerts/" + alertId), alert)
    .then(() =>
      console.log(`alert '${JSON.stringify(alert)}' written to database`),
    )
    .catch((error) =>
      console.error("Error writing alert to database: ", error),
    );
};

export const listenAlerts = () => {
  const alertsRef = ref(db, "alerts");

  onValue(alertsRef, (snapshot) => {
    const data: Record<string, Alert> = snapshot.val();
    console.log("alerts data: ", data);
  });
};
