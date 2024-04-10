import { SetStateAction, useEffect, useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import uuid from "react-native-uuid";

import { useUser } from "~/hooks/useUser";

export const UserForm = () => {
  const { user, login } = useUser();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [userID, setUserID] = useState<string | undefined>(undefined);

  useEffect(() => {
    // Check if user has an _id and _id state is not set yet
    if (user?._id != null && userID === null) {
      setUserID(user._id.toString()); // Set _id state
    }
  }, [user, userID]); // Include user and userID in dependency array

  const handleSave = () => {
    if (userID === null) {
      // If userID is not set yet, generate a new one
      const newUserID = uuid.v4().toString();
      setUserID(newUserID);
    }
    login({ _id: userID, name, phoneNumber }); // Call login with _id, name, and phoneNumber
  };

  return (
    <View className="container items-center">
      <TextInput
        placeholder="Navn"
        className="w-2/3 rounded bg-white p-2"
        onChangeText={(text) => setName(text)}
        value={name}
      />
      <TextInput
        placeholder="Telefonnummer til pårørende"
        className="mt-6 w-2/3 rounded bg-white p-2"
        onChangeText={(text) => setPhoneNumber(text)}
        value={phoneNumber}
      />
      <Pressable
        disabled={!(name && phoneNumber)}
        className="mt-8 rounded bg-black px-4 py-3"
        onPress={handleSave} // Call handleSave onPress
      >
        <Text className="text-white">Lagre</Text>
      </Pressable>
    </View>
  );
};
