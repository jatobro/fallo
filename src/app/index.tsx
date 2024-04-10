import { useEffect } from "react";
import { Redirect } from "expo-router";
import { useAtomValue } from "jotai";

import { listenButtonClick } from "~/api/alerts";
import { userAtom } from "~/atoms";
import { requestLocationPermission } from "~/services/location";

const Page = () => {
  const user = useAtomValue(userAtom);
  //const { location, getLocation } = useGetLocation();

  const onAppStart = async () => {
    await requestLocationPermission();
    //await getLocation();

    listenButtonClick(user); // listen for changes to alerts
  };

  useEffect(() => {
    onAppStart();
  }, []);

  return <Redirect href="/home" />;
};

export default Page;
