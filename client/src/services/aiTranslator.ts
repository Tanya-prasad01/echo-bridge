import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function translateText(
  text: string,
  targetLanguage: string
): Promise<string> {
  if (!text.trim()) {
    return "";
  }

  if (!API_KEY) {
    console.error("Gemini API key is missing.");
    return "Gemini API key is missing.";
  }

  try {
    const genAI = new GoogleGenerativeAI(API_KEY);

    const model = genAI.getGenerativeModel({
      model: "gemini-3.5-flash",
    });

    const prompt = `
Translate this text into ${targetLanguage}.

Return ONLY the translated text.
Do not explain anything.

Text:
${text}
`;

    const result = await model.generateContent(prompt);

    const translatedText = result.response.text().trim();

    if (!translatedText) {
      return "No translation received.";
    }

    return translatedText;
  } catch (error: unknown) {
    console.error("Gemini translation error:", error);

    if (error instanceof Error) {
      console.error("Error message:", error.message);
      return `Translation failed: ${error.message}`;
    }

    return "Translation failed due to an unknown error.";
  }
}