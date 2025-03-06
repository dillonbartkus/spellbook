import OpenAI from "openai";
import dotenv from "dotenv";
dotenv.config();

console.log(process.env.API_KEY);

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

const completion = openai.chat.completions.create({
  model: "gpt-4o-mini",
  store: true,
  messages: [
    {
      role: "user",
      content:
        "generate a new random D&D 5th edition spell using the existing base 5th edition spellbook as an example",
    },
  ],
});

completion.then((result) => console.log(result.choices[0].message));
