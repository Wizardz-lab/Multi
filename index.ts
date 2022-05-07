import Discord from 'discord.js';
import { token } from './config.json';
import WOKCommands from 'wokcommands';
import path from 'path'
const client = new Discord.Client({
    intents: [
        "GUILDS",
        "GUILD_MESSAGES",
        "GUILD_MEMBERS",
    ]
});

client.on('ready', () => {
    console.log('The bot is online!');

    new WOKCommands(client, {
        commandsDir: path.join(__dirname, 'commands'),
        typeScript: true,
        testServers: '967897218969370695'
    })
});

client.login(token);