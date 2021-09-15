function make_coin () {
    led.unplot(Coin_x, Coin_y)
    Coin_x = randint(0, 4)
    Coin_y = randint(0, 4)
    led.plot(Coin_x, Coin_y)
}
input.onButtonPressed(Button.A, function () {
    if (X > 0) {
        led.unplot(X, Y)
        X += -1
        led.plot(X, Y)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Y < 4) {
        led.unplot(X, Y)
        Y += 1
        led.plot(X, Y)
    }
})
input.onButtonPressed(Button.B, function () {
    if (X < 4) {
        led.unplot(X, Y)
        X += 1
        led.plot(X, Y)
    }
})
input.onGesture(Gesture.Shake, function () {
    if (Y > 0) {
        led.unplot(X, Y)
        Y += -1
        led.plot(X, Y)
    }
})
let Coin_y = 0
let Coin_x = 0
let Y = 0
let X = 0
game.setScore(0)
X = 2
Y = 2
led.plot(X, Y)
loops.everyInterval(500, function () {
    led.toggle(Coin_x, Coin_y)
    if (X == Coin_x && Y == Coin_y) {
        game.addScore(3)
    }
})
