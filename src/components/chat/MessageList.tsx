import React from 'react'
import EmptyChat from './EmptyChat'
import { mockMessages } from '@/utils/mocks/mockMessages'
import MessageBubble from './MessageBubble'
import type { Message } from '@/types/message'

interface MessageListProp {
  messages : Message[]
}


const MessageList = ({messages} : MessageListProp) => {
  if(messages.length === 0){
    return(
      <div className='flex flex-1'>
        <EmptyChat/>
      </div>
    ) 
  }

  return (
    <div className='flex-1 overflow-y-auto p-6'>
      <div className='mx-auto max-w-3xl space-y-4 p-6'>
        {mockMessages.map((message)=>(
        <MessageBubble key={message.id} message={message}/>
      ))}
      </div>
      
    </div>
  )
}

export default MessageList
