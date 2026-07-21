import React, { useEffect, useRef } from 'react'
import EmptyChat from './EmptyChat'
import { mockMessages } from '@/utils/mocks/mockMessages'
import MessageBubble from './MessageBubble'
import type { Message } from '@/types/message'
import TypingIndicator from './TypingIndicator'

interface MessageListProp {
  messages : Message[],
  isLoading: boolean
}


const MessageList = ({messages ,isLoading} : MessageListProp) => {
  const bottomRef = useRef<HTMLDivElement>(null)

  useEffect((()=>{
    bottomRef.current?.scrollIntoView({
      behavior: 'smooth'
    })
  }),[messages,isLoading])


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
        {messages.map((message)=>(
        <MessageBubble key={message.id} message={message}/>
      ))}

        {isLoading &&  <TypingIndicator/>}
        
      </div>
      <div ref={bottomRef}/>
    </div>
  )
}

export default MessageList
