import { useEffect } from "react";
import { Pressable, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Link, router } from "expo-router";

import { useAlert } from "../hooks/useAlert";
import { useGetLocation } from "../hooks/useGetLocation";
import { sendSMS } from "../services/sms";
import { styles } from "../styles";

type MenuButtonProps = {
  variant: "connection" | "chat";
  isConnected?: boolean;
};

export const MenuButton = ({
  variant,
  isConnected = false,
}: MenuButtonProps) => {
  const { location, getLocation } = useGetLocation();
  const { generateAlert } = useAlert();

  useEffect(() => {
    (async () => {
      if (location) {
        const alert = generateAlert(location, "Chat with me!");
        await sendSMS(alert);
      }
    })();
  }, [location]);

  const handlePress = () => {
    if (variant === "chat") {
      router.navigate("/chat");
    }
  };

  return (
    <Pressable
      //onPress={() => getLocation()}
      onPress={() => {
        if (variant === "chat") {
          handlePress();
        } else {
          getLocation(); // Otherwise, get location
        }
      }}
      style={styles.shadow}
      className="aspect-[3/4] w-5/12 items-center justify-center rounded-xl border-2 border-slate-100 bg-[#E6FBFF]"
    >
      <Ionicons
        name={
          variant === "connection"
            ? isConnected
              ? "checkmark-circle-outline"
              : "close-circle-outline"
            : "chatbubbles-outline"
        }
        size={70}
      />
      <View className="flex items-center">
        <Text className="text-xl font-bold">
          {variant === "connection"
            ? isConnected
              ? "Tilkoblet"
              : "Frakoblet"
            : "Chat"}
        </Text>
      </View>
    </Pressable>
  );
};
