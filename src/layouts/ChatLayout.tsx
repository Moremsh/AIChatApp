import Sidebar from "@/components/layout/Sidebar"
import ChatHeader from "@/components/chat/ChatHeader"
import ChatInput from "@/components/chat/ChatInput"
import MessageList from "@/components/chat/MessageList"
import { mockMessages } from "@/utils/mocks/mockMessages"
import { useState } from "react"
import type { Message } from "@/types/message"
import { sendMessage } from "@/services/chatService"
const ChatLayout = () => {
  const [messages , setMessages] = useState<Message[]>(mockMessages)
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (text : string) => {
    const trimmed = text.trim();

    if (!trimmed) return;

    const newMessage : Message = {
      id : crypto.randomUUID(),
      content: text ,
      createdAt: new Date(),
      role : 'user'
    }

    const updatedMessages = [...messages, newMessage]
    setMessages(updatedMessages)
    setIsLoading(true)

    try {

      
      const reply = await sendMessage(updatedMessages);

      const aiMessage : Message ={
        id : crypto.randomUUID(),
        content: reply , 
        createdAt: new Date(),
        role : "assistant"
      }

      setMessages((prev) => [...prev , aiMessage])
      setIsLoading(false)

    } catch (error) {
      const errorMessage : Message = {
        id : crypto.randomUUID(),
        content:   "⚠️ Sorry, I couldn't get a response. Please try again.",
        createdAt: new Date(),
        role : 'assistant'
      };

      setMessages((prev) => [...prev , errorMessage])
      
    }finally {
      setIsLoading(false);
    }
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
