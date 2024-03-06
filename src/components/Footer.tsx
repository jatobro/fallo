import { Text, View } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Link } from "expo-router";

export const Footer = () => {
  return (
    <View className="flex h-[60px] w-screen flex-row items-center justify-around bg-white">
      <Link href="/" className="rounded p-2 active:bg-slate-300">
        <View className="flex h-full items-center justify-center ">
          <Ionicons name="home-outline" size={30} />
          <Text>Hjem</Text>
        </View>
      </Link>

      <Link href="/profile" className="rounded p-2 active:bg-slate-300">
        <View className="flex h-full items-center justify-center">
          <Ionicons name="person-circle-outline" size={30} />
          <Text>Profil</Text>
        </View>
      </Link>
    </View>
  );
};
