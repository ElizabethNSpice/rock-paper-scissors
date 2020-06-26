input.onGesture(Gesture.Shake, function () {
    rockpaperscissorDeterminer = randint(0, 2)
    if (rockpaperscissorDeterminer == 0) {
        basic.showString("rock")
    } else if (rockpaperscissorDeterminer == 1) {
        basic.showString("paper")
    } else if (rockpaperscissorDeterminer == 2) {
        basic.showString("scissors")
    } else {
        basic.showString("error!")
    }
})
let rockpaperscissorDeterminer = 0
basic.showString("Shake me!")
