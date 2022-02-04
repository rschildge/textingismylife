input.onButtonPressed(Button.A, function () {
    position += -1
    if (position == -1) {
        position = 25
    }
    basic.showString("" + (alphabet[position]))
})
input.onGesture(Gesture.SixG, function () {
    message = message.substr(0, message.length - 1)
})
input.onButtonPressed(Button.AB, function () {
    message = "" + message + alphabet[position]
})
radio.onReceivedString(function (receivedString) {
    music.playTone(262, music.beat(BeatFraction.Whole))
    basic.showString(receivedString)
    basic.clearScreen()
    basic.showString("" + (alphabet[position]))
})
input.onButtonPressed(Button.B, function () {
    position += 1
    if (position == 26) {
        position = 0
    }
    basic.showString("" + (alphabet[position]))
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.showString(message)
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    basic.clearScreen()
    basic.showString(message)
    music.playTone(262, music.beat(BeatFraction.Whole))
    radio.sendString(message)
    message = ""
    position = 0
    basic.showString("" + (alphabet[position]))
})
let position = 0
let alphabet: string[] = []
let message = ""
message = ""
alphabet = []
for (let index = 0; index <= 25; index++) {
    alphabet.push(String.fromCharCode(index + 65))
}
basic.showString("" + (alphabet[0]))
