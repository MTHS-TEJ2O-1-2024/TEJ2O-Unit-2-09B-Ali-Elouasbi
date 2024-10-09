/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Ali
 * Created on: Oct 2024
 * This program plays rock, paper, Scissors
*/

// variables
let randomNumber: number = 0
let result = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 2)
    basic.clearScreen()

    // if randomNumber was 0
    if (randomNumber == 0) {
        basic.showIcon(IconNames.Square)
    }

    // if randomNumber was 1
    if (randomNumber == 1) {
        basic.showIcon(IconNames.SmallSquare)
    }

    // if randomNumber was 2
    if (randomNumber == 2) {
        basic.showIcon(IconNames.Scissors)
    }
    // pasue and show you are ready again
    basic.pause(1000)
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.A, function () {
    result = result +1
    basic.showIcon(IconNames.Yes)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    basic.showString('Score:' + result)
    basic.showIcon(IconNames.Happy)
})