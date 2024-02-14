import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Layout = () => {
  return (
    <SafeAreaView className="h-full">
      <Header />
      <Slot />
      <Footer />
      <StatusBar />
    </SafeAreaView>
  );
};

export default Layout;
