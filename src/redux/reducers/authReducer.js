const { AuthTypes } = require("../types/authTypes");
/* 
structure response 
ui:123,
name:'Leudi Rosario'
*/
export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case AuthTypes.login:
            return {
                ui: action.payload.uid,
                displayName: action.payload.displayName
            }
        case AuthTypes.logout:
            return {
            }
        default:
            return state;
    }
}


