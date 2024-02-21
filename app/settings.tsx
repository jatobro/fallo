import { View } from "react-native";

import { SettingButton } from "../components/SettingButton";

const Settings = () => {
  return (
    <View className="flex h-full flex-col items-center justify-evenly p-2">
      {Array.from({ length: 10 }).map((_, i) => (
        <SettingButton key={i} label={`Setting ${i + 1}`} />
      ))}
    </View>
  );
};

export default Settings;
