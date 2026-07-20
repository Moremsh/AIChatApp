import { mockConversations } from "@/utils/mockConversation"
import ConversationItem from "./ConversationItem"
import type { Conversation } from "@/types/chat"
import { ScrollArea } from "../ui/scroll-area"

interface ConversationListProps{
  conversations : Conversation[]
}
const ConversationList = ({conversations} : ConversationListProps) => {
  return (
    <div className="flex-1 overflow-hidden">
      <h2 className="py-4 px-2 text-sm font-medium text-muted-foreground">Recent Chats</h2>
      <ScrollArea className={"h-full px-2"}>
        <ul className="space-y-1 px-2">
          {
            conversations.map((conversation) => (
              <ConversationItem key={conversation.id} conversation={conversation}/>
            ))
          }
        </ul>
      </ScrollArea>
      
    </div>

  )
}

export default ConversationList
