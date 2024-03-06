import { child, get, ref, set } from "firebase/database";

import { db } from "~/firebase/config";
import { type User } from "~/types";

export const writeUserData = ({ userId, name, email }: User) => {
  set(ref(db, "users/" + userId), {
    username: name,
    email,
  });
};

export const readUserData = ({ userId }: User) => {
  const dbRef = ref(db);
  get(child(dbRef, "users/" + userId))
    .then((snapshot) => {
      if (snapshot.exists()) {
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
};
