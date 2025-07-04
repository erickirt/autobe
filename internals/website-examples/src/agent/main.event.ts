import { AutoBeAgent } from "@autobe/agent";
import { AutoBeCompiler } from "@autobe/compiler";
import OpenAI from "openai";

const agent = new AutoBeAgent({
  model: "chatgpt",
  vendor: {
    api: new OpenAI({ apiKey: "********" }),
    model: "gpt-4.1",
  },
  compiler: new AutoBeCompiler(),
});

agent.on("userMessage", (event) => {
  console.log("User message contents:", event.contents);
});
agent.on("assistantMessage", (event) => {
  console.log("Assistant message:", event.text);
});
agent.on("analyzeComplete", (event) => {
  console.log("Analyze complete:", event.files);
});
agent.on("prismaComplete", (event) => {
  console.log(
    "Prisma complete:",
    event.schemas,
    event.compiled.type === "success" ? event.compiled.document : null,
  );
});
agent.on("interfaceComplete", (event) => {
  console.log("Interface complete:", event.document, event.files);
});
agent.on("testComplete", (event) => {
  console.log("Test complete:", event.files);
});

await agent.conversate(`
  I want to create a political/economic discussion board.
  
  Since I'm not familiar with programming, 
  please write a requirements analysis report as you see fit.
`);
