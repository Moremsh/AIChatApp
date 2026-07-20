import type { Conversation } from "@/types/chat";
import { Button } from "../ui/button";
import { MessageSquare } from "lucide-react";
interface ConversationItemProp{
  conversation: Conversation;
}
const ConversationItem = ({conversation,} : ConversationItemProp) => {
  return (
    <Button variant={conversation.isActive ? "secondary" : "ghost"} className={"w-full justify-start gap-2"}>
      <MessageSquare className="w-2 h-2"/>
      <li>
        {conversation.title}
      </li>
    </Button>
    
  )
}

export default ConversationItem
