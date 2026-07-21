import { Plus } from "lucide-react"
import { Button } from "../ui/button"

interface NewConversationBtnProps{
  onNewConversation : () => void
}

const NewConversationBtn = ({onNewConversation} : NewConversationBtnProps) => {
  return (
    <div className="border-b p-4">
      <Button onClick={onNewConversation} className="w-full justify-start gap-2">
        <Plus className="h-4 w-4"/>
        New Chat
      </Button>
    </div>
  )
}

export default NewConversationBtn
