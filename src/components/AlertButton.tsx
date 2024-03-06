import { useEffect } from "react";
import { Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { writeAlertData } from "~/api/alerts";
import { useAuth } from "~/hooks/useAuth";
import { useGetLocation } from "~/hooks/useGetLocation";
import { styles } from "~/styles";

export const AlertButton = () => {
  const { isLoading, location, getLocation } = useGetLocation();
  const { user } = useAuth();

  useEffect(() => {
    if (location) {
      const { latitude, longitude } = location.coords;
      writeAlertData({
        alertId: "test-alert-id",
        user,
        time: new Date(),
        coordinates: { longitude, latitude },
        message: "hjælp",
      });
    }
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
