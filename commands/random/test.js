const commando = require("discord.js-commando");

class TestCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "test",
            group: "random",
            memberName: "test",
            description: "Tests stuff"
        });
    }

    async run(message) {
        message.reply("tested stuff.");
    }

}


module.exports = TestCommand;