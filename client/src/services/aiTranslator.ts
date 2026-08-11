import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(
  import.meta.env.VITE_GEMINI_API_KEY
);

export async function translateText(
  text: string,
  targetLanguage: string
): Promise<string> {
  if (!text.trim()) {
    return "";
  }

  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
  });

  const prompt = `Translate the following text into ${targetLanguage}.
Return only the translated text. Do not add explanations.

Text:
${text}`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}