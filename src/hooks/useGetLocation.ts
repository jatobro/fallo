import { useState } from "react";
import * as Location from "expo-location";

export const useGetLocation = () => {
  const [location, setLocation] = useState<
    Location.LocationObject | undefined
  >();
  const [isLoading, setIsLoading] = useState(false);

  const getLocation = async () => {
    setIsLoading(true);

    console.log("getting current location...");

    Location.getCurrentPositionAsync({})
      .then(setLocation)
      .then(() => console.log("current location gotten successfully"))
      .catch((error) => {
        console.error("error getting current location:", error);
      })
      .finally(() => setIsLoading(false));
  };

  return { isLoading, location, getLocation };
};
