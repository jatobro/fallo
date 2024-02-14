import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

export const Footer = () => {
  return (
    <View className="flex h-[60px] w-screen flex-row items-center justify-around bg-white">
      <View className="flex h-full items-center justify-center">
        <Ionicons name="home-outline" size={30} />
        <Text>Hjem</Text>
      </View>
      <View className="flex h-full items-center justify-center">
        <Ionicons name="person-circle-outline" size={30} />
        <Text>Profil</Text>
      </View>
    </View>
  );
};
