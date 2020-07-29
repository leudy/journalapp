import React from 'react'

export const NotesAppBar = () => {
    return (
        <div className="notes__appbar">
            <input type="file" id='image' style={{ display: 'none' }} />

            <span> 28 de agosto  </span>
            <div>
                <button className="btn" style={{ borderRadius: 'none' }}>Picture</button>
                <button className="btn">Save</button>
            </div>
        </div>
    )
}
