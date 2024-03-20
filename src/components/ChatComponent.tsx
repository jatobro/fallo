import React, { useCallback, useEffect, useState } from "react";
import { Text, View } from "react-native";
import { GiftedChat, IMessage, MessageProps } from "react-native-gifted-chat";

import { useChatApi } from "~/hooks/useChatApi";
import { useUser } from "~/hooks/useUser";

const initialMessage: IMessage = {
  _id: "1",
  text: "Hello, hva trenger du hjelp med?",
  createdAt: new Date(),
  user: {
    _id: 2,
    name: "Kontakt Senteret",
  },
};

const defaultUser = { _id: "-1", name: "Uknown", phoneNumber: "12345678" };

export const ChatComponent = () => {
  const { user: thisUser } = useUser();

  const myUser = {
    _id: thisUser?._id,
    name: thisUser?.name,
    phoneNumber: thisUser?.phoneNumber,
  };

  const { messages, sendMessageToApi } = useChatApi();
  const [giftedChatMessages, setGiftedChatMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    if (messages.length === 0) {
      // If there are no messages, use initialMessage (This is not sendt to the backend.)
      setGiftedChatMessages([initialMessage]);
    } else {
      // If there are messages, map them to GiftedChat message format
      setGiftedChatMessages([initialMessage]);

      const sortedMessages = messages.sort((a, b) => {
        // Sort messages in ascending order based on createdAt timestamp
        return (
          new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()
        );
      });
      // Reverse the order after sorting to ensure ascending order
      const ascendingSortedMessages = sortedMessages.reverse();

      setGiftedChatMessages(
        ascendingSortedMessages.map((message) => ({
          _id: message._id,
          text: message.text,
          createdAt: message.createdAt,
          user: {
            _id: message.user?._id,
            name: message.user?.name,
          },
        })),
      );
    }
  }, [messages]);

  const onSend = useCallback(
    async (newMessages: IMessage[] = []) => {
      try {
        // Check if there are any messages already present
        const initialMessageExists = messages.length > 0;

        // If initial message doesn't exist, send it to the API
        if (!initialMessageExists) {
          await sendMessageToApi({
            _id: initialMessage._id.toString(),
            text: initialMessage.text,
            createdAt: new Date(initialMessage.createdAt), //initialMessage.createdAt
            user: {
              _id: initialMessage.user._id.toString(),
              name: initialMessage.user.name || defaultUser.name,
            },
          });
        }

        // Update giftedChatMessages state with new messages
        setGiftedChatMessages((previousMessages) =>
          GiftedChat.append(previousMessages, newMessages),
        );

        // Send new messages to the API
        newMessages.forEach((message) => {
          sendMessageToApi({
            _id: message._id.toString(),
            text: message.text,
            createdAt: new Date(message.createdAt),
            user: {
              _id: myUser._id || defaultUser._id,
              name: myUser.name || defaultUser.name,
            },
          });
        });
      } catch (error) {
        console.error("Error sending messages:", error);
      }
    },

    [sendMessageToApi, giftedChatMessages],
  );

  const renderMessage = (message: MessageProps<IMessage>) => {
    const isMyMessage =
      message.currentMessage?.user?._id.toString() ===
      (myUser._id || defaultUser._id.toString());

    return (
      <View
        style={{
          flexDirection: "row",
          justifyContent: isMyMessage ? "flex-end" : "flex-start",
          marginVertical: 5,
        }}
      >
        {!isMyMessage && (
          <View
            style={{
              marginRight: 5,
              alignItems: "center",
              justifyContent: "center",
              width: 24,
              height: 24,
              borderRadius: 12,
              backgroundColor: "#007AFF",
            }}
          >
            <Text style={{ color: "#fff" }}>
              {getInitials(message.currentMessage?.user?.name || "Unknown")}
            </Text>
          </View>
        )}
        <View
          style={{
            maxWidth: "80%",
            backgroundColor: isMyMessage ? "#007AFF" : "#f0f0f0",
            borderRadius: 10,
            padding: 10,
          }}
        >
          <Text style={{ color: isMyMessage ? "#fff" : "#000" }}>
            {message.currentMessage?.text}
          </Text>
          <Text style={{ fontSize: 10, color: "#000", textAlign: "right" }}>
            {formatTime(message.currentMessage?.createdAt)}
          </Text>
        </View>
      </View>
    );
  };

  const getInitials = (name: string) => {
    const parts = name.split(" ");
    return parts
      .map((part) => part[0])
      .join("")
      .toUpperCase();
  };

  const formatTime = (createdAt?: Date | number) => {
    if (!createdAt) return "";

    const dateObject =
      typeof createdAt === "number" ? new Date(createdAt) : createdAt;
    const hours = dateObject.getHours();
    const minutes = dateObject.getMinutes();
    return `${hours < 10 ? "0" + hours : hours}:${
      minutes < 10 ? "0" + minutes : minutes
    }`;
  };

  return (
    <GiftedChat
      messages={giftedChatMessages}
      onSend={onSend}
      user={{
        _id: myUser._id || defaultUser._id,
      }}
      renderMessage={renderMessage}
    />
  );
};

export default ChatComponent;
