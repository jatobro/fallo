import { Pressable, Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { router } from "expo-router";

import { useGetLocation } from "~/hooks/useGetLocation";
import { styles } from "~/styles";

type MenuButtonProps = {
  variant: "connection" | "chat";
  isConnected?: boolean;
};

export const MenuButton = ({
  variant,
  isConnected = false,
}: MenuButtonProps) => {
  const { getLocation } = useGetLocation();

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
