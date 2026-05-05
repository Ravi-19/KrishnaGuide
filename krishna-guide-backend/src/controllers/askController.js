import { askService } from "../services/askService.js";

export const askQuestion = async (req, res) => {
  try {
    const { question, language = "english" } = req.body;

    if (!question) {
      return res.status(400).json({ error: "Question is required" });
    }

    const result = await askService(question, language);

    res.json(result);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong" });
  }
};