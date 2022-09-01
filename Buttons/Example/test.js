const { EmbedBuilder } = require("discord.js");

module.exports = {
    id: "example", // The buttons .setCustomId

    async execute(interaction, client, args) { // To pass a value to a button you MUST INCLUDE `client` AND `args` and in the same order as shown
        const target = args[0]
        interaction.reply({embeds: [
            new EmbedBuilder()
                .setTitle("Example button response")
                .setDescription(`Hey you clicked the example button! The user you @'d in the example command was <@${target}>`)
                .setColor("Blue")
        ], ephemeral: true})
    }
}