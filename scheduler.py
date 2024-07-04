import pywhatkit as kit
import pyautogui as pg
# import os
from xvfbwrapper import Xvfb

# os.environ['DISPLAY'] = ':0'

def message_scheduler(number, msg, h, m):
    phone_number = number
    message = msg
    hour = int(h)
    minute = int(m)
    
    # Start virtual display
    vdisplay = Xvfb()
    vdisplay.start()

    try:
        # Schedule the message
        kit.sendwhatmsg(phone_number, message, hour, minute, 30)
    finally:
        # Stop virtual display
        vdisplay.stop()

        
    
# message_scheduler()


# import pywhatkit as w
# import time
# import pyautogui
# import keyboard as k
# w.sendwhatmsg("+917283820013", 'hi', 3, 43)
# pyautogui.click(1050, 950)

# time.sleep(2)
# k.press_and_release('enter')