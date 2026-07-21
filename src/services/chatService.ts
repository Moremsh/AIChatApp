import type { Message } from "@/types/message";

const BASE_URL = "https://openrouter.ai/api/v1/chat/completions"
const API_KEY = import.meta.env.VITE_OPENROUTER_API_KEY;

export async function sendMessage(messages: Message[]) : Promise<string> {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "openrouter/free",
      messages: messages.map((message) => ({
        role: message.role,
        content: message.content
      })),
    }),
  });



  const data = await response.json();

  console.log("Status:", response.status);
  console.log("Response:", data);

  if (!response.ok) {
    throw new Error(`Request failed: ${response.status}`);
  }

  return data.choices[0].message.content;;
}