import { View, Text } from "react-native";

import { UserForm } from "../components/UserForm";
import { useAuth } from "../hooks/useAuth";

const Profile = () => {
  const { user } = useAuth();

  return (
    <View className="p-4">
      {user ? <Text>{user.name}</Text> : <UserForm />}
    </View>
  );
};

export default Profile;
