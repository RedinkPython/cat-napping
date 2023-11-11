def on_button_pressed_a():
    global logging
    logging = not (logging)
    if True:
        basic.show_icon(IconNames.TARGET)
        music.play_sound_effect(music.builtin_sound_effect(soundExpression.hello),
            SoundExpressionPlayMode.UNTIL_DONE)
    else:
        basic.clear_screen()
input.on_button_pressed(Button.A, on_button_pressed_a)

"""

This wa made with Python

"""
logging = False
logging = False
Note

def on_every_interval():
    if logging:
        datalogger.log(datalogger.create_cv("temp", input.temperature()),
            datalogger.create_cv("light", input.light_level()))
loops.every_interval(60000, on_every_interval)
