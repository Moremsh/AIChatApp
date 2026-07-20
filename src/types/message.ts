export type MessageRole = "user" | "assistant"

export interface Message {
  id : string;
  role : MessageRole;
  createdAt : Date;
  content : string ; 
}