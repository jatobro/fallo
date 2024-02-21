import * as Location from "expo-location";
import { Redirect } from "expo-router";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    (async () => {
      const { status } = await Location.requestBackgroundPermissionsAsync();

      console.log("status:", status);

      if (status !== "granted") {
        console.error("location permission not granted");
      }
    })();
  }, []);

  return <Redirect href="/home" />;
};

export default Index;
