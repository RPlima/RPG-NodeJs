import { Message } from "discord.js";

export interface IEvents
{
    Handle(message: Message): void;
}