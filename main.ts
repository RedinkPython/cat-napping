input.onButtonPressed(Button.A, function () {
    logging = !(logging)
    if (true) {
        basic.showIcon(IconNames.Target)
        music.playSoundEffect(music.builtinSoundEffect(soundExpression.hello), SoundExpressionPlayMode.UntilDone)
    } else {
        basic.clearScreen()
    }
})
/**
 * Tis was made with Python, if you see this you are in code blocks and not in python
 */
let logging = false
logging = false
Note
loops.everyInterval(60000, function () {
    if (logging) {
        datalogger.log(
        datalogger.createCV("temp", input.temperature()),
        datalogger.createCV("light", input.lightLevel())
        )
    }
})
