import { Pressable, Text, View } from "react-native";

import { UserForm } from "~/components/UserForm";
import { useUser } from "~/hooks/useUser";

const Page = () => {
  const { user, logout } = useUser();

  return (
    <View className="container h-full items-center py-16">
      {user ? (
        <View className="flex items-center justify-center">
          <Text className="mb-2 text-4xl">{user.name}</Text>
          <Text className="mb-10 text-slate-400">{user.phoneNumber}</Text>
          <Pressable
            className="mt-8 rounded bg-black px-4 py-3"
            onPress={() => logout()}
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
