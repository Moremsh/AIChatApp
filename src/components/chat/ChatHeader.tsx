import ConversationTitle from "./ConversationTitle"
import ModelSelector from "./ModelSelector"

const ChatHeader = () => {
  return (
    <header className="flex justify-between px-4 py-2 border-b">
      <ConversationTitle title={"React Interview"}/>
      <ModelSelector/>
    </header>
  )
}

export default ChatHeader
