import React, { useState } from 'react'
import { Textarea } from '../ui/textarea'
import { Button } from '../ui/button'
import { SendHorizonal } from 'lucide-react'

interface ChatInputProps {
  onSend: (message:string) => void ,
  isLoading : boolean
}
const ChatInput = ({onSend , isLoading} : ChatInputProps) => {
  const [message,setMessage] = useState("")


  const handleSend = () => {
    if (!message.trim()) return;

    console.log(message);
    onSend(message);
    setMessage("");
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLTextAreaElement>
    ) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();

      handleSend();
    }
  };

  const handleChange = (
      e: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
    setMessage(e.target.value);
  };

  return (
    <div className='border-t bg-background p-4'>
      <div className='flex items-end mx-auto max-w-3xl gap-2'>
        <Textarea 
          onKeyDown={handleKeyDown}
          value={message}
          disabled={isLoading}
          onChange={handleChange}
          className='min-h-15 resize-none' 
          placeholder='Type your message ....'
        />
        <Button onClick={handleSend} size={'icon'} disabled={!message.trim() || isLoading}>
          <SendHorizonal className='w-5 h-5'/>
        </Button>
      </div>
      
    </div>
  )
}

export default ChatInput
