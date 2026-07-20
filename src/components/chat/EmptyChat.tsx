import { Bot, MessageCircle } from "lucide-react"


const EmptyChat = () => {
  return (
    <div className="flex flex-col gap-2.5 flex-1 justify-center items-center">
      <div className={`h-16 w-16 flex bg-primary rounded-full justify-center items-center text-primary-foreground`}>
        <MessageCircle className="w-8 h-8"/>
      </div>
      <div className="text-center">
        <h2 className="font-bold text-xl">How can I help you today ? </h2>
        <p className="text-sm mt-2 font-semibold text-muted-foreground">Start a conversation by typing a message below</p>
      </div>
    </div>
  )
}

export default EmptyChat
