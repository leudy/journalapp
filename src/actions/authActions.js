import { AuthTypes } from "../redux/types/authTypes";
import { googleAuthProvider, firebase } from '../firebase/firebase-config';
import { SetError, startLogin, FinishLogin } from "./uiActions";
import Swal from 'sweetalert2'



export const LoginWithGoogle = (email, passord) => dispatch => {
    dispatch(startLogin());
    firebase.auth().signInWithPopup(googleAuthProvider)
        .then(({ user }) => {
            SavedataOnLocalStorage(user);
            dispatch(login(user.uid, user.displayName))
            dispatch(FinishLogin());
        }
        ).catch(err => { dispatch(FinishLogin()); console.err(err) })
}



export const LoginEmailAndPassword = (email, password) => {
    return (dispatch) => {

        dispatch(startLogin());
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(({ user }) => {
                dispatch(FinishLogin());
                SavedataOnLocalStorage(user)
            }).catch(er => {
                dispatch(FinishLogin());
                Swal.fire('Erro', er.message, 'error')
            })
    }


}
const SavedataOnLocalStorage = (user) => {
    localStorage.setItem('userinfo', JSON.stringify({ name: user.displayName, image: user.photoURL, email: user.email }))

}
export const RegisterWithEmailAnPasswordName = (name, email, passord) => {
    return (dispatch) => {
        firebase.auth().createUserWithEmailAndPassword(email, passord)
            .then(async ({ user }) => {
                await user.updateProfile({ displayName: name });
                console.log(user)
            }).catch(
                err => {
                    const { code, message } = err;

                    Swal.fire('Erro', message, 'error')
                    if (code === 'auth/email-already-in-use') {
                        //dispatch(SetError(message))
                    }
                }
            )

    }
}

export const Startlogout = () => {
    return async (dispatch) => {
        await firebase.auth().signOut();
        dispatch(logout())
    }
}
export const logout = () => ({
    type: AuthTypes.logout
})

export const login = (uid, displayName) => ({
    type: AuthTypes.login,
    payload: {
        uid, displayName

    }
})