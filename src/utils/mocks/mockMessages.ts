import type { Message } from "@/types/message";

export const mockMessages : Message[] = [
  {
    id: "1",
    role: "assistant",
    content: "Hello! How can I help you today?",
    createdAt: new Date(),
  },
  {
    id: "2",
    role: "user",
    content: "Explain React Hooks.",
    createdAt: new Date(),
  },
  {
    id: "3",
    role: "assistant",
    content:
      "React Hooks allow function components to use state and lifecycle features without writing classes.",
    createdAt: new Date(),
  },
];