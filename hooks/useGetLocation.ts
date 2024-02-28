import * as Location from "expo-location";
import { useState } from "react";

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
      .then(() => setIsLoading(false))
      .catch((error) => {
        console.error("error getting current location:", error);
        setIsLoading(false);
      });
  };

  return { isLoading, location, getLocation };
};
