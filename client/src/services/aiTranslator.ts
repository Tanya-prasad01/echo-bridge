import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

const genAI = new GoogleGenerativeAI(API_KEY);

export async function translateText(
  text: string,
  targetLanguage: string
): Promise<string> {
  if (!text.trim()) {
    return "";
  }

  const model = genAI.getGenerativeModel({
    model: "gemini-3.5-flash",
  });

  const prompt = `Translate the following text into ${targetLanguage}.
Return only the translated text, nothing else.

Text:
${text}`;

  const result = await model.generateContent(prompt);

  return result.response.text();
}