/*
=============================================
    NO CHANGES SHOULD BE MADE TO THIS FILE
=============================================
*/

const { ButtonInteraction, Client } = require("discord.js");
const config = require("../../Data/Configs/config");

module.exports = {
    name: "interactionCreate",

    async execute(interaction, client) {

        if(!interaction.isButton()) return;
        const buttonCustomId = interaction.customId.split("_"); // Splits the button ID in slice(1) being the button id, slice(2) being an optional value which can be passed as a prop to the button execution file eg. Button.setCustomId(`mybutton_${target.id}`)
        const Button = client.buttons.get(buttonCustomId[0]);
        if(!Button) return;

        Button.execute(interaction, client, buttonCustomId.slice(1))
    }
}