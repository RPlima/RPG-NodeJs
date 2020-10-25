import {token, owners} from "./DiscordConfig";
import {Client} from "discord.js";

const client = new Client;

client.on('message', (message) => {
    console.log(message.content);
}
);

client.login(token);
