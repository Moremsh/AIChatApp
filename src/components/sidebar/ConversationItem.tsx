
import type { Conversation } from "@/types/conversation";
import { Button } from "../ui/button";
import { MessageSquare } from "lucide-react";
interface ConversationItemProp{
  conversation: Conversation;
  active: boolean;
  onClick: () => void;
}
const ConversationItem = ({conversation,active,onClick} : ConversationItemProp) => {
  return (
    <Button variant={active ? "secondary" : "ghost"} className={"w-full justify-start gap-2"}>
      <MessageSquare className="w-2 h-2"/>
      <li>
        {conversation.title}
      </li>
    </Button>
    
  )
}

export default ConversationItem
