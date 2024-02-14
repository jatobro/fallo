import { getDatabase, ref, set, get, child } from "firebase/database";

const db = getDatabase();

export const writeUserData = (userId: string, name: string, email: string) => {
  set(ref(db, "users/" + userId), {
    username: name,
    email,
  });
};

export const readUserData = (userId: string) => {
  get(ref(db, "users/" + userId))
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
