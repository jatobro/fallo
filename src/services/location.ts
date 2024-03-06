import * as Location from "expo-location";

export const requestLocationPermission = async () => {
  const { status } = await Location.requestForegroundPermissionsAsync();

  if (status === "granted") {
    console.log("location permission success");
  } else {
    console.error("location permission denied");
  }

  return status;
};
