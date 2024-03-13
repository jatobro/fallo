import { Pressable, Text, View } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";

import { UserForm } from "~/components/UserForm";
import { userAtom } from "~/atoms";

const Page = () => {
  const [user, setUser] = useAtom(userAtom);

  return (
    <View className="container h-full items-center py-8">
      {user ? (
        <View className="flex items-center justify-center">
          <Text className="mb-2 text-4xl">{user.name}</Text>
          <Text className="mb-10 text-slate-400">{user.phoneNumber}</Text>
          <Pressable
            className="mt-8 rounded bg-black px-4 py-3"
            onPress={() => setUser(RESET)}
          >
            <Text className="text-white">Rediger</Text>
          </Pressable>
        </View>
      ) : (
        <UserForm />
      )}

      <Pressable onPress={() => AsyncStorage.getItem("user").then(console.log)}>
        <Text className="mt-8 text-slate-400">Logg async storage</Text>
      </Pressable>
    </View>
  );
};

export default Page;
