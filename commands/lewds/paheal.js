const commando = require("discord.js-commando");
const booru = require('booru')

class PahealCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "paheal",
            group: "lewds",
            memberName: "paheal",
            description: "*Don't let your lewds be dreams.*  ```Searches: rule34.paheal.net``` ",
            examples: ["paheal [tag]"]
        });
    }
    async run(message, args,  ) {
        booru.search("paheal", [args], {limit: 1, random: true})
        .then(booru.commonfy)
        .then(images => {
          //Log the direct link to each image
          for (let image of images) {
            console.log(image.common.file_url)
            message.reply(image.common.file_url);
          }
        })
        .catch(err => {
          if (err.name === 'booruError') {
            //It's a custom error thrown by the package
            console.log(err.message)
            message.reply("I did not find anything ;-;")
            message.channel.send({
              files: [
                "./img/kotocry.png"
              ]
            });
          } else {
            //This means I messed up. Whoops.
            console.log(err)
          }
        })
    }
}

module.exports = PahealCommand;