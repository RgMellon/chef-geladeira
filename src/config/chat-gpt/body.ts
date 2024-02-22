import { systemMessage } from "./systemMessage";

export function makeBodyOfRequest(ingredients: string[]) {
  return {
    model: "gpt-3.5-turbo",
    messages: [
      systemMessage,
      {
        role: "user",
        content: JSON.stringify({
          intent: "get_recipe",
          ingredients,
          language: "portuguese",
        }),
      },
    ],
  };
}
