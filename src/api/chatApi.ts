import { child, get, ref, set } from "firebase/database";

import { db } from "~/firebase/config";
import { type Messages } from "~/types";

export const fetchMessages = () => {
  return get(child(ref(db), "messages"))
    .then((messagesSnapshot) => {
      if (messagesSnapshot.exists()) {
        const messagesData = messagesSnapshot.val();
        const messagesArray: Messages[] = Object.keys(messagesData).map(
          (key) => ({
            _id: key, // Assuming the key is the message ID
            text: messagesData[key].text,
            createdAt: new Date(messagesData[key].createdAt),
            user: {
              _id: messagesData[key].user._id,
              name: messagesData[key].user.name,
            },
          }),
        );
        return messagesArray;
      } else {
        return [];
      }
    })
    .catch((error) => {
      console.error("Error fetching messages:", error);
      return [];
    });
};

export const sendMessage = (message: Messages) => {
  const messageToSend = {
    ...message,
    createdAt: message.createdAt.toISOString(), // Convert Date to ISO 8601 string
  };

  console.log("trying to send Message...");
  set(ref(db, "messages/" + message._id), messageToSend)
    .then(() => console.log(`Message written to database`))
    .catch((error) => {
      console.error("Error sending message:", error);
    });
};
