import { Text, View, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { MenuButton } from "../components/MenuButton";
import { styles } from "../styles";

const home = () => {
  return (
    <View className="flex h-full justify-around">
      <View />
      <View className="flex flex-col items-center gap-5">
        <Text className="text-lg">Trykk for å få hjelp</Text>
        <Pressable
          style={styles.shadow}
          className="shadow-{lg} flex aspect-square w-52 flex-col items-center justify-center rounded-full bg-red-400"
        >
          <Ionicons name="notifications-outline" size={50} />
          <Text className="mt-2 text-3xl font-bold">Hjelp</Text>
        </Pressable>
      </View>
      <View className="flex h-1/3 w-full flex-row items-center justify-around p-4">
        <MenuButton variant="connection" isConnected />
        <MenuButton variant="chat" />
      </View>
    </View>
  );
};

export default home;
