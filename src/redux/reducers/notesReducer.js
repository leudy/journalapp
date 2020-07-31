import { NotesType } from "../types/authTypes";

const initialState = {
    notes: [],
    active: null,

}

export const notesReducers = (state = initialState, action) => {
    switch (action.type) {
        // active option
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

        default:
            return state;
    }
}


