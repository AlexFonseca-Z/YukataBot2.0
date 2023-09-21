import { config } from 'dotenv';
import { Client, GatewayIntentBits } from 'discord.js';

config();

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent]});

client.login(process.env.TOKEN);

client.on('ready', () =>{
    console.log(`${client.user.tag} has logged in successfully!`);
})

client.on('messageCreate', (message) => {
    console.log(message.content);
    console.log(message.createdAt.toDateString());
    console.log(message.author);
});
