radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 1) {
        music.playTone(262, music.beat(BeatFraction.Whole))
        basic.showLeds(`
            . . . . .
            . . . . .
            . . # . .
            . . . . .
            . . . . .
            `)
    } else if (receivedNumber == 2) {
        music.playTone(262, music.beat(BeatFraction.Double))
        basic.showLeds(`
            . . . . .
            . . . . .
            . # # # .
            . . . . .
            . . . . .
            `)
    } else if (receivedNumber == 0) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            `)
    }
})
/**
 * Kurz
 */
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(1)
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(187)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
/**
 * Lang
 */
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(2)
    music.playTone(262, music.beat(BeatFraction.Double))
    basic.showLeds(`
        . . . . .
        . . . . .
        . # # # .
        . . . . .
        . . . . .
        `)
})
radio.setGroup(123)
