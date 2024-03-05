import { View } from "react-native";
import { Link } from "expo-router";

type SettingButtonProps = {
  label: string;
};

export const SettingButton = ({ label }: SettingButtonProps) => {
  return (
    <View className="flex aspect-[12/2] w-11/12 justify-center rounded bg-blue-500 pl-2">
      <Link className="bg-blue-500" href="/home">
        {label}
      </Link>
    </View>
  );
};
