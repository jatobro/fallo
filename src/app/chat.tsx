import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { GiftedChat, IMessage } from "react-native-gifted-chat";

const Chat = () => {
  const [messages, setMessages] = useState<IMessage[]>([]); //useState<any[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello, hva trenger du hjelp med?",
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "assets/favicon.png",
        },
      },
    ]);
  }, []);

  const onSend = useCallback((newMessages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, newMessages),
    );
  }, []);

  return (
    <GiftedChat
      messages={messages}
      onSend={(messages) => onSend(messages)}
      user={{
        _id: 1,
      }}
    />
  );
};

export default Chat;
