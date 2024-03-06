import { useEffect, useState } from "react";

import { fetchMessages, sendMessage } from "~/api/chatApi";
import { Messages } from "~/types";

export const useChatApi = () => {
  const [messages, setMessages] = useState<Messages[]>([]);

  useEffect(() => {
    const loadMessages = async () => {
      const fetchedMessages = await fetchMessages();
      setMessages(fetchedMessages);
    };
    loadMessages();
  }, []);

  const sendMessageToApi = async (message: Messages) => {
    try {
      await sendMessage(message);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return { messages, sendMessageToApi };
};
