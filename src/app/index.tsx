import { useEffect } from "react";
import { Redirect } from "expo-router";

import { listenAlerts } from "~/api/alerts";
import { requestLocationPermission } from "~/services/location";

const Page = () => {
  useEffect(() => {
    listenAlerts();
    requestLocationPermission();
  }, []);

  return <Redirect href="/home" />;
};

export default Page;
