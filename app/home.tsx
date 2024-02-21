import { Text, View } from "react-native";

import { AlertButton } from "../components/AlertButton";
import { MenuButton } from "../components/MenuButton";

const home = () => {
  return (
    <View className="flex h-full justify-around">
      <View />
      <View className="flex flex-col items-center justify-center">
        <Text className="mb-3 text-lg">Trykk for å få hjelp</Text>
        <AlertButton />
      </View>
      <View className="flex h-1/3 w-full flex-row items-center justify-around p-4">
        <MenuButton variant="connection" isConnected />
        <MenuButton variant="chat" />
      </View>
    </View>
  );
};

export default home;
