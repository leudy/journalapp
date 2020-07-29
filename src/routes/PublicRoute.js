

import React from 'react'
import PropTypes from 'prop-types'
import { Route, Redirect } from 'react-router-dom'

export const PublicRoute = ({ IsAuthenticated, component: Component, ...rest }) => {
    return (
        <Route {...rest} component={(props) => (IsAuthenticated) ?
            (<Redirect to='/'></Redirect>) :
            (<Component {...props} />)}>
        </Route>
    )
}

PublicRoute.propTypes = {
    IsAuthenticated: PropTypes.bool.isRequired,
    component: PropTypes.func.isRequired
}