import { Message } from "discord.js";
import { inject, injectable, Lifecycle, scoped } from "tsyringe";
import { BotNotFoundMessage } from "../../BotMessage/BotNotFoundMessage";
import { ICommands } from "../ICommands";

@scoped(Lifecycle.ResolutionScoped)
@injectable()
export class CommandHelp implements ICommands {
    private BotNotFoundMessage: BotNotFoundMessage;

    constructor(@inject('BotNotFoundMessage') botNotFoundMessage: BotNotFoundMessage) {
        this.BotNotFoundMessage = botNotFoundMessage;
    }

    public Handle(message: Message) {
        switch (message.content) {
            case "help":
                //this.BotNotFoundMessage.Message(message);
                break;
            default:
                break;
        }
    }

}