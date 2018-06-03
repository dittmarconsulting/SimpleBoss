## Project description

Although there are many examples around how to display (not solve) the 15 Puzzle game using complicated 2D arrays or calculating distances, I thought how about using a simple array of numbers just like that:

```
[6, 15, 13, 10, 2, 3, 12, 9, 11, 8, 7, 14, 1, 5, 16, 4]
```

where the last number represents the empty tile. (9, 16 etc)

The grid size can be change in the `gameReducer.js` value `gridLength`

To move forward we just swap the clicked position of the array with position + 1 and to move backward swap position -1. Also the length of the array is determined by the `gridLength`. A 16 grid would be the exponent 2 of the grid length (4 x 4 = 16). Therefore to move downwards or upwards we just take the clicked position and add or subtract the `gridLength` value.

Since we have a straight array we can render the array in a FlatList with `numColumns` equal the `gridLength`.

## Installation

#### npm Dependency Installation

```
npm install
```

The script `postinstall` will be invoked, which changes the remote debugger to the Stand-alone debugger

Run

```
react-native run-ios
```

to run the app in the simulator.

#### Open Stand-alone Remote debugger

 While Simulator is running use Command+D to open the developer console and click on `Remote JS Debugging` to open the Stand-alone Remote Debugger
