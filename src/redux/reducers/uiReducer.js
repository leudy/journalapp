import { UiTypes } from '../types/authTypes'

const InitState = {
    loading: false,
    msg: null
}


export const uiReducer = (state = InitState, action) => {
    switch (action.type) {
        case UiTypes.uiSetError:
            return {
                ...state,
                msg: action.payload
            }
        case UiTypes.finishLogin:
            return {
                ...state,
                loading: false
            }
        case UiTypes.startLogin:
            return {
                ...state,
                loading: true
            }
        case UiTypes.claerError:
            return {
                ...state,
                msg: null
            }
        default:
            return state;
    }


}