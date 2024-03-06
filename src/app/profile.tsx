import { Pressable, Text, View } from "react-native";
import { useAtom } from "jotai";

import { UserForm } from "~/components/UserForm";
import { userAtom } from "~/atoms";

const Page = () => {
  const [user, setUser] = useAtom(userAtom);

  return (
    <View className="container h-full items-center justify-center">
      {user ? (
        <View className="flex items-center gap-10">
          <Text>{user.name}</Text>
          <Text>{user.phoneNumber}</Text>
          <Pressable
            className="mt-8 rounded bg-black px-4 py-3"
            onPress={() => setUser(null)}
          >
            <Text className="text-white">Rediger</Text>
          </Pressable>
        </View>
      ) : (
        <UserForm />
      )}
    </View>
  );
};

export default Page;
