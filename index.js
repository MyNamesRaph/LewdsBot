const config = require("./config")
const commando = require("discord.js-commando");
const bot = new commando.Client(config.client);
const booru = require('booru')
const sqlite = require('sqlite');

bot.setProvider(
    sqlite.open(__dirname + '/settings.sqlite3').then(db => new commando.SQLiteProvider(db))
).catch(console.error);

bot.registry.registerGroups([
    ["random", "Random"],
    ["lewds", "Lewds"]
]);
bot.registry.registerDefaults();
bot.registry.registerCommandsIn(__dirname + "/commands");



bot.login(config.token);


