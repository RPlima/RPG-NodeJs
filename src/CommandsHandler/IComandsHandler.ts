import { Message } from "discord.js";

export interface ICommandsHandler
{
    HandleCommands(message: Message): void;
}