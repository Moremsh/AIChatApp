import { Plus } from "lucide-react"
import { Button } from "../ui/button"



const NewConversationBtn = () => {
  return (
    <div className="border-b p-4">
      <Button  className="w-full justify-start gap-2">

        <Plus className="h-4 w-4"/>
        New Chat
      </Button>
    </div>
  )
}

export default NewConversationBtn
