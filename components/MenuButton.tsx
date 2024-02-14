import { Pressable, View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { styles } from "../styles";

type MenuButtonProps = {
  label: string;
  icon: string;
};

export const MenuButton = ({ label, icon }: MenuButtonProps) => {
  return (
    <Pressable
      style={styles.shadow}
      className="aspect-[3/4] w-5/12 items-center justify-center rounded-xl border-2 border-slate-100 bg-[#E6FBFF]"
    >
      <Ionicons name={icon} size={70} />
      <View className="flex items-center">
        <Text className="text-xl font-bold">{label}</Text>
      </View>
    </Pressable>
  );
};
