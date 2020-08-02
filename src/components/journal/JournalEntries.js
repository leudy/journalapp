import React from 'react'
import { JournalEntry } from './JournalEntry'
import { useSelector } from 'react-redux'

export const JournalEntries = () => {
    const notes = useSelector(state => state.notes.notes)

    return (
        <div className="journal__entries animate__animated animate__fadeIn animate__faster">
            {notes.length > 0 && notes.map(note => (
                <JournalEntry key={note.id} {...note}></JournalEntry>
            ))}
        </div>
    )
}
