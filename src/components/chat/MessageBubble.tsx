import type { Message } from "@/types/message"
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface MessageProps {
  message : Message
}

const MessageBubble = ({message} : MessageProps) => {
  const isUser = message.role === "user" ;
  return (
    <div className={`flex mt-2 ${isUser ? "justify-end":"justify-start"}`}>
      {message.role === 'user' ? (
          <div className={`whitespace-pre-wrap wrap-break-word rounded-xl ${isUser ? "bg-primary text-primary-foreground":"bg-muted"} max-w-[75%] px-4 py-2`}>
            {message.content}
          </div>
        ) : 
        (
          <div className={`whitespace-pre-wrap wrap-break-word rounded-xl ${isUser ? "bg-primary text-primary-foreground":"bg-muted"} max-w-[75%] px-4 py-2`}>
            <div
              className="
                prose
                prose-sm
                dark:prose-invert
                max-w-none
              "
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {message.content}
              </ReactMarkdown>
            </div>
          </div>
        )}
    </div>
  )
}

export default MessageBubble
