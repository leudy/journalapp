import React from 'react'
import { JournalEntries } from './JournalEntries'

export const Sidebar = () => {
    return (
        <div className="journal__sidebar">
            <div className="journal__sidebar-navbar">
                <h3 className="mt-5">
                    <i className="far fa-moon"></i>
                    <span> Leudy Rosario</span>
                </h3>
                <button className="btn">
                    Logut
                </button>
            </div>
            <div className="journal_new-entry">
                <i className="far fa-calendar-plus fa-5x pointer"></i>
                <p>New Entry</p>
            </div>
            <JournalEntries></JournalEntries>

        </div>
    )
}
