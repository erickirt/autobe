import { AutoBeAgent } from "@autobe/agent";
import { AutoBeCompiler } from "@autobe/compiler";
import { IAutoBeRpcListener, IAutoBeRpcService } from "@autobe/interface";
import { AutoBeRpcService } from "@autobe/rpc";
import { WebSocketRoute } from "@nestia/core";
import { Controller } from "@nestjs/common";
import OpenAI from "openai";
import { WebSocketAcceptor } from "tgrid";

@Controller("chat")
export class ChatController {
  @WebSocketRoute()
  public async start(
    // @WebSocketRoute.Param("id") id: string,
    @WebSocketRoute.Acceptor()
    acceptor: WebSocketAcceptor<
      null, // header
      IAutoBeRpcService, // provider to remote
      IAutoBeRpcListener // controller of remote
    >,
  ): Promise<void> {
    const agent: AutoBeAgent<"chatgpt"> = new AutoBeAgent({
      model: "chatgpt",
      vendor: {
        api: new OpenAI({ apiKey: "********" }),
        model: "gpt-4.1",
      },
      compiler: new AutoBeCompiler(),
    });
    const service: AutoBeRpcService<"chatgpt"> = new AutoBeRpcService({
      agent,
      listener: acceptor.getDriver(),
    });
    await acceptor.accept(service);
  }
}
