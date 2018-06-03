/**
 * action creators for the game
 *
 * Created by Tom on 03/05/18
 */
import { createArray, shuffleArray } from '../utility/gameLogic'
import C from '../constants'
/*
 * set the board grid length (width & height)
 *
 * @param length (number)
 * @return (object)
 */
export const setGridLength = length => {
    return {
        type: C.SET_GRID_LENGTH,
        payload: length
    }
}

/*
 * set the game array of numbers
 *
 * @param array (array)
 * @return (object)
 */
export const setGameArray = array => {
    return {
        type: C.SET_GAME_ARRAY,
        payload: array
    }
}


// reset the game by creating a new array
export const resetGame = () =>
    (dispatch, getState) => {

        // get the length of grid length
        const gridLength = getState().gameState.gridLength

        if(gridLength) {

            // create a new array
            const gameArray = createArray(gridLength * gridLength)

            // shuffle the array
            const shuffledArray = shuffleArray(gameArray)

            // put it into store
            dispatch(setGameArray(shuffledArray))
        }
    }

// action creator that swaps numbers in the array based on the rules
export const swapTiles = (tileNumber) =>
    (dispatch, getState) => {

        // get the length of grid length
        const gridLength = getState().gameState.gridLength

        // get a copy of the the array
        const gameArray = [...getState().gameState.gameArray]

        // get the position of the tile to be moved
        const tilePosition = gameArray.indexOf(tileNumber)

        // get the empty tile position
        const emptyPosition = gameArray.indexOf(Math.pow(gridLength, 2))

        let canMove = false
        let movePosition = -1

        // forward
        if(tilePosition + 1 === emptyPosition) {
            canMove = true
            movePosition = tilePosition + 1
        }

        // downward
        if(tilePosition + gridLength === emptyPosition) {
            canMove = true
            movePosition = tilePosition + gridLength
        }

        // backward
        if(tilePosition - 1 === emptyPosition) {
            canMove = true
            movePosition = tilePosition - 1
        }

        // upward
        if(tilePosition - gridLength === emptyPosition) {
            canMove = true
            movePosition = tilePosition - gridLength
        }

        // check if tile can move
        if(canMove) {

            // swap position
            const swappedArray = gameArray.swap(tilePosition, movePosition)

            dispatch(setGameArray(swappedArray))
        }
    }
