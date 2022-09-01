const { Client, ActivityType } = require("discord.js");
const config = require("../../Data/Configs/config");
const mongoose = require("mongoose");
const signale = require("signale");

module.exports = {
    name: "ready",
    once: true,
    /**
     * @param {Client} client 
     */
    execute(client) {
        console.log(`Logged in as ${client.user.username}`)
        // Set bot status and Activity 
        client.user.setActivity(config.bot.status, {type: ActivityType.Watching})

        // [OPTIONAL ]Connect to MongoDB database
        if(!config.bot.database) return;
        mongoose.connect(config.bot.database, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }).then(() => signale.success("Connected to Database"))
    }
}