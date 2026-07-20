import Sidebar from "@/components/layout/Sidebar"
import ChatHeader from "@/components/chat/ChatHeader"
import ChatInput from "@/components/chat/ChatInput"
import MessageList from "@/components/chat/MessageList"

const ChatLayout = () => {
  return (
    <div className="flex h-screen bg-green-400">
      <Sidebar />
      <main className="flex-1 flex flex-col bg-amber-300">
        <ChatHeader />
        <MessageList />
        <ChatInput />
      </main>
    </div>
  )
}

export default ChatLayout
