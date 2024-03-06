import { Text, View } from "react-native";
import { useAtomValue } from "jotai";

import { AlertButton } from "~/components/AlertButton";
import { MenuButton } from "~/components/MenuButton";
import { userAtom } from "~/atoms";

const Page = () => {
  const user = useAtomValue(userAtom);

  return (
    <View className="flex h-full justify-around">
      {user ? (
        <Text className=" text-center text-2xl">{`Hei ${user.name}!`}</Text>
      ) : (
        <Text className="text-center text-lg">
          Trykk på profil for å lagre personlig informasjon
        </Text>
      )}

      <View className="flex flex-col items-center justify-center">
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
