import { TestFactory } from "../../TestFactory";
import { validate_agent_test_main } from "./internal/validate_agent_test_main";

export const test_agent_test_shopping = (factory: TestFactory) =>
  validate_agent_test_main(factory, "shopping-backend");
