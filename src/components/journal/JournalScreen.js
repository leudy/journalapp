import React from 'react'
import { Sidebar } from './Sidebar'
import { NoteScreen } from '../notes/NoteScreen'
import { useSelector } from 'react-redux'

export const JournalScreen = () => {
    const { active } = useSelector(state => state.notes)
    return (
        <div className="journal__main-content">
            <Sidebar></Sidebar>
            <main>
                {(active)
                    ?
                    <NoteScreen />
                    : <p>No hay note selecionada</p>
                }
            </main>
        </div>
    )
}
