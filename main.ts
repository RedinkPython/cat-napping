input.onButtonPressed(Button.A, function on_button_pressed_a() {
    
    logging = !logging
    if (true) {
        basic.showIcon(IconNames.Target)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
    }
    
})
let logging = false
logging = false
loops.everyInterval(60000, function on_every_interval() {
    if (logging) {
        datalogger.log(datalogger.createCV("temp", input.temperature()), datalogger.createCV("light", input.lightLevel()))
    }
    
})
Note
