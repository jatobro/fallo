import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Layout = () => {
  return (
    <SafeAreaView className="h-full">
      <Header />
      <View className="bg-primary flex-1">
        <Slot />
      </View>

      <Footer />
      <StatusBar />
    </SafeAreaView>
  );
};

export default Layout;
