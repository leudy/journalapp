import React from 'react'
import { SaveNoteOnServer } from '../../actions/noteActions'
import { useDispatch } from 'react-redux'

export const NotesAppBar = () => {
    const date = new Date().toDateString();
   // save note to db
   const dispatch = useDispatch();
   const handleBtnSave = () =>{
    dispatch(SaveNoteOnServer())
   }
  
    return (
        <div className="notes__appbar">
            <input type="file" id='image' style={{ display: 'none' }} />

            <span> {date} </span>
            <div>
                <button className="btn" style={{ borderRadius: 'none' }}>Picture</button>
                <button className="btn" onClick={handleBtnSave}>Save</button>
            </div>
        </div>
    )
}
