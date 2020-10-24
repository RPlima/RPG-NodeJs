import { Message } from "discord.js";
import { injectable, Lifecycle, scoped } from "tsyringe";
import { IEvents } from "./IEvents";

@scoped(Lifecycle.ResolutionScoped)
@injectable()
export class EventHunt implements IEvents
{
    public Handle(message: Message)
    {
        //Criar charmar tudo pra Luta -> RegularFight
        console.log("texto");
    }

}