/**
* this file contains all reusable utility functions for the game
*
* Created by Tom on 03/06/18
*/

/*
* function to create an array of a specific length and fill it with integers
*
* @param length (number)
* @return (array)
*/
export const createArray = length => {
    return Array.from({ length }, (v, i) => Number.parseInt(i + 1, 10))
}

/*
* function to shuffle an array
*
* @param array (array)
* @return (array)
*/
export const shuffleArray = array => {
    return array.sort(() => Math.random() - 0.5)
}

/*
* function to swap 2 numbers in an array
* @param position1 (number) - index of the number to be swapped with position 2
* @param position2 (number) - index of the number to be swapped with position 1
* @return (array)
*/
Array.prototype.swap = function (position1, position2) {
    const b = this[position1]
    this[position1]  = this[position2]
    this[position2] = b
    return this
}
