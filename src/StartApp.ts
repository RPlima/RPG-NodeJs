import "reflect-metadata";
import { injectable, inject, DependencyContainer } from "tsyringe";
import { Containers } from "./Shared/Container/DiContainers";
import { IClient } from "./Clients/IClient"
import { IObservable } from "./Events/IObservable";

var registredContainers : DependencyContainer;

export class StartApp
{

    public Main() 
    {
        let containers = new Containers();
        registredContainers = containers.RegisterContainers();

        let clients = registredContainers.resolveAll<IClient>("IClient");
        clients.forEach(client => {
            client.Login();
        });
        let observables = registredContainers.resolveAll<IObservable>("IObservable");
        observables.forEach(observer => {
            observer.Observer();
        });
    }
}

new StartApp().Main();

