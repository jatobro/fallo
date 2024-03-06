import React, { useEffect } from "react";
import { View } from "react-native";

import { ChatComponent } from "~/components/ChatComponent";

const Page = () => {
  useEffect(() => {
    // Any initialization logic if needed
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <ChatComponent />
    </View>
  );
};

export default Page;
