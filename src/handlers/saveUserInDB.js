import { getDatabase, ref, set } from "firebase/database";
import app from "../firebase";

export default async function saveUserInDB(eventId, 
    fullName, 
    email, 
    dateOfBirth, 
    selectedValue, 
    userId) {
   try{
    const db = getDatabase(app);
    await set(ref(db, "users/" + eventId + "/" + userId), {
    fullName, 
    email, 
    dateOfBirth, 
    selectedValue
    })

   } catch(e) {
    console.error("Error saving user to Firebase", e);
   }
}