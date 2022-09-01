const { EmbedBuilder, SlashCommandBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("test")
        .setDescription("create-djs-bot example command")
        .addUserOption(option => option.setName("user").setDescription("Specify a user")),

    async execute(interaction) {
        const target = interaction.options.getUser("user")

        interaction.reply({embeds: [
            new EmbedBuilder()
                .setTitle("create-djs-bot example command")
                .setDescription("Thanks for using create-djs-bot! This is an example command using our handler. \n \n Looking to host your newly made Discord bot? \n [https://serversnow.co](https://serversnow.co) offer Discord Bot Hosting for just $0.50 per month")
                .setColor("Blue")
        ], components: [
            new ActionRowBuilder()
                .addComponents(
                    new ButtonBuilder()
                        .setCustomId(`example_${target.id}`) // Note you don't need to pass another value to the button. having just `example` would work fine.
                        .setLabel("Example Button")
                        .setEmoji("🔥")
                        .setStyle(ButtonStyle.Primary)
                )
        ], ephemeral: true}) // ephemeral makes it so only the person who ran the command can see the message
    }
}