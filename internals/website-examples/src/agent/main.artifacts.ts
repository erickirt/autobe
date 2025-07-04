import { AutoBeAgent } from "@autobe/agent";
import { AutoBeCompiler } from "@autobe/compiler";
import OpenAI from "openai";

declare function makeProject(files: Record<string, string>): Promise<void>;

const agent = new AutoBeAgent({
  model: "chatgpt",
  vendor: {
    api: new OpenAI({ apiKey: "********" }),
    model: "gpt-4.1",
  },
  compiler: new AutoBeCompiler(),
});
await agent.conversate(`
  I want to create a political/economic discussion board.
  
  Since I'm not familiar with programming, 
  please write a requirements analysis report as you see fit.
`);
await agent.conversate("Design the database schema.");
await agent.conversate("Create the API interface specification.");
await agent.conversate("Make the e2e test functions.");
await agent.conversate("Write the implementation code.");

const files: Record<string, string> = await agent.getFiles({
  dbms: "postgres",
});
await makeProject(files);
