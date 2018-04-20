const commando = require("discord.js-commando");

class FacePalmCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "facepalm",
            group: "random",
            memberName: "facepal,",
            description: "Faces a palm",
            examples: ["facepalm"]
        });
    }

    async run(message) {
        var roll = Math.floor(Math.random() * 4);
        message.channel.send({
            files: [
              "./img/picard" + roll +".gif"
            ]
          });
    }

}


module.exports = FacePalmCommand;