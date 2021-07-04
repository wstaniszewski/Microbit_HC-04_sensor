distance = 0

def on_forever():
    global distance
    distance = sonar.ping(DigitalPin.P0, DigitalPin.P1, PingUnit.CENTIMETERS)
    led.plot_bar_graph(distance, 100)
    distance = (distance-10)
    if distance > 20:
        pins.digital_write_pin(DigitalPin.P2, 1)
    else:
        pins.digital_write_pin(DigitalPin.P2, 0)
basic.forever(on_forever)
