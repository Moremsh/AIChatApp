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
}

const Sidebar = (sidebarProps : SidebarProps) => {
  return (
    <aside className="flex flex-col w-72 border-r bg-background">
      <SideBarHeader/>
      <NewConversationBtn/>
      <ConversationList conversations={sidebarProps.conversations} />
      <SidebarFooter/>
    </aside>
  )
}

export default Sidebar
