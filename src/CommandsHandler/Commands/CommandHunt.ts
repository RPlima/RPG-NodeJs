import { Message } from "discord.js";
import { injectable, Lifecycle, scoped } from "tsyringe";
import { ICommands } from "../ICommands";

@scoped(Lifecycle.ResolutionScoped)
@injectable()
export class CommandHunt implements ICommands
{
    public Handle(message: Message,)
    {
        //Criar charmar tudo pra Luta -> RegularFight
        console.log("texto");
    }

}