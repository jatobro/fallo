import { Slot } from "expo-router";
import { StatusBar } from "expo-status-bar";

import { Footer } from "../components/Footer";
import { Header } from "../components/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
      <StatusBar style="auto" />
    </>
  );
};

export default Layout;
