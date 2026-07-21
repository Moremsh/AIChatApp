import { mockConversations } from "@/utils/mocks/mockConversation"
import ConversationList from "../sidebar/ConversationList"
import NewConversationBtn from "../sidebar/NewConversationBtn"
import SidebarFooter from "../sidebar/SidebarFooter"
import SideBarHeader from "../sidebar/SideBarHeader"
import type { Conversation } from "@/types/conversation"

interface SidebarProps {
  conversations: Conversation[];
  activeConversationId: string;
  onSelectConversation: (id: string) => void;
  onNewConversation : () => void
}

const Sidebar = ({conversations , activeConversationId ,onNewConversation,onSelectConversation} : SidebarProps) => {
  return (
    <aside className="flex flex-col w-72 border-r bg-background">
      <SideBarHeader/>
      <NewConversationBtn onNewConversation={onNewConversation}/>
      <ConversationList conversations={conversations} activeConversationId={activeConversationId} onSelectConversation={onSelectConversation} />
      <SidebarFooter/>
    </aside>
  )
}

export default Sidebar
