/**
 * this is the tile component for the board
 *
 * it considers the number 16 as the empty field
 * therefore we render it width a white background color
 *
 * Created by Tom on 03/06/18
 */

import  React, { Component }  from 'react'
import PropTypes from 'prop-types'
import { TouchableOpacity, View, Text } from 'react-native'


const Tile = ({num, boardSize, gridLength, onClick}) => {

    // calculating the tile size (minus 2x 5px margin)
    const tileSize = Math.round((boardSize / gridLength) - 10)

    if(num < Math.pow(gridLength, 2)) {
        return (
            <TouchableOpacity
                style={{...styles.container, width: tileSize, height: tileSize}}
                onPress={() => onClick(num)}>
                <Text style={styles.tileText}>{num}</Text>
            </TouchableOpacity>
        )
    } else {
        return (
            <View
                style={{...styles.emptyTile, width: tileSize, height: tileSize}}>
            </View>
        )
    }


}

// define the style
const styles = {
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
        backgroundColor: '#00008B',
        elevation   : 8,
        shadowColor: 'rgba(0, 0, 0, 0.18)',
        shadowOffset: {
            width: 0,
            height: 3.5
        },
        shadowRadius: 5,
        shadowOpacity: 1
    },
    tileText: {
        fontSize: 18,
        lineHeight: 23,
        textAlign: 'center',
        color: '#fff',
        backgroundColor: 'transparent'
    },
    emptyTile: {
        margin: 5,
        backgroundColor: '#F0F8FF'
    }
}

// define the prop types
Tile.propTypes = {
    num: PropTypes.number
}

export default Tile
