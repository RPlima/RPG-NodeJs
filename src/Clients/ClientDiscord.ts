import { Client } from "discord.js";
import { inject, injectable, singleton } from "tsyringe";
import { IClient } from "./IClient";

@singleton()
@injectable()
export class ClientDiscord implements IClient
{
    private client : Client;
    constructor(@inject('Client') client: Client)
    {
        this.client = client;
    }

    public ReturnClient(): Client {
        return this.client;
    }

    public Login()
    {
        this.client.on("ready", () =>{
            this.client.user?.setStatus("online");
            this.client.user?.setActivity("O pai ta ON");
        });
        this.client.login(process.env.DISCORD_TOKEN);
    }
}