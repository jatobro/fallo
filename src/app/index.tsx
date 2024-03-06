import { useEffect } from "react";
import { Redirect } from "expo-router";

import { requestLocationPermission } from "~/services/location";

const Page = () => {
  useEffect(() => {
    requestLocationPermission();
  }, []);

  return <Redirect href="/home" />;
};

export default Page;
