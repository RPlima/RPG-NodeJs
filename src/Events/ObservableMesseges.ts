import { Client, Message } from "discord.js";
import { inject, injectable, Lifecycle, scoped } from "tsyringe";
import { IClient } from "../Clients/IClient";
import { IEventsHandler } from "./IEventsHandler";
import { IObservable } from "./IObservable"

@scoped(Lifecycle.ResolutionScoped)
@injectable()
export class ObservableMesseges implements IObservable
 {
    private IClient: IClient;
    private IEventsHandler: IEventsHandler;

    constructor(
        @inject('IClient')iclient: IClient,
        @inject('IEventsHandler')ieventHandler: IEventsHandler)
    {
        this.IClient = iclient;
        this.IEventsHandler = ieventHandler;
    }

    public Observer() 
    {
        var client = this.IClient.ReturnClient() as Client;
        client.on("message", async message => 
        {
            if (!this.AuthorizeMessege(message))
             return;
            this.IEventsHandler.HandleEvents(message);
            // if (command === "ping") 
            // {
            // }
        });
    }

    public AuthorizeMessege(messege: Message): boolean {
        switch (true) {
            case messege.author.bot:
                return false;
            case messege.channel.type === "dm":
                return false;
            default:
                return true;
        }
    }
}