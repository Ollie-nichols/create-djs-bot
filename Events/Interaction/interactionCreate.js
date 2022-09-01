/*
=============================================
    NO CHANGES SHOULD BE MADE TO THIS FILE
=============================================
*/

module.exports = {
    name: "interactionCreate",

    execute(interaction, client) {
        if(!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName);

        if(!command) return interaction.reply({content: "This command has not refreshed"});

        command.execute(interaction, client);
    }
}