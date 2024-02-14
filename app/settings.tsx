import { Link } from "expo-router";
import { View, Text } from "react-native";

const Settings = () => {
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-white">
      <Text>Settings</Text>
      <Link href="/home">tilbake</Link>
    </View>
  );
};

export default Settings;
