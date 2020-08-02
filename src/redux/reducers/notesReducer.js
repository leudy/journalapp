import { NotesType } from "../types/authTypes";

const initialState = {
    notes: [],
    active: null,

}

export const notesReducers = (state = initialState, action) => {
    switch (action.type) {
        // active option

        case NotesType.addNewNote:
            return {
                ...state,
                notes: [action.payload, ...state.notes]
            }
        case NotesType.noteActive:
            return {
                ...state,
                active: {
                    ...action.payload
                }
            }
        case NotesType.noteLoad:
            return {
                ...state,
                notes: [...action.payload]
            }
        case NotesType.noteUpload:
            return {
                ...state,
                notes: state.notes.map(
                    note => note.id === action.payload.id ? action.payload.note : note
                )

            }
        case NotesType.noteDelete:
            return {
                ...state
                , active: null,
                notes: state.notes.filter(n => n.id !== action.payload)
            }
        case NotesType.noteClear:
            return {
                ...state,
                active: null,
                notes: []
            }
        default:
            return state;
    }
}


