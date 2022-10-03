let pausa = 200
for (let index = 0; index < 3; index++) {
    for (let x = 0; x <= 4; x++) {
        for (let Y = 0; Y <= 4; Y++) {
            led.plot(x, Y)
            music.playTone(988, music.beat(BeatFraction.Sixteenth))
            basic.pause(pausa)
            basic.clearScreen()
        }
    }
    basic.showIcon(IconNames.Yes)
    basic.pause(100)
    basic.clearScreen()
    pausa += -80
}
