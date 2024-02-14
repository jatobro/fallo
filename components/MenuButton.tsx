import { Pressable, View, Text } from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

type MenuButtonProps = {
  label: string;
  icon: string;
};

export const MenuButton = ({ label, icon }: MenuButtonProps) => {
  return (
    <Pressable className="aspect-[3/4] w-5/12 items-center justify-center rounded-xl bg-red-500">
      <Ionicons name={icon} size={70} />
      <View className="flex items-center">
        <Text className="font-bold">{label}</Text>
      </View>
    </Pressable>
  );
};
