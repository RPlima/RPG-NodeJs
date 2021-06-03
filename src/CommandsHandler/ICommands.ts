import { Message } from "discord.js";

export interface ICommands
{
    Handle(message: Message, command: string[]): void;
}