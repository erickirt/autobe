import { TestFactory } from "../../TestFactory";
import { validate_agent_test_scenario } from "./internal/validate_agent_test_scenario";

export const test_agent_test_scenario_bbs = (factory: TestFactory) =>
  validate_agent_test_scenario(factory, "bbs-backend");
