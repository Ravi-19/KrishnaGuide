import fs from "fs";

const gita = JSON.parse(
  fs.readFileSync(new URL("../data/gita.json", import.meta.url))
);

export const getRelevantVerses = async (question) => {
  const keywords = question.toLowerCase().split(" ");

  const scored = gita.map((verse) => {
    let score = 0;

    keywords.forEach((word) => {
      if (verse.meaning.toLowerCase().includes(word)) {
        score++;
      }
    });

    return { ...verse, score };
  });

  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, 3);
};