import { IAgenticaVendor } from "@agentica/core";
import {
  AutoBeEvent,
  AutoBeHistory,
  IAutoBeCompiler,
  IAutoBeGetFilesOptions,
} from "@autobe/interface";
import { ILlmSchema } from "@samchon/openapi";

import { IAutoBeConfig } from "../structures/IAutoBeConfig";
import { AutoBeState } from "./AutoBeState";
import { AutoBeTokenUsage } from "./AutoBeTokenUsage";

export interface AutoBeContext<Model extends ILlmSchema.Model> {
  model: Model;
  vendor: IAgenticaVendor;
  config: IAutoBeConfig | undefined;
  compiler: IAutoBeCompiler;
  files: (options: IAutoBeGetFilesOptions) => Promise<Record<string, string>>;
  histories: () => AutoBeHistory[];
  state: () => AutoBeState;
  usage: () => AutoBeTokenUsage;
  dispatch: (event: AutoBeEvent) => void;
}
