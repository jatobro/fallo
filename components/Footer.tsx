import { Link } from "expo-router";
import { View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
export const Footer = () => {
  return (
    <View className="flex h-[60px] w-screen flex-row items-center justify-around bg-white">
      <Link href="/home">
        <View className="flex h-full items-center justify-center ">
          <Ionicons name="home-outline" size={30} />
          <Text>Hjem</Text>
        </View>
      </Link>
      <Link href="/profile">
        <View className="flex h-full items-center justify-center">
          <Ionicons name="person-circle-outline" size={30} />
          <Text>Profil</Text>
        </View>
      </Link>
    </View>
  );
};
