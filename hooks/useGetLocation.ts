import * as Location from "expo-location";
import { useState } from "react";

export const useGetLocation = () => {
  const [location, setLocation] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const getLocation = async () => {
    setIsLoading(true);

    Location.getCurrentPositionAsync({})
      .then(JSON.stringify)
      .then(setLocation)
      .then(() => setIsLoading(false))
      .catch((error) =>
        console.error("error getting location of device: ", error),
      );
  };

  return { location, isLoading, getLocation };
};
