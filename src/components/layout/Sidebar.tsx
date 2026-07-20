import { mockConversations } from "@/utils/mocks/mockConversation"
import ConversationItem from "../sidebar/ConversationItem"
import ConversationList from "../sidebar/ConversationList"
import NewConversationBtn from "../sidebar/NewConversationBtn"
import SidebarFooter from "../sidebar/SidebarFooter"
import SideBarHeader from "../sidebar/SideBarHeader"


const Sidebar = () => {
  return (
    <aside className="flex flex-col w-72 border-r bg-background">
      <SideBarHeader/>
      <NewConversationBtn/>
      <ConversationList conversations={mockConversations}/>
      <SidebarFooter/>
    </aside>
  )
}

export default Sidebar
