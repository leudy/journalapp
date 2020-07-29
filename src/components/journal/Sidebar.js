import React from 'react'
import { JournalEntries } from './JournalEntries'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout, Startlogout } from '../../actions/authActions'
import { AddNote } from '../../actions/noteActions'


export const Sidebar = () => {
    const user = useSelector(state => state.auth.displayName)
    //console.log(user)

    const dispatch = useDispatch();
    const handleLogout = () => {
        dispatch(Startlogout())
    }
    const handleNewEntry = () => {
        dispatch(AddNote())
    }

    return (
        <div className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5 mb-5">
                    <i className="far fa-moon"></i>
                    <span> {user}</span>
                </h3>
                <button className="btn"
                    onClick={handleLogout}>Logout</button>

            </div>
            <div classnName="journal__new-entry" style={{ marginBottom: 20 }} onClick={handleNewEntry} >
                <i className="far fa-calendar-plus fa-5x pointer"></i>
                <p className="mt-5">New Entry</p>
            </div>
            <JournalEntries></JournalEntries>


        </div>
    )
}
