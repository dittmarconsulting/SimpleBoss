/**
 * this is the REDUX store setup
 *
 * Created by Tom on 03/06/18
 */

import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import * as storage from 'redux-storage'
import createEngine from 'redux-storage-engine-reactnativeasyncstorage'


import rootReducer from './reducers/index'
import { ActionCreator } from './actions/index'
import { storageKey } from './config'

import C from './constants'

// link the combineReducer to the sync storage
const reducer = storage.reducer(rootReducer)

// create the engine with the key from the config file
const engine = createEngine(storageKey)

// create the engine middleware
//const engineMiddleware = storage.createMiddleware(engine)

// https://github.com/zalmoxisus/redux-devtools-extension
const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
            // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
            ActionCreator
        }) : compose

// combine middleware
const enhancer = composeEnhancers(
    applyMiddleware(
        thunk,
        //engineMiddleware
    )
)

// create the redux store (passing the an empty object and init state)
const store = createStore(reducer, {}, enhancer)

// ONLY FOR DEBUGGING - ACCESS STORE IN CONSOLE window.store.dispatch()
// NOTE: change the execution environment in the Chrome console
// from the default <top frame> to <debuggerWorker.js>
window.reduxStore = store

// load the saved store and update the store with the saved version
// const load = storage.createLoader(engine)
// load(store)
//     .then(() => {
//
//         // set the flag 'storeSynced' to true
//         store.dispatch({
//             type: C.STORE_SYNCED,
//             payload: true
//         })
//     })
//     .catch(() => {
//         console.log('Failed to load previous state')
//     })

export default store
