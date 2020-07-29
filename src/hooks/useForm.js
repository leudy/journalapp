import { useState } from 'react'

export const useForm = (initialState = {}) => {
    const [values, setvalues] = useState(initialState)

    const reset = (state = initialState) => {
        setvalues(state);
    }
    const handleChanges = ({ target }) => {
        setvalues({ ...values, [target.name]: target.value });
    }

    return [values, handleChanges, reset]
}
