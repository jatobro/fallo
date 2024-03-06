import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LocationObject } from "expo-location";
import { useAtomValue } from "jotai";

import { writeAlertData } from "~/api/alerts";
import { userAtom } from "~/atoms";
import { useGetLocation } from "~/hooks/useGetLocation";
import { styles } from "~/styles";

export const AlertButton = () => {
  const { isLoading, location, getLocation } = useGetLocation();
  const user = useAtomValue(userAtom);

  const createAndWriteAlert = (location?: LocationObject) => {
    if (location) {
      const { latitude, longitude } = location.coords;
      writeAlertData({
        user,
        time: new Date(),
        coordinates: { longitude, latitude },
        message: "hjælp",
      });
    }
  };

  useEffect(() => {
    createAndWriteAlert(location);
  }, [location]);

  return (
    <Pressable
      disabled={isLoading}
      onPress={() => getLocation()}
      style={styles.shadow}
      className="shadow-{lg} flex aspect-square w-52 flex-col items-center justify-center rounded-full bg-red-400 disabled:opacity-50"
    >
      <Ionicons name="notifications-outline" size={50} />
      <Text className="mt-2 text-3xl font-bold">
        {isLoading ? "Henter lokasjon..." : "Hjelp"}
      </Text>
    </Pressable>
  );
};
