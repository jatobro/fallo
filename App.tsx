import { StatusBar } from "expo-status-bar";
import { Text, View, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { styles } from "./styles";

export default function App() {
  return (
    <View className="flex-1 items-center justify-between bg-[#dff8fd]">
      <View className="flex h-[80px] w-screen flex-row items-end justify-between bg-white px-4 py-2">
        <Text className="text-2xl font-bold">Fallo</Text>
        <Pressable>
          <Ionicons name="settings-outline" size={30} />
        </Pressable>
      </View>
      <View />
      <View className="flex flex-col items-center gap-5">
        <Text className="text-lg">Trykk for å få hjelp</Text>
        <Pressable
          style={styles.shadow}
          className="shadow-{lg} flex aspect-square w-52 flex-col items-center justify-center rounded-full bg-red-400"
        >
          <Ionicons name="notifications-outline" size={50} />
          <Text className="mt-2 text-3xl font-bold">Hjelp</Text>
        </Pressable>
      </View>
      <View className="flex flex-row gap-4">
        <Pressable className="aspect-[3/4] w-1/3 items-center justify-center rounded bg-green-500">
          <Ionicons name="checkbox-outline" size={70} />
          <View className="flex items-center">
            <Text className="font-bold">TryggAlarm</Text>
            <Text className="font-bold">Tilkoblet</Text>
          </View>
        </Pressable>
        <Pressable className="flex aspect-[3/4] w-1/3 items-center justify-center rounded bg-blue-500">
          <Ionicons name="chatbox-outline" size={70} />
          <Text className="text-3xl font-bold">Chat</Text>
        </Pressable>
      </View>

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
      <StatusBar style="auto" />
    </View>
  );
}
