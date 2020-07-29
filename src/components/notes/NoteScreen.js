import React, { useEffect, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { NotesAppBar } from './NotesAppBar'
import { useForm } from '../../hooks/useForm';
import { ActiveNote } from '../../actions/noteActions'
export const NoteScreen = () => {
    const dispatch = useDispatch();
    const { active: note } = useSelector(state => state.notes);
    const [formValues, onInputChange, reset] = useForm(note);
    const _ActiveNoteId = useRef(note.id)
    const { title, body } = formValues;
    useEffect(()=>{
         if(note.id !== _ActiveNoteId.current)
         {
             reset(note)    
             _ActiveNoteId.current = note.id;    
         }
    },[note,reset])

    useEffect(()=>{
        dispatch(ActiveNote(formValues.id,{...formValues}))

    },[formValues,dispatch])

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
                  {(note.url) &&
                (<div className="note__image">
                    <img
                        src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__340.jpg"
                        alt="imagen"
                    >
                    </img>
                </div>)}

            </div>
        </div>
    )
}
