import { container, DependencyContainer } from "tsyringe";
// Users RepositoryC:\Users\Pichau\Desktop\RPG-NodeJs\src\Model\Player.ts
import { Player } from "../../Model/Player";
import { Monster } from "../../Model/Monster";
import { ObservableMesseges } from "../../CommandsHandler/ObservableMesseges";
import { IObservable } from "../../CommandsHandler/IObservable";
import { Client } from "discord.js";
import { IClient } from "../../Clients/IClient";
import { ClientDiscord } from "../../Clients/ClientDiscord";
import { CommandsHandler } from "../../CommandsHandler/CommandsHandler";
import { CommandHunt } from "../../CommandsHandler/Commands/CommandHunt";
import { ICommandsHandler } from "../../CommandsHandler/IComandsHandler";
import { ICommands } from "../../CommandsHandler/ICommands";
import { CommandStart } from "../../CommandsHandler/Commands/CommandStart";

export class Containers
{
    public RegisterContainers()
    {
        container.register<Player>("Player", Player);
        container.register<Monster>("Monster", Monster);
        container.registerSingleton<Client>("Client", Client);
        container.register<IClient>("IClient", ClientDiscord);
        container.register<IObservable>("IObservable", ObservableMesseges);
        container.register<ICommandsHandler>("ICommandsHandler", CommandsHandler);
        container.register<ICommands>("ICommands", CommandHunt);
        container.register<ICommands>("ICommands", CommandStart)
        
        return container;
    }
}
