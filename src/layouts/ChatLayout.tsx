import Sidebar from "@/components/layout/Sidebar"
import ChatHeader from "@/components/chat/ChatHeader"
import ChatInput from "@/components/chat/ChatInput"
import MessageList from "@/components/chat/MessageList"
import { mockMessages } from "@/utils/mocks/mockMessages"
const ChatLayout = () => {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 flex flex-col">
        <ChatHeader />
        <MessageList messages={mockMessages} />
        <ChatInput />
      </main>
    </div>
  )
}

export default ChatLayout
