import { db } from "../firebase/firebase-config"

export const loadnotesaysnc = async (ui) => {
    const dataNotesSnapShot = await db.collection(`${ui}/journal/notes`).get();
    const notes = [];
    dataNotesSnapShot.forEach(d => {
        notes.push({ id: d.id, ...d.data() })
    })
    //console.log(notes)
    return notes;

}