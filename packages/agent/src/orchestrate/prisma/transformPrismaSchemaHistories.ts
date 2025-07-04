import { IAgenticaHistoryJson } from "@agentica/core";
import { AutoBeAnalyzeHistory } from "@autobe/interface";
import { v4 } from "uuid";

import { AutoBeSystemPromptConstant } from "../../constants/AutoBeSystemPromptConstant";

export const transformPrismaSchemaHistories = (
  analyze: AutoBeAnalyzeHistory,
  component: {
    filename: string;
    tables: string[];
    entireTables: string[];
  },
): Array<
  IAgenticaHistoryJson.IAssistantMessage | IAgenticaHistoryJson.ISystemMessage
> => {
  return [
    {
      id: v4(),
      created_at: new Date().toISOString(),
      type: "systemMessage",
      text: AutoBeSystemPromptConstant.PRISMA_SCHEMA,
    },
    {
      id: v4(),
      created_at: new Date().toISOString(),
      type: "systemMessage",
      text: [
        "Before making prisma schema files,",
        "learn about the prisma schema language",
        "from the best practices and examples",
        "",
        AutoBeSystemPromptConstant.PRISMA_EXAMPLE,
      ].join("\n"),
    },
    {
      id: v4(),
      created_at: new Date().toISOString(),
      type: "assistantMessage",
      text: [
        "Here is the requirement analysis report.",
        "",
        "Call the provided tool function to generate Prisma DB schema",
        "referencing below requirement analysis report.",
        "",
        "## User Request",
        analyze.reason,
        "",
        `## Requirement Analysis Report`,
        "",
        "```json",
        JSON.stringify(analyze.files),
        "```",
        "",
        "## Context",
        "",
        `  - Target filename: ${component.filename}`,
        `  - Tables what you have to make:`,
        ...component.tables.map((table) => `    - ${table}`),
        `  - Entire tables you can reference:`,
        ...component.entireTables.map((table) => `    - ${table}`),
      ].join("\n"),
    },
  ];
};
