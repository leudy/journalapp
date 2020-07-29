import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm';
import { useDispatch, useSelector } from 'react-redux';
import { LoginWithGoogle, LoginEmailAndPassword } from '../../actions/authActions';
const intialState = {
    email: 'shary55@gmail.com',
    password: '123456'
}


export const LoginScreen = () => {
    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.ui)



    const [formvalue, handlechange] = useForm(intialState);
    const { email, password } = formvalue;

    const HanldeSubmit = (e) => {
        e.preventDefault();
        dispatch(LoginEmailAndPassword(email, password))
    }


    const HandleGoogleLogin = () => {
        dispatch(LoginWithGoogle(email, password))
    }




    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form onSubmit={HanldeSubmit}>
                <input type="text" placeholder="email" value={email} onChange={handlechange} name="email" autoComplete="off" className="auth__input" />
                <input type="password" placeholder="password" value={password} onChange={handlechange} name="password" autoComplete="off" className="auth__input" />
                <button type="submit" disabled={false}
                    className="btn btn-primary btn-block" disabled={loading}> {!loading ? 'Entrar' : 'Enviando...'}</button>
                <hr />
                <div className="aut__social-network">
                    <p>Login with social media</p>
                    <div
                        className="google-btn" onClick={HandleGoogleLogin}
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>21
                        <p className="btn-text">
                            <b>Sign in with google</b>
                        </p>
                    </div>
                </div>
                <Link to="/auth/register" className="link" >Create new account</Link>

            </form>
        </>
    )
}
