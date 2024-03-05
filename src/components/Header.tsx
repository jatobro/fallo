import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Link } from "expo-router";

export const Header = () => {
  return (
    <View className="flex w-screen flex-row items-end justify-between bg-primary px-4 py-2">
      <Text className="text-2xl font-bold">Fallo</Text>
      <Link href="/settings">
        <Ionicons name="settings-outline" size={30} />
      </Link>
    </View>
  );
};
