import type { Message } from "@/types/message"

interface MessageProps {
  message : Message
}

const MessageBubble = ({message} : MessageProps) => {
  const isUser = message.role === "user" ;
  return (
    <div className={`flex mt-2 ${isUser ? "justify-end":"justify-start"}`}>
      <div className={`whitespace-pre-wrap wrap-break-word rounded-xl ${isUser ? "bg-primary text-primary-foreground":"bg-muted"} max-w-[75%] px-4 py-2`}>
        {message.content}
      </div>
    </div>
  )
}

export default MessageBubble
