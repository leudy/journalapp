import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from '../../hooks/useForm'
import validator from 'validator'
import { useDispatch, useSelector } from 'react-redux'
import { SetError, RemoveError } from '../../actions/uiActions'
import { RegisterWithEmailAnPasswordName } from '../../actions/authActions'
export const RegisterScreen = () => {
    const dispatch = useDispatch();
    const { msg } = useSelector(state => state.ui)

    const intialState = {
        name: 'Shary Burgos',
        email: 'sshary55@gmail.com',
        password: '123456',
        password2: '123456'
    }
    const [formvalues, handleChanges] = useForm(intialState);
    const { name, email, password, password2 } = formvalues;


    const handleSubmit = (e) => {
        e.preventDefault();
        if (isFormValid()) {
            dispatch(RegisterWithEmailAnPasswordName(name, email, password))
        }
    }
    const isFormValid = () => {
        //TODO: terminar la validacion
        if (name.trim().length === 0) {
            dispatch(SetError('name is required'))
            return false;
        }
        else if (!validator.isEmail(email)) {
            //console.log('is no a valid email');
            dispatch(SetError('email is invalid'))
            return false
        }
        else if (password !== password2 || password.length < 5) {
            dispatch(SetError('Password should be at least 6 characters and match each other'))
            //console.log('Password should be at least 6 characters and match each other');
            return false;
        }
        console.log(password2)
        console.log(password)
        console.log('todo is ok')
        dispatch(RemoveError())
        return true;
    }
    return (
        <div>
            <h3 className="auth__title">Register</h3>
            <form onSubmit={handleSubmit}>
                {
                    msg && (
                        <div className="auth__alert-error">
                            {msg}
                        </div>)}
                <input type="text" placeholder="Name" value={name} onChange={handleChanges} name="name" autoComplete="off" className="auth__input" />
                <input type="text" placeholder="Email" value={email} onChange={handleChanges} name="email" autoComplete="off" className="auth__input" />
                <input type="password" placeholder="Password" value={password} onChange={handleChanges} name="password" autoComplete="off" className="auth__input" />
                <input type="password" placeholder="Confirm password" value={password2} onChange={handleChanges} name="password2" autoComplete="off" className="auth__input" />
                <button type="submit" disabled={false}
                    className="btn btn-primary btn-block" >Registrar</button>
                <Link to="/auth/login" className="link" style={{ marginTop: '30px' }} >Already registered</Link>
            </form>
        </div>
    )
}
