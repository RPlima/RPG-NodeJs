import { container } from "tsyringe";
// Users RepositoryC:\Users\Pichau\Desktop\RPG-NodeJs\src\Model\Player.ts
import { Player } from "../../Model/Player";
import { Monster } from "../../Model/Monster";
import { ObservableMesseges } from "../../Events/ObservableMesseges";
import { IObservable } from "../../Events/IObservable";
import { Client } from "discord.js";
import { IClient } from "../../Clients/IClient";
import { ClientDiscord } from "../../Clients/ClientDiscord";

export class Containers
{
    public RegisterContainers()
    {
        container.register<Player>("Player", Player);
        container.register<Monster>("Monster", Monster);
        container.registerSingleton<Client>("Client", Client);
        container.register<IClient>("IClient", ClientDiscord);
        container.register<IObservable>("IObservable",ObservableMesseges);
        return container;
    }
}
