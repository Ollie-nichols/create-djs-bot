/*
=============================================
    NO CHANGES SHOULD BE MADE TO THIS FILE
=============================================
*/

const signale = require("signale");
const config = require("../Data/Configs/config");

function loadCommands(client) {
    const fs = require("fs");

    let commandsArray = [];

    const commandsFolder = fs.readdirSync("./Commands");

    for(const folder of commandsFolder) {
        const commandFiles = fs.readdirSync(`./Commands/${folder}`).filter((file) => file.endsWith(".js"));

        for(const file of commandFiles) {
            const commandFile = require(`../Commands/${folder}/${file}`);

            client.commands.set(commandFile.data.name, commandFile);

            commandsArray.push(commandFile.data.toJSON());
            continue;
        }
    }
    const emptyArray = []; // Replace `commandsArray` with `emptyArray` on line 31 if you would like to clear your global slash commands
    // Line below has been commented out to stop commands from being set a global commands (if both mainGuild and global are enabled all your commands will be set twice)
    client.application.commands.set(emptyArray);
    
    const mainGuild = client.guilds.cache.get(config.guild.guild_id)
    mainGuild.commands.set(commandsArray) // Comment out this line once your bot is complete and uncomment line 31
    signale.success("Commands Loaded")
}

module.exports = { loadCommands };