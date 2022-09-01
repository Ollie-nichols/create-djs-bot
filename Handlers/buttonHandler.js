/*
=============================================
    NO CHANGES SHOULD BE MADE TO THIS FILE
=============================================
*/

const signale = require("signale");

function loadButtons(client) {
    const fs = require("fs")

    const buttonsFolder = fs.readdirSync("./Buttons");

    for(const folder of buttonsFolder) {
        const buttonFiles = fs.readdirSync(`./Buttons/${folder}`).filter((file) => file.endsWith(".js"));

        for(const file of buttonFiles) {
            const buttonFile = require(`../Buttons/${folder}/${file}`);
            if(!buttonFile.id) return;

            client.buttons.set(buttonFile.id, buttonFile)
        }
        signale.success("Buttons Loaded")
    }
}
module.exports = { loadButtons };