import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";

import { useUser } from "~/hooks/useUser";

export const UserForm = () => {
  const { login } = useUser();

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

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
        onPress={() => login({ name, phoneNumber })}
      >
        <Text className="text-white">Lagre</Text>
      </Pressable>
    </View>
  );
};
