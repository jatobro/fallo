import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 items-center justify-center bg-[#dff8fd]">
      <Text className="text-3xl">Velkommen til Fallo appen!</Text>

      <StatusBar style="auto" />
    </View>
  );
}
