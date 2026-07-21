import Sidebar from "@/components/layout/Sidebar"
import ChatHeader from "@/components/chat/ChatHeader"
import ChatInput from "@/components/chat/ChatInput"
import MessageList from "@/components/chat/MessageList"
import { mockMessages } from "@/utils/mocks/mockMessages"
import { useState } from "react"
import type { Message } from "@/types/message"
import { mockAiReplies } from "@/utils/mocks/mockAiReply"
const ChatLayout = () => {
  const [messages , setMessages] = useState<Message[]>(mockMessages)
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = (text : string) => {
    const trimmed = text.trim();

    if (!trimmed) return;
    const newMessage : Message = {
      id : crypto.randomUUID(),
      content: text ,
      createdAt: new Date(),
      role : 'user'
    }
    
    setMessages((prev) => [...prev , newMessage])
    setIsLoading(true)

    setTimeout((()=>{
      const aiMessage : Message = {
        id: crypto.randomUUID(),
        content: mockAiReplies[Math.floor(Math.random()* mockAiReplies.length)],
        createdAt: new Date(),
        role: 'assistant'
      }

      setMessages((prev) => [...prev, aiMessage])
      setIsLoading(false)

    }),1500)

  }
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <ChatHeader />
        <MessageList messages={messages} isLoading={isLoading} />
        <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
      </main>
    </div>
  )
}

export default ChatLayout
