import uuid from "react-native-uuid";
import * as Location from "expo-location";
import { onValue, ref, set } from "firebase/database";

import { db } from "~/firebase/config";
import { User, type Alert } from "~/types";

export const writeAlertData = (
  user: User | null,
  location?: Location.LocationObject,
) => {
  if (location) {
    console.log("attempting to write alert...");

    const { latitude, longitude } = location.coords;

    const alert: Alert = {
      user,
      time: new Date(),
      coordinates: { longitude, latitude },
      message: "hjælp",
    };

    const alertId = uuid.v4();

    set(ref(db, "alerts/" + alertId), alert)
      .then(() =>
        console.log(`alert '${JSON.stringify(alert)}' written to database`),
      )
      .catch((error) =>
        console.error("Error writing alert to database: ", error),
      );
  }
};

export const listenButtonClick = (user: User | null) => {
  const fallRef = ref(db, "fall");

  let init = true;

  onValue(fallRef, async (_) => {
    console.log("fall detected, writing alert...");

    const location = await Location.getCurrentPositionAsync({});

    if (init) {
      init = false;
      return;
    }

    writeAlertData(user, location);
  });
};
