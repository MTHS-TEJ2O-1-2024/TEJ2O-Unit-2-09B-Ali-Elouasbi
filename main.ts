/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Mr. Coxall
 * Created on: Sep 2020
 * This program ...
*/

// variables
let randomNumber: number = 0

randomNumber = -1
basic.clearScreen()
basic.showIcon(IconNames.Happy)

input.onGesture(Gesture.Shake, function () {
    randomNumber = randint(0, 1)
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
    basic.showIcon(IconNames.Yes)
})

input.onButtonPressed(Button.B, function () {
    basic.showString('score : 1')
})