export async function makeRecipe(body: string) {
  const API_KEY = "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";

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer " + API_KEY,
      "Content-Type": "application/json",
    },
    body,
  });

  const parseJson = await response.json();
  return parseJson.choices[0].message.content;
}
