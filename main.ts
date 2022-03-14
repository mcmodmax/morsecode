/**
 * Lang
 */
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
    radio.sendNumber(0)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
})
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
/**
 * Kurz
 */
radio.setGroup(123)
