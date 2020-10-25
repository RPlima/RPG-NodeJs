import { Message } from "discord.js";
import { container, injectable, Lifecycle, scoped } from "tsyringe";
import { ICommandsHandler } from "./IComandsHandler";
import { ICommands } from "./ICommands";

    @scoped(Lifecycle.ResolutionScoped)
    @injectable()
    export class CommandsHandler implements ICommandsHandler
    {
    
       public HandleCommands(message: Message) 
       { 
          const events = container.resolveAll<ICommands>("ICommands");
          events.forEach(async event => 
          {
             const command = this.SanitazeMessege(message);
             const eventName = event.constructor.name.replace(/command/ig, "").toLowerCase();
             console.log(`${command} ${eventName}`);
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
