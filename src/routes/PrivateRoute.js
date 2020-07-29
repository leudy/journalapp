

import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export const PrivateRoute = ({ IsAuthenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (IsAuthenticated) ?
            (<Component {...props} />) : <Redirect to='/auth/login'></Redirect>}>
        </Route>
    )
}

PrivateRoute.propTypes = {
    IsAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}