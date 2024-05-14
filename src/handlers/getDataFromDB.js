import { child, getDatabase, ref, get } from "@firebase/database";
import app from "../firebase";

export default async function getDataFromDataBase() {
        try {
        const dbRef = ref(getDatabase(app));
        const snapshot = await get(child(dbRef, `events/`));
            if(snapshot.exists()) {
                let events = Object.values(snapshot.val());
                return events;
            } else {
                console.log("No data available");
                return;
            }
        
    } catch (error) {
        console.error("Error reading data from Firebase", error);
    }
}