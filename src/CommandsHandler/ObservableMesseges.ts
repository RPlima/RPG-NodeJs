import { Client, Message } from "discord.js";
import { inject, injectable, Lifecycle, scoped } from "tsyringe";
import { IClient } from "../Clients/IClient";
import { ICommandsHandler } from "./IComandsHandler";
import { IObservable } from "./IObservable"

@scoped(Lifecycle.ResolutionScoped)
@injectable()
export class ObservableMesseges implements IObservable
 {
    private IClient: IClient;
    private ICommandsHandler: ICommandsHandler;

    constructor(
        @inject('IClient')iclient: IClient,
        @inject('ICommandsHandler')ieventHandler: ICommandsHandler)
    {
        this.IClient = iclient;
        this.ICommandsHandler = ieventHandler;
    }

    public Observer() 
    {
        var client = this.IClient.ReturnClient() as Client;
        client.on("message", async message => 
        {
            if (!this.AuthorizeMessege(message))
             return;
            this.ICommandsHandler.HandleCommands(message);
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