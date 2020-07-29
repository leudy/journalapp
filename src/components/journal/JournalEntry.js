import React from 'react'
import moment from 'moment'
import { useDispatch } from 'react-redux'
import { SelectingNote } from '../../actions/noteActions';

export const JournalEntry = ({ id, date, title, body, url }) => {
    const dispatch = useDispatch();
    // set moment here
    const _date = moment(date);

    const handleSelection = () => {
        dispatch(SelectingNote({ id, title, body, url, date }))
    }
    return (
        <>
            <div className="journal__entry pointer" onClick={handleSelection}>

                <div className="journal__entry-picture"
                    style={{
                        backgroundSize: 'cover'
                        , backgroundImage: "url(https://earthsky.org/upl/2018/12/comet-wirtanen-Jack-Fusco-dec-2018-Anza-Borrego-desert-CA-e1544613895713.jpg)"
                    }}

                >

                </div>
                <div className="journal__entry-body">
                    <p className="journal__entry-title">
                        {title}
                    </p>
                    <p className="journal__entry-content">
                        {body}
                    </p>
                </div>

                <div className="journal__entry-date-box">
                    <span>{_date.format('dddd')}</span>
                    <h4>{_date.format('DD')}</h4>
                </div>

            </div>
        </>
    )
}
