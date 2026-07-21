import Sidebar from "@/components/layout/Sidebar"
import ChatHeader from "@/components/chat/ChatHeader"
import ChatInput from "@/components/chat/ChatInput"
import MessageList from "@/components/chat/MessageList"
import { useState } from "react"
import type { Message } from "@/types/message"
import { sendMessage } from "@/services/chatService"
import type { Conversation } from "@/types/conversation"

const initialConversation : Conversation = {
  id: crypto.randomUUID(),
  messages: [],
  createdAt: new Date(),
  updatedAt: new Date(),
  title: "New Chat"
}

const ChatLayout = () => {
  const [conversations, setConversations] = useState<Conversation[]>([initialConversation]);
  const [activeConversationId, setActiveConversationId] = useState<string>(initialConversation.id);
  const [messages , setMessages] = useState<Message[]>([])
  const [isLoading, setIsLoading] = useState(false);
  
  // Derived Variables
  const activeConversation = conversations.find((conversation)=>(conversation.id === activeConversationId))


  const handleNewConversation = () => {
    const newConversation: Conversation = {
      id: crypto.randomUUID(),
      title: "New Chat",
      messages: [],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    setConversations((prev) => [newConversation, ...prev]);
    setActiveConversationId(newConversation.id);
  };
  
  const handleSendMessage = async (text : string) => {
    const trimmed = text.trim();

    if (!trimmed) return;

    const newMessage : Message = {
      id : crypto.randomUUID(),
      content: text ,
      createdAt: new Date(),
      role : 'user'
    }

    if (!activeConversation) return;


    const updatedMessages = [...activeConversation!.messages, newMessage]
    setConversations((prev) => 
      prev.map((conversation) => 
        conversation.id === activeConversationId 
        ? {
          ...conversation,
          title: newMessage.content.slice(0,30),
          messages: updatedMessages,
          updatedAt: new Date()
        } : conversation
      )
    )
    setIsLoading(true)

    try {

      
      const reply = await sendMessage(updatedMessages);

      const aiMessage : Message ={
        id : crypto.randomUUID(),
        content: reply , 
        createdAt: new Date(),
        role : "assistant"
      }

      const finalMessages = [
        ...updatedMessages,
        aiMessage
      ]

      setConversations((prev) =>
        prev.map((conversation) =>
          conversation.id === activeConversationId ? {
            ...conversation,
            messages:finalMessages,
            updatedAt: new Date()
          } : conversation
        )
      )
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
      <Sidebar activeConversationId={activeConversationId} conversations={conversations} onSelectConversation={setActiveConversationId} onNewConversation={handleNewConversation} />
      <main className="flex-1 flex flex-col">
        <ChatHeader />
        <MessageList messages={activeConversation?.messages ?? []} isLoading={isLoading} />
        <ChatInput onSend={handleSendMessage} isLoading={isLoading} />
      </main>
    </div>
  )
}

export default ChatLayout
