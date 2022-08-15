input.onGesture(Gesture.Shake, function () {
    shake += 1
    if (shake > 14) {
        basic.showIcon(IconNames.Surprised)
    } else if (shake > 9) {
        basic.showIcon(IconNames.Asleep)
    }
})
input.onButtonPressed(Button.AB, function () {
    music.playTone(262, music.beat(BeatFraction.Whole))
})
let shake = 0
shake = 0
basic.forever(function () {
    if (input.lightLevel() < 10) {
        basic.showString("ZzZz")
    }
    if (input.soundLevel() > 150) {
        basic.showIcon(IconNames.Angry)
    }
})
