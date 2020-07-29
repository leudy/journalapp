import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm';
import { ActiveNote } from '../../actions/noteActions'
export const NoteScreen = () => {
    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);
    console.log('this is my state', note)

    // const [formValues, onInputChange, reset] = useForm(note);
    // //console.log(formValues)
    // const ActiveNoteId = useRef(note.id)
    // useEffect(() => {
    //     // set new valuesSelectingNote
    //     if (note.id !== ActiveNoteId) {
    //         reset(note);
    //         console.log('nueva data al form')
    //         ActiveNoteId.current = note.id
    //     }
    // }, [ActiveNoteId, reset, note])

    // for update activenote on realtime on reduxonst [formValues, onInputChange, reset] = useForm(note);
    // //console.log(formValues)
    // const ActiveNoteId = useRef(note.id)
    // useEffect(() => {
    //     // set new valuesSelectingNote
    //     if (note.id !== ActiveNoteId) {
    //         reset(note);
    //         console.log('nueva data al form')
    //         ActiveNoteId.current = note.id
    //     }
    // }, [ActiveNoteId, reset, note])

    // useEffect(() => {
    //     const { id } = formValues;
    //     dispatch(ActiveNote(id, { ...formValues }))
    // }, [formValues])


    const { title, body } = formValues;
    // console.log(body)
    // console.log(formValues)

    return (
        <div className="notes__main-content">
            <NotesAppBar></NotesAppBar>
            <div className="note__content">


                <input type="text" placeholder="Some Awesome title"
                    className="note__title-input" autoComplete="off"
                    name="title"
                    value={title}
                    onChange={onInputChange}
                />

                <textarea
                    placeholder="What happened today"
                    className="note__textarea"
                    name="body"
                    value={body}
                    onChange={onInputChange}
                >
                </textarea>
                <div className="note__image">
                    <img
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    >
                    </img>
                </div>

            </div>
        </div>
    )
}
