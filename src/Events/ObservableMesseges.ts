import { Client, Message } from "discord.js";
import { inject, injectable, Lifecycle, scoped } from "tsyringe";
import { IClient } from "../Clients/IClient";
import * as config from "../configDiscord.json";
import { IObservable } from "./IObservable"

@scoped(Lifecycle.ResolutionScoped)
@injectable()
export class ObservableMesseges implements IObservable
 {
    private iClient: IClient;

    constructor(@inject('IClient')iclient: IClient)
    {
        this.iClient = iclient;
    }

    public Observer() 
    {
        var client = this.iClient.ReturnClient() as Client;
        client.on("message", async message => {
            if (!this.AuthorizeMessege(message))
             return;

            const command = this.SanitazeMessege(message);
            client.user?.setActivity("O pai ta OoooooN");

            if (command === "ping") 
            {
                await message.channel.send("deu carai");
            }
        });
    }

    public SanitazeMessege(message: Message): string {
        let stringSanitaze = message.content.slice(config.prefix.length).trim().split(/ +/g).shift()?.toLowerCase();
        if (stringSanitaze !== undefined)
            return stringSanitaze;
        else
            return "";
    }

    public AuthorizeMessege(messege: Message): boolean {
        switch (true) {
            case messege.author.bot:
                return false;
                break;
            case messege.channel.type === "dm":
                return false;
                break;
            default:
                return true;
        }
    }

}