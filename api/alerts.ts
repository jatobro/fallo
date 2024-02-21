import { set, ref } from "firebase/database";

import { db } from "../firebase/config";
import { type Alert } from "../types";

export const writeAlertData = ({ alertId, time, location, message }: Alert) => {
  console.log("attempting to write alert...");
  set(ref(db, "alerts/" + alertId), {
    alertId,
    time,
    location,
    message,
  })
    .then(() => console.log(`Alert with id ${alertId} written to database`))
    .catch((error) =>
      console.error("Error writing alert to database: ", error),
    );
};
