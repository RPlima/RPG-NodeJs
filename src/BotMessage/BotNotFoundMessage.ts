import { Message } from "discord.js";
import { List } from "linq-typescript";
import { container, injectable, Lifecycle, scoped } from "tsyringe";

@scoped(Lifecycle.ResolutionScoped)
@injectable()
export class BotNotFoundMessage {

    public Message(message: Message, object: any): void {
        var quantityClass = object.length;
        var classNames = new Array<String>();
        for (let index = 0; index < object.length; index++) {
            classNames.push(object[index].constructor.name.replace(/command/ig, "").toLowerCase());
        }

        var text = `Olá, aqui é o Moonar e irei te ajudar!!
Não foi possível achar nada relacionado ao comando: ${message.content}
para utilizar um comando, use -moon comando
----------------------------------------------------
Atualmente possuímos ${quantityClass} comandos e eles são respectivamente:
${classNames.toString()}`;

        message.channel.send(text);
    }

}