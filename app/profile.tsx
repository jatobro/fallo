import { View, Text } from "react-native";

import { UserForm } from "../components/UserForm";
import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <View className="flex h-full items-center justify-center bg-red-500 p-4">
      {user ? <Text>{user.name}</Text> : <UserForm />}
    </View>
  );
};

export default Profile;
