import { Text, View, Pressable } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { MenuButton } from "../components/MenuButton";
import { styles } from "../styles";

const Home = () => {
  return (
    <View className="flex h-full justify-around">
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
      <View className="flex h-1/3 w-full flex-row items-center justify-around p-4">
        <MenuButton label="Tilkoblet" icon="checkmark-outline" />
        <MenuButton label="Chat" icon="chatbubbles-outline" />
      </View>
    </View>
  );
};

export default Home;
