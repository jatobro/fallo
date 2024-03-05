import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Layout = () => {
  return (
    <SafeAreaView className="h-full">
      <Header />
      <View className="flex-1 bg-primary">
        <Slot />
      </View>

      <Footer />
      <StatusBar />
    </SafeAreaView>
  );
};

export default Layout;
