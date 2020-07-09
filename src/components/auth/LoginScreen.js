import React from 'react'
import { Link } from 'react-router-dom'

export const LoginScreen = () => {
    return (
        <>
            <h3 className="auth__title">Login</h3>
            <form>
                <input type="text" placeholder="email" name="email" autoComplete="off" className="auth__input" />
                <input type="password" placeholder="password" name="password" autoComplete="off" className="auth__input" />
                <button type="submit" disabled={false}
                    className="btn btn-primary btn-block">Entrar</button>
                <hr />
                <div className="aut__social-network">
                    <p>Login with social media</p>
                    <div
                        className="google-btn"
                    >
                        <div className="google-icon-wrapper">
                            <img className="google-icon" src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="google button" />
                        </div>
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
