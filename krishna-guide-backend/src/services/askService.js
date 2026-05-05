import { getRelevantVerses } from "./retrievalService.js";
import { buildPrompt } from "./promptService.js";
import { callGemini } from "./aiService.js";

export const askService = async (question, language) => {
  const verses = await getRelevantVerses(question);

  const prompt = buildPrompt(question, verses, language);

  const answer = await callGemini(prompt);

  return { answer, verses };
};