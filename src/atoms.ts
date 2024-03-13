import AsyncStorage from "@react-native-async-storage/async-storage";
import { atomWithStorage, createJSONStorage } from "jotai/utils";

import { User } from "./types";

const storage = createJSONStorage<User | null>(() => AsyncStorage);
const content = null;

export const userAtom = atomWithStorage<User | null>("user", content, storage);
