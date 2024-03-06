import { useEffect, useState } from "react";
import { Text, View } from "react-native";

import { AlertButton } from "~/components/AlertButton";
import { MenuButton } from "~/components/MenuButton";
import { requestLocationPermission } from "~/services/location";

const Page = () => {
  const [status, setStatus] = useState("");

  useEffect(() => {
    (async () => {
      const status = await requestLocationPermission();
      setStatus(status);
    })();
  }, []);

  return (
    <View className="flex h-full justify-around">
      <View />
      <View className="flex flex-col items-center justify-center">
        <Text className="mb-3 text-lg">
          {status ? "Trykk for å få hjelp" : "TILLAT STEDSTJENESTER"}
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

export default Page;
