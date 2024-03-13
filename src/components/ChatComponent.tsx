import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";
import { useAtomValue } from "jotai";

import { userAtom } from "~/atoms";
import { useChatApi } from "~/hooks/useChatApi";

const initialMessage: IMessage = {
  _id: "1",
  text: "Hello, hva trenger du hjelp med?",
  createdAt: new Date(),
  user: {
    _id: 2,
    name: "Kontakt Senteret",
  },
};

export const ChatComponent = () => {
  const defaultUser = { _id: -1, name: "Uknown", phoneNumber: "12345678" };
  const user = useAtomValue(userAtom);
  const { messages, sendMessageToApi } = useChatApi();
  const [giftedChatMessages, setGiftedChatMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    if (messages.length === 0) {
      // If there are no messages, use initialMessage (This is not sendt to the backend.)
      setGiftedChatMessages([initialMessage]);
    } else {
      // If there are messages, map them to GiftedChat message format
      setGiftedChatMessages(
        messages.map((message) => ({
          _id: message._id,
          text: message.text,
          createdAt: message.createdAt,
          user: user || defaultUser,
        })),
      );
    }
  }, [messages]);

  const onSend = useCallback(
    (newMessages: IMessage[] = []) => {
      setGiftedChatMessages((previousMessages) =>
        GiftedChat.append(previousMessages, newMessages),
      );
      newMessages.forEach((message) => {
        sendMessageToApi({
          _id: message._id.toString(),
          text: message.text,
          createdAt: new Date(message.createdAt),
          user: {
            _id: user?._id || defaultUser._id,
            name: user?.name || defaultUser.name,
            phoneNumber: user?.phoneNumber || defaultUser.phoneNumber,
          },
        });
      });
    },
    [sendMessageToApi],
  );

  return (
    <GiftedChat
      messages={giftedChatMessages}
      onSend={onSend}
      user={{
        _id: user?._id || defaultUser._id,
      }}
    />
  );
};
