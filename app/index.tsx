import * as Location from "expo-location";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

import { AlertButton } from "../components/AlertButton";
import { MenuButton } from "../components/MenuButton";

const Index = () => {
  const [granted, setGranted] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestBackgroundPermissionsAsync();

      if (status === "granted") {
        console.log("location permission success");
        setGranted(true);
      } else {
        console.error("location permission denied");
      }
    })();
  }, []);

  return (
    <View className="flex h-full justify-around">
      <View />
      <View className="flex flex-col items-center justify-center">
        <Text className="mb-3 text-lg">
          {granted ? "Trykk for å få hjelp" : "TILLAT STEDSTJENESTER"}
        </Text>
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
