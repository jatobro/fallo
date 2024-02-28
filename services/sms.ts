import * as SMS from "expo-sms";

import { type Alert } from "../types";

export const sendSMS = async (alert: Alert) => {
  console.log("checking SMS availability...");
  const isAvailable = await SMS.isAvailableAsync();

  if (isAvailable) {
    console.log("SMS is available on this device");

    const { user, coordinates, message } = alert;

    console.log("sending SMS...");
    const response = await SMS.sendSMSAsync(
      process.env.SMS_RECIPIENT || "+4790289207",
      `Hi, ${user ? user.name : "UNKNOWN USER"} is in danger. They are at ${coordinates.latitude}, ${coordinates.longitude}. They said: ${message}`,
    );

    console.log("SMS response result:", response.result);
    return response;
  }
  console.error("SMS is not available on this device");
  return { result: "cancelled" } as SMS.SMSResponse;
};
