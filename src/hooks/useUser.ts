import { useState } from "react";
import { useAtom } from "jotai";
import { RESET } from "jotai/utils";

import { userAtom } from "~/atoms";
import { User } from "~/types";

export const useUser = () => {
  const [user, setUser] = useAtom(userAtom);
  const [isLoading, setIsLoading] = useState(false);

  const login = (newUser: User) => {
    setIsLoading(true);
    setUser(newUser).then(() => setIsLoading(false));
  };

  const logout = () => setUser(RESET);

  return { isLoading, user, login, logout };
};
