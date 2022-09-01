const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js");
const config = require("./Data/Configs/config");
const { Guilds, GuildMembers, GuildMessages } = GatewayIntentBits;
const { User, Message, GuildMember } = Partials;

const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages], 
    partials: [User, Message, GuildMember]
})

const { loadEvents } = require("./Handlers/eventHandler");
const { loadCommands } = require("./Handlers/commandHandler");
const { loadButtons } = require("./Handlers/buttonHandler");

client.commands = new Collection();
client.buttons = new Collection();
client.login(config.bot.token).then(() => {
    loadEvents(client)
    loadCommands(client)
    loadButtons(client)
});