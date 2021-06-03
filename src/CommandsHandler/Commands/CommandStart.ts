import { Message } from "discord.js";
import { injectable, Lifecycle, scoped } from "tsyringe";
import { ICommands } from "../ICommands";

@scoped(Lifecycle.ResolutionScoped)
@injectable()
export class CommandStart implements ICommands {
    public Handle(message: Message): void {
        //Criar o Player
        console.log(message.author);

    }

}