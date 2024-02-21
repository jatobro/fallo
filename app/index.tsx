import * as Location from "expo-location";
import { useEffect } from "react";
import { View, Text } from "react-native";

import { AlertButton } from "../components/AlertButton";
import { MenuButton } from "../components/MenuButton";

const Index = () => {
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestBackgroundPermissionsAsync();

      console.log("status:", status);

      if (status !== "granted") {
        console.error("location permission not granted");
      }
    })();
  }, []);

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

export default Index;