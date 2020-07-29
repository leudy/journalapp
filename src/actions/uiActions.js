import { UiTypes } from '../redux/types/authTypes'

export const SetError = (err) => ({
    type: UiTypes.uiSetError,
    payload: err
})

export const RemoveError = () => ({
    type: UiTypes.claerError,
})

export const startLogin = () => ({
    type: UiTypes.startLogin,
})
export const FinishLogin = () => ({
    type: UiTypes.finishLogin,
})
