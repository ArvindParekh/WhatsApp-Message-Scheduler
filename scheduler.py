import pywhatkit as kit
import os
# import pyautogui as pg

# os.environ['DISPLAY'] = ':0'

def message_scheduler(number, msg, h, m):
    phone_number = number
    message = msg
    hour = int(h)
    minute = int(m)
    
    # print(phone_number, message, int(hour), int(minute))
    kit.sendwhatmsg(phone_number, message, hour, minute, 30)
        
    
# message_scheduler()


# import pywhatkit as w
# import time
# import pyautogui
# import keyboard as k
# w.sendwhatmsg("+917283820013", 'hi', 3, 43)
# pyautogui.click(1050, 950)

# time.sleep(2)
# k.press_and_release('enter')