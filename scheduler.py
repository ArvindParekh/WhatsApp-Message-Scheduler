import pywhatkit as kit
import os
import pyautogui as pg

os.environ['DISPLAY'] = ':0'

def message_scheduler():
    phone_number = "+917283820013"
    message = "hello hello"
    hour = 4
    minute = 11
    
    kit.sendwhatmsg(phone_number, message, hour, minute, 30)
        
    
message_scheduler()


# import pywhatkit as w
# import time
# import pyautogui
# import keyboard as k
# w.sendwhatmsg("+917283820013", 'hi', 3, 43)
# pyautogui.click(1050, 950)

# time.sleep(2)
# k.press_and_release('enter')