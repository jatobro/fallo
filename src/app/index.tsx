import { useEffect } from "react";
import { Redirect } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { listenAlerts } from "~/api/alerts";
import { requestLocationPermission } from "~/services/location";
import { User } from "~/types";

const Page = () => {
  const onAppStart = async () => {
    await requestLocationPermission();
    const user = (await AsyncStorage.getItem("user")) as User;
    console.log("user: ", user);
    listenAlerts();
  };

  useEffect(() => {
    onAppStart();
  }, []);

  return <Redirect href="/home" />;
};

export default Page;
