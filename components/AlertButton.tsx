import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { writeAlertData } from "../api/alerts";
import { useGetLocation } from "../hooks/useGetLocation";
import { styles } from "../styles";

export const AlertButton = () => {
  const { location, isLoading, getLocation } = useGetLocation();

  useEffect(() => {
    if (location) {
      writeAlertData({
        alertId: "69",
        time: new Date(),
        location: location ?? "unknown",
        message: "Help needed",
      });
    }
  }, [location]);

  return (
    <Pressable
      onPress={() => getLocation()}
      style={styles.shadow}
      className="shadow-{lg} flex aspect-square w-52 flex-col items-center justify-center rounded-full bg-red-400"
    >
      <Ionicons name="notifications-outline" size={50} />
      <Text className="mt-2 text-3xl font-bold">Hjelp</Text>
    </Pressable>
  );
};
