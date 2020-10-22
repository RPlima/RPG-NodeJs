import { Client } from "discord.js";
import "reflect-metadata";
import { injectable, inject } from 'tsyringe';
import { Containers } from './Shared/Container/DiContainers';

@injectable()
export class StartApp
{
    public Main() 
    {
        let containers = new Containers();
        containers.RegisterContainers();
        // let clientDiscord = new StartClientDiscord().StartClient();
        // let HandlerMesseges = new HandlerMessege();
        // HandlerMesseges.Handle(client);
    }
}

const runApp = new StartApp().Main();
