/**
 * this file combines all reducers of the app
 *
 * Created by Tom on 03/06/18
 */

import { combineReducers } from 'redux'

import componentState from './componentReducer'
import gameState from './gameReducer'


// add all reducers here to match the initState
export default combineReducers({
    componentState,
    gameState
})
