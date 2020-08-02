import React from 'react'
import { SaveNoteOnServer, startUploadPhoto } from '../../actions/noteActions'
import { useDispatch } from 'react-redux'

export const NotesAppBar = () => {
    const date = new Date().toDateString();
    // save note to db
    const dispatch = useDispatch();
    const handleBtnSave = () => {
        dispatch(SaveNoteOnServer())
    }

    const HandleImageChange = (e) => {
        const file = e.target.files[0];
        dispatch(startUploadPhoto(file))
        // dispatch image to save on cloud
    }
    const HanleImageClick = () => {
        document.querySelector('#image').click();

    }
    return (
        <div className="notes__appbar">
            <input type="file" id='image' style={{ display: 'none' }} onChange={HandleImageChange} />

            <span> {date} </span>
            <div>
                <button className="btn" style={{ borderRadius: 'none' }} onClick={HanleImageClick} > Picture</button>
                <button className="btn" onClick={handleBtnSave}>Save</button>
            </div>
        </div>
    )
}
