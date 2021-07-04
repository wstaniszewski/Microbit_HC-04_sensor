let aver = 0
let distance = 0
basic.forever(function () {
    aver = 0
    for (let index = 0; index < 1; index++) {
        distance = sonar.ping(
        DigitalPin.P0,
        DigitalPin.P1,
        PingUnit.Centimeters
        )
        aver = distance + aver
    }
    aver = aver / 1
    aver = aver * (10 / 6)
    led.plotBarGraph(
    aver,
    100
    )
    if (aver > 30) {
        pins.digitalWritePin(DigitalPin.P2, 1)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 0)
    }
})
