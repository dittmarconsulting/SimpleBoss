/**
 * this is the entry class for the react-native app
 *
 * it wraps the Provider, which provides all child components with the
 * data of the Redux store
 *
 * Created by Tom on 03/06/18
 */

import React, { Component } from 'react'
import { Provider } from 'react-redux'

// get the REDUX store
import store from './store'

// set the MQTT client
import Board from './pages/Board'

// exposing network requests in React Native Debugger
// TODO: comment out for production
GLOBAL.XMLHttpRequest = GLOBAL.originalXMLHttpRequest || GLOBAL.XMLHttpRequest


class App extends Component {

    render() {
        return (
            <Provider store={store}>
                <Board/>
            </Provider>
        )
    }
}

export default App
