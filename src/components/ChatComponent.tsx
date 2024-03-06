import React, { useCallback, useEffect, useState } from "react";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

import { useChatApi } from "~/hooks/useChatApi";
import { useUser } from "~/hooks/useUser";

interface Props {
  initialMessage: IMessage;
}

export const ChatComponent: React.FC<Props> = ({ initialMessage }) => {
  const defaultUser = { _id: -1, name: "Uknown", phoneNumber: "12345678" };
  const { user } = useUser();
  const { messages, sendMessageToApi } = useChatApi();
  const [giftedChatMessages, setGiftedChatMessages] = useState<IMessage[]>([
    initialMessage,
  ]);

  useEffect(() => {
    setGiftedChatMessages(
      messages.map((message) => ({
        _id: message._id,
        text: message.text,
        createdAt: message.createdAt, //createdAt: new Date(message.createdAt),
        user: user || defaultUser,
      })),
    );
  }, [messages]);

  const onSend = useCallback(
    (newMessages: IMessage[] = []) => {
      setGiftedChatMessages((previousMessages) =>
        GiftedChat.append(previousMessages, newMessages),
      );
      newMessages.forEach((message) => {
        console.log("createdAt Before:", message._id);
        console.log("Converted:", new Date(message.createdAt));
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
      onSend={(messages) => onSend(messages)}
      user={{
        _id: user?._id || defaultUser._id,
      }}
    />
  );
};
