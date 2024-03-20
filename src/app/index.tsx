import { useEffect } from "react";
import { Redirect } from "expo-router";

import { listenAlerts } from "~/api/alerts";
import { requestLocationPermission } from "~/services/location";

const Page = () => {
  const onAppStart = async () => {
    await requestLocationPermission();

    listenAlerts(); // listen for changes to alerts
  };

  useEffect(() => {
    onAppStart();
  }, []);

  return <Redirect href="/home" />;
};

export default Page;
