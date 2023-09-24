import { config } from 'dotenv';
import { Client, GatewayIntentBits, Routes, UserContextMenuCommandInteraction } from 'discord.js';
import { REST } from '@discordjs/rest';
import orderCommand from './commands/orders.js';
import rolesCommand from './commands/roles.js';
import userCommand from './commands/user.js';
import channelCommand from './commands/channel.js';

config();

const TOKEN = process.env.TOKEN;
const CLIENT_ID = process.env.CLIENT_ID;
const GUILD_ID = process.env.GUILD_ID;

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds, 
        GatewayIntentBits.GuildMessages, 
        GatewayIntentBits.MessageContent
    ],
});


const rest = new REST({ version: '10'}).setToken(TOKEN);


client.on('ready', () =>{
    console.log(`${client.user.tag} has logged in successfully!`);
    client.user.setActivity(`I was born!`);
});

client.on('interactionCreate', (interaction) => {
    if(interaction.isChatInputCommand()){
        const food = interaction.options.get('food').value;
        const drink = interaction.options.get('drink').value;
        interaction.reply({ content: `Hello there! You ordered ${food} and ${drink}!` });
    }
});

async function main(){

    const commands = [orderCommand, rolesCommand, userCommand, channelCommand];

    try{
        console.log('Started refreshing application (/) commands.');
        
        await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), { //HTTP REQUEST THAT WILL UPDATE ALL GUILD COMMANDS (CLIENT_ID, GUILD_ID)
            body: commands,
        });
        client.login(TOKEN);
    } catch (err) {
        console.log(err);
    }
}

main();
