import { IAutoBeRpcListener, IAutoBeRpcService } from "@autobe/interface";
import { Driver, WebSocketConnector } from "tgrid";

const connector: WebSocketConnector<
  null,
  IAutoBeRpcListener, // provider to remote
  IAutoBeRpcService // controller of remote
> = new WebSocketConnector(null, {
  assistantMessage: async (evt) => {
    console.log("assistant", evt.text);
  },
  analyzeComplete: async (evt) => {
    console.log("analyze completed", evt.files);
  },
  prismaComplete: async (evt) => {
    console.log("prisma completed", evt.schemas);
  },
  interfaceComplete: async (evt) => {
    console.log("interface completed", evt.files);
  },
  testComplete: async (evt) => {
    console.log("test completed", evt.files);
  },
  realizeComplete: async (evt) => {
    console.log("realize completed", evt.files);
  },
});
await connector.connect("ws://localhost:3001");

const driver: Driver<IAutoBeRpcService> = connector.getDriver();
await driver.conversate("Hello, what you can do?");
