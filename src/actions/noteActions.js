import { db } from "../firebase/firebase-config";
import { NotesType, UiTypes } from '../redux/types/authTypes'
import { loadnotesaysnc } from "../helpers/NoteRepo";
import Swal from "sweetalert2";
import { UploadFile } from "../helpers/FileManager";
// this method gonna handle savegin on firebase for async method
export const AddNote = () => {
    return async (dispatch, getState) => {
        /// get user id = 
        const state = getState().auth;
        const newnote = {
            title: '',
            body: '',
            date: new Date().getTime()
        }
        const UserPathRoot = `${state.ui}/journal/notes`;
        const doc = await db.collection(UserPathRoot).add(newnote)
        console.log(doc)
        dispatch(_AddNewNote(doc.id, newnote))
        //console.log(state.ui)
    }
}
// this method will go to hanlde redux values
export const _AddNewNote = (uid, note) =>
    (
        {
            type: NotesType.noteActive,
            payload: {

                ...note
            }
        }
    )
export const ActiveNote = (id, note) =>
    (
        {
            type: NotesType.noteActive,
            payload: {
                id,
                ...note
            }
        }
    )

export const SelectingNote = (note) => ({
    type: NotesType.noteActive,
    payload: {
        ...note
    }
})
export const StartLoading = (uid) => {
    return async (dispatch) => {
        const notes = await loadnotesaysnc(uid)
        dispatch(loadnotes(notes))
    }
}
export const loadnotes = (notes) => ({
    type: NotesType.noteLoad,
    payload: notes
})
export const SaveNoteOnServer = (note) => {
    return async (dispatch, getState) => {

        const { active } = getState().notes;
        const { ui } = getState().auth;

        //console.log(' este es mi estado activo', active );
        const NoteFireStore = { ...active };
        // revome id for no save on firestore
        delete NoteFireStore.id;
        if (!active.url) {
            console.log('no tiene valor en la url');

            delete NoteFireStore.url;
        }
        const uriNote = `${ui}/journal/notes/${active.id}`;
        await db.doc(uriNote).update(NoteFireStore);
        dispatch(refreshNote(active.id, active))
        Swal.fire('Nota actualizada', active.title, 'success')



    }
}
export const startUploado = (file) => {
    return async (dispatch, getState) => {
        const { active: ActiveNote } = getState().notes;
        const fileUrl = await UploadFile(file);
        console.log(fileUrl)
    }
}
export const refreshNote = (id, note) => ({
    type: NotesType.noteUpload,
    payload: {
        id, note: { id, ...note }
    }
})