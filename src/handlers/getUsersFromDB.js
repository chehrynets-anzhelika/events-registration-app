import { child, getDatabase, ref, get } from "firebase/database";
import app from "../firebase";

export default async function getUsersFromDB(eventId) {
    try {
      const dbRef = ref(getDatabase(app));
      const snapshot = await get(child(dbRef, `users/${eventId}`));
      if(snapshot.exists()) {
        let users = snapshot.val();
        return Object.keys(users).map(key => ({...users[key], userId: key}));
      } else {
        return null;
      }
    } catch(e)  {
        console.log("Users is not found");
    }
}