import { Link } from "expo-router";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Header = () => {
  return (
    <View className="bg-primary flex w-screen flex-row items-end justify-between px-4 py-2">
      <Text className="text-2xl font-bold">Fallo</Text>
      <Link href="/settings">
        <Ionicons name="settings-outline" size={30} />
      </Link>
    </View>
  );
};
