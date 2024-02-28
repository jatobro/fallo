import * as Location from "expo-location";

export const requestLocationPermission = async () => {
  const { status } = await Location.requestBackgroundPermissionsAsync();

  if (status === "granted") {
    console.log("location permission success");
  } else {
    console.error("location permission denied");
  }

  return status;
};
