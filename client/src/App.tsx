import { useState } from "react"
import { Textarea } from "@/components/ui/textarea"
// import { Popover, PopoverTrigger, PopoverContent } from "@/components/ui/popover"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
// import { Calendar } from "@/components/ui/calendar"

export default function Component() {
  const [message, setMessage] = useState("")
  const [number, setNumber] = useState("")
  const [sendTime, setSendTime] = useState({
    date: new Date(),
    time: new Date()
  })
  const [scheduledMessages, setScheduledMessages] = useState([])
  const handleSchedule = async () => {
    if (!message) return

    const response = await fetch('http://localhost:5000/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ number, message, sendTime })
    })

    console.log(response)
    setScheduledMessages([...scheduledMessages, { message, sendTime: sendTime.toLocaleString() }])
    setMessage("")
    setSendTime(new Date())
  }
  const handleCancel = (index) => {
    const updatedMessages = [...scheduledMessages]
    updatedMessages.splice(index, 1)
    setScheduledMessages(updatedMessages)
  }
  return (
    <div className="w-full max-w-md mx-auto p-6 space-y-6 bg-gradient-to-br from-[#1e293b] to-[#0f172a] rounded-lg shadow-lg relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#4338ca] to-[#6b21a8] opacity-20 blur-3xl" />
      <div className="absolute inset-0 bg-gradient-to-br from-[#fde68a] to-[#fca5a5] opacity-10 blur-3xl" />
      <div className="relative z-10 space-y-4">
        <Input type="tel" placeholder="Enter recepient phone number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <Textarea
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full bg-[#0f172a] border-[#334155] focus:border-[#6b21a8] focus:ring-[#6b21a8] rounded-md text-white"
        />
        {/* <Popover>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="w-full justify-start bg-[#0f172a] border-[#334155] hover:bg-[#1e293b] text-white"
            >
              <CalendarIcon className="mr-2 h-4 w-4 text-[#94a3b8]" />
              {sendTime.toLocaleString()}
            </Button>
          </PopoverTrigger>
          <PopoverContent className="p-0 bg-[#0f172a] rounded-md shadow-lg">
            <Calendar
              mode="single"
              selected={sendTime}
              // onSelectedChange={setSendTime}
              onSelect={setSendTime}
              className="bg-[#0f172a] text-white"
            />
          </PopoverContent>
        </Popover> */}
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="date">Date</Label>
            <Input id="date" type="date" onChange={(e)=>setSendTime((prev)=> ({...prev, date: e.target.value}))} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="time">Time</Label>
            <Input id="time" type="time" onChange={(e)=>setSendTime((prev)=> ({...prev, time: e.target.value}))} required />
          </div>
        </div>
        <Button
          onClick={handleSchedule}
          className="w-full bg-gradient-to-r from-[#6b21a8] to-[#4338ca] text-white hover:from-[#4338ca] hover:to-[#6b21a8]"
        >
          Schedule
        </Button>
      </div>
      <div className="relative z-10 space-y-4">
        <h3 className="text-lg font-medium text-white">Scheduled Messages</h3>
        {scheduledMessages.length === 0 ? (
          <p className="text-[#94a3b8]">No scheduled messages.</p>
        ) : (
          <div className="space-y-2">
            {scheduledMessages.map((msg, index) => (
              <div key={index} className="flex items-center justify-between bg-[#0f172a] rounded-md p-4 shadow-md">
                <div>
                  <p className="text-white">{msg.message}</p>
                  <p className="text-sm text-[#94a3b8]">Send at {msg.sendTime}</p>
                </div>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCancel(index)}
                  className="text-[#94a3b8] hover:text-[#ef4444]"
                >
                  <XIcon className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

function CalendarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M8 2v4" />
      <path d="M16 2v4" />
      <rect width="18" height="18" x="3" y="4" rx="2" />
      <path d="M3 10h18" />
    </svg>
  )
}


function XIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}