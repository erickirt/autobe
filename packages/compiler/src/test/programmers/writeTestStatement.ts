import { AutoBeTest } from "@autobe/interface";
import ts from "typescript";

import { AutoBeTestStatementProgrammer } from "./AutoBeTestStatementProgrammer";
import { IAutoBeTestProgrammerContext } from "./IAutoBeTestProgrammerContext";

export const writeTestStatement = (
  ctx: IAutoBeTestProgrammerContext,
  stmt: AutoBeTest.IStatement,
): ts.Statement[] => {
  const next: ts.Statement | ts.Statement[] = AutoBeTestStatementProgrammer[
    stmt.type
  ](ctx, stmt as any);
  return Array.isArray(next) ? next : [next];
};
