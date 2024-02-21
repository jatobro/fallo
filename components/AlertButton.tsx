import { Pressable, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { writeAlertData } from "../api/alerts";
import { styles } from "../styles";

export const AlertButton = () => {
  return (
    <Pressable
      onPress={() =>
        /*writeAlertData(
          {
          alertId: "1",
          time: new Date(),
          location: "Oslo",
          message: "Hjelp",
        })*/ console.log("alert button pressed")
      }
      style={styles.shadow}
      className="shadow-{lg} flex aspect-square w-52 flex-col items-center justify-center rounded-full bg-red-400"
    >
      <Ionicons name="notifications-outline" size={50} />
      <Text className="mt-2 text-3xl font-bold">Hjelp</Text>
    </Pressable>
  );
};
