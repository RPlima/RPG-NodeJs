import { Message } from "discord.js";

export interface IEventsHandler
{
    HandleEvents(message: Message): void;
}