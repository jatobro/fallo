import * as Location from "expo-location";
import { useState } from "react";

export const useGetLocation = () => {
  const [location, setLocation] = useState<
    Location.LocationObject | undefined
  >();
  const [isLoading, setIsLoading] = useState(false);

  const getLocation = async () => {
    setIsLoading(true);

    Location.getCurrentPositionAsync({})
      .then(setLocation)
      .then(() => setIsLoading(false));
  };

  return { location, isLoading, getLocation };
};
