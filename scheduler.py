import pywhatkit as kit
from xvfbwrapper import Xvfb
import os

def message_scheduler(number, msg, h, m):
    phone_number = number
    message = msg
    hour = int(h)
    minute = int(m)
    
    # Start virtual display
    vdisplay = Xvfb()
    vdisplay.start()
    
    try:
        # Set the DISPLAY environment variable
        os.environ['DISPLAY'] = ':0'
        
        # Adjust permissions
        os.system("mkdir -p /tmp/.X11-unix && chmod 1777 /tmp/.X11-unix")
        
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