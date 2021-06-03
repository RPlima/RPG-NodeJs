import { Message } from "discord.js";
import { injectable, Lifecycle, scoped } from "tsyringe";

@scoped(Lifecycle.ResolutionScoped)
@injectable()
export class GeneralHelpMessages
{
    public Message(message: Message, object?: any): void 
    {
        return;
    }
}