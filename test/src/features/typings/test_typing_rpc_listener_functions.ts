import { AutoBeEvent, IAutoBeRpcListener } from "@autobe/interface";

export const test_typing_rpc_listener_functions = () => {
  let x: keyof IAutoBeRpcListener = "analyzeComplete" as any;
  let y: AutoBeEvent.Type = "analyzeReview" as any;
  x = y;
  y = x;
};
