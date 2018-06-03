/**
* the reducer for all game components
*
* Created by Tom on 03/06/18
*/

import C from '../constants'

// define the init state
const initState = {
    gridLength: 4,
    gameArray: []
}

// all reducers for the game
const gameState = (state = initState, action) => {

    switch(action.type) {

        // in case of a `gridLength` state change
        case C.SET_GRID_LENGTH:
            return {
                ...state,
                gridLength: action.payload
            }

        // in case of a `gameArray` state change
        case C.SET_GAME_ARRAY:
            return {
                ...state,
                gameArray: action.payload
            }

        default: return state
    }
}

export default gameState
