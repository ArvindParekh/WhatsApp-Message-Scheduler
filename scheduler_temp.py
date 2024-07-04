from whatpack.synchronous import whats

def message_scheduler(number, msg, h, m):
    phone_number = number
    message = msg
    hour = int(h)
    minute = int(m)
    
    whats.send_what_msg(phone_no=phone_number, message=message, time_hour=hour, time_min=minute, wait_time=30)