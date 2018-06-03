/**
 * this is the main page that displays the game board
 *
 * Created by Tom on 03/06/18
 */

import  React, { Component }  from 'react'
import PropTypes from 'prop-types'
import { Platform, Dimensions, TouchableOpacity, Keyboard, FlatList, View, KeyboardAvoidingView, Image, Text } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { ActionCreator } from '../actions/index'

// component import
import Tile from '../components/Tile'

// get the screen width
const screenWidth = Dimensions.get('window').width

// calculate the board width (with side margin 50px)
const boardSize = Math.round(screenWidth - (2 * 20))



class Board extends Component {

    _onResetClicked() {
        // reset the game
        this.props.resetGame()
    }

    _onTileClicked(tileNumber) {
        this.props.swapTiles(tileNumber)
    }

    render() {

        const { gridLength, gameArray } = this.props

        // determine the button text based on whether we have an array or not
        const buttonText = gameArray.length ? 'Reset' : 'Start'

        return (
            <View style={styles.container}>

                {/* container for the board */}
                <View style={styles.boardContainer}>
                    <FlatList
                        data={gameArray}
                        extraData={gameArray}
                        numColumns={gridLength}
                        scrollEnabled={false}
                        keyExtractor={item => item }
                        renderItem={({item}) => (
                            <Tile
                                num={item}
                                gridLength={gridLength}
                                boardSize={boardSize}
                                onClick={::this._onTileClicked}
                            />
                        )}
                    />
                </View>

                {/* container for reset button */}
                <View style={styles.resetContainer}>
                    <TouchableOpacity
                        style={styles.resetButton}
                        onPress={::this._onResetClicked}>
                        <Text>{buttonText}</Text>
                    </TouchableOpacity>
                </View>

            </View>
        )
    }
}

const styles = {
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F8FF'
    },
    boardContainer: {
        width: boardSize,
        height: boardSize,
        backgroundColor: '#F0F8FF',
        elevation   : 8,
        shadowColor: 'rgba(0, 0, 0, 0.18)',
        shadowOffset: {
            width: 0,
            height: 3.5
        },
        shadowRadius: 5,
        shadowOpacity: 1
    },
    resetContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
        alignSelf: 'stretch',
        marginTop: 30
    },
    resetButton: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 150,
        height: 40,
        borderRadius: 2,
        backgroundColor: '#5F9EA0',
        elevation   : 8,
        shadowColor: 'rgba(0, 0, 0, 0.18)',
        shadowOffset: {
            width: 0,
            height: 3.5
        },
        shadowRadius: 5,
        shadowOpacity: 1
    }
}

// define the prop types
Board.propTypes = {
    resetGame: PropTypes.func.isRequired,
    swapTiles: PropTypes.func.isRequired,
    gridLength: PropTypes.number,
    gameArray: PropTypes.array
}

// pull in all required props into this container
const mapStateToProps = (state) => {
    return {
        gridLength: state.gameState.gridLength,
        gameArray: state.gameState.gameArray
    }
}

// pull all required action creators into this container
const mapDispatchToProps = (dispatch) => {
    const action = bindActionCreators(ActionCreator, dispatch)
    return {
        resetGame: action.resetGame,
        swapTiles: action.swapTiles
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
