import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Switch, Redirect } from 'react-router-dom'
import { AuthRouter } from './AuthRouter'
import { JournalScreen } from '../components/journal/JournalScreen'
import { firebase } from '../firebase/firebase-config'
import { useDispatch } from 'react-redux'
import { login } from '../actions/authActions'
import { LoadingPage } from '../components/system/LoadingPage'
import { PublicRoute } from './PublicRoute'
import { PrivateRoute } from './PrivateRoute'
import { StartLoading } from '../actions/noteActions'

export const AppRouter = () => {
    const dispatch = useDispatch();
    const [Checking, setChecking] = useState(true)

    const [authenticated, setauthenticated] = useState(false)



    useEffect(() => {
        firebase.auth().onAuthStateChanged(async (user) => {
            if (user?.uid) {
                dispatch(login(user.uid, user.displayName))
                dispatch(StartLoading(user.uid))
                setauthenticated(true)
            } else {
                setauthenticated(false)
            }
            setChecking(false)
        })

    }, [dispatch])


    if (Checking) {
        return <LoadingPage></LoadingPage>
    }

    return (
        <Router>
            <div>
                <Switch>
                    <PublicRoute path="/auth" IsAuthenticated={authenticated} component={AuthRouter}  ></PublicRoute>
                    <PrivateRoute exact path="/" IsAuthenticated={authenticated} component={JournalScreen}></PrivateRoute>
                    <Redirect to="/auth/login" ></Redirect>
                </Switch>

            </div>

        </Router>
    )
}
