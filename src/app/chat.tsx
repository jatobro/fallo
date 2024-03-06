import React, { useEffect } from "react";

import { ChatComponent } from "~/components/ChatComponent";

const Page = () => {
  useEffect(() => {
    // Any initialization logic if needed
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ChatComponent
        initialMessage={{
          _id: 1,
          text: "Hello, hva trenger du hjelp med?",
          createdAt: new Date(),
          user: {
            _id: 2,
            name: "Kontakt Senteret",
            avatar: "assets/favicon.png",
          },
        }}
      />
    </View>
  );
};

export default Page;

/*const Chat = () => {
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
*/
