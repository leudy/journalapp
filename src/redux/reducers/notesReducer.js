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
        default:
            return state;
    }
}


