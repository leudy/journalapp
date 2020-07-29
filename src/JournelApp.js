import React from 'react'
import { AppRouter } from './routes/AppRouter'
import { Provider } from 'react-redux'
import { store } from './redux/store/store'

export const JournelApp = () => {
    return (
        <Provider store={store}>
            <AppRouter></AppRouter>
        </Provider>
    )
}
