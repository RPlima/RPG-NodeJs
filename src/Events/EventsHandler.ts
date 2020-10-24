import { Client, Message } from "discord.js";
import { container, inject, injectable, Lifecycle, scoped } from "tsyringe";
import { IEventsHandler } from "./IEventsHandler";
import { IEvents } from "./IEvents";

    @scoped(Lifecycle.ResolutionScoped)
    @injectable()
    export class EventsHandler implements IEventsHandler
    {
       private IEvents : IEvents;
    
       constructor(
           @inject('IEvents')ievents: IEvents
       )
       {     
           this.IEvents = ievents;
       }
    
       public HandleEvents(message: Message) 
       { 
          const events = container.resolveAll<IEvents>("IEvents");
          events.forEach(async event => 
          {
             const command = this.SanitazeMessege(message);
             const eventName = event.constructor.name.replace(/event/ig, "").toLowerCase();
             // await message.channel.send(typeof(event));

              if(eventName === command)
                event.Handle(message);
          });
       }
    
       public SanitazeMessege(message: Message): string {
          let stringSanitaze = message.content.slice(process.env.COMMAND_PREFIX?.length).trim().split(/ +/g).shift()?.toLowerCase();
          if (stringSanitaze !== undefined)
              return stringSanitaze;
          else
              return "";
      }
    }    
