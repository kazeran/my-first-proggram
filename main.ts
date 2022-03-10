input.onButtonPressed(Button.A, function () {
    basic.showString("bye")
})
input.onGesture(Gesture.TiltLeft, function () {
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    music.playMelody("- G A B A - - - ", 120)
})
input.onGesture(Gesture.Shake, function () {
    basic.showNumber(9)
})
basic.showNumber(0)
basic.forever(function () {
    basic.showIcon(IconNames.Heart)
})
