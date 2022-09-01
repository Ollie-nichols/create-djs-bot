
const config = {
    bot: {
        token: "", // [REQUIRED] Your Discord bot token
        database: "", // [OPTIONAL] Your MongoDB connection string
        status: "ServersNow.co", // Discord status message (Update the status type in ready.js line 15)
    },
    guild: {
        guild_id: "" // [REQUIRED] Your Test/Dev server ID
    }
}

module.exports = config;