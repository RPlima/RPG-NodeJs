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
		if (command === "")
			return;
		var event = events.find(x => x.constructor.name.replace(/command/ig, "").toLowerCase() === command);

		if (event !== undefined) {
			event?.Handle(message);
		}
		else
			this.BotNotFoundMessage.Message(message, events);
	}

	public SanitazeMessege(message: Message): string {
		let stringSanitaze = message.content.slice(process.env.COMMAND_PREFIX?.length).trim().split(/ +/g).shift()?.toLowerCase();
		if (stringSanitaze !== undefined)
			return stringSanitaze;
		else
			return "";
	}

}
