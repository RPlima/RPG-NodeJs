import { Message } from "discord.js";
import { List } from "linq-typescript";
import { container, inject, injectable, Lifecycle, scoped } from "tsyringe";
import { BotNotFoundMessage } from "../BotMessage/BotNotFoundMessage";
import { ICommandsHandler } from "./IComandsHandler";
import { ICommands } from "./ICommands";

@scoped(Lifecycle.ResolutionScoped)
@injectable()
export class CommandsHandler implements ICommandsHandler {

	private BotNotFoundMessage: BotNotFoundMessage;
	constructor(@inject('BotNotFoundMessage') botNotFoundMessage: BotNotFoundMessage) {
		this.BotNotFoundMessage = botNotFoundMessage;
	}

	public HandleCommands(message: Message) {
		const events = container.resolveAll<ICommands>("ICommands");
		const command = this.SanitazeMessege(message);
		if (command === Array<string>())
			return;

		var event = events.find(x => x.constructor.name.toLowerCase() === command[1]);

		if (event !== undefined) {
			event?.Handle(message, command);
		}
		else
			this.BotNotFoundMessage.Message(message, events);
	}

	public SanitazeMessege(message: Message): string[] {
		//let stringSanitaze = message.content.slice(process.env.COMMAND_PREFIX?.length).trim().split(/ +/g).shift()?.toLowerCase();
		let stringSanitaze = message.content?.toLowerCase().split(" ", process.env.COMMAND_PREFIX?.length);
		if (stringSanitaze.length > 1 && stringSanitaze !== undefined) {
			stringSanitaze[1] = stringSanitaze[1].replace(/^/gm, "command");
			return stringSanitaze;
		}
		else {
			return Array<string>();
		}
	}
}
