const commando = require("discord.js-commando");
const booru = require('booru')

class DbCommand extends commando.Command {
    constructor(client) {
        super(client, {
            name: "db",
            group: "lewds",
            memberName: "db",
            description: "*Don't let your lewds be dreams.*  ```Searches: danbooru.donmai.us``` ",
            examples: ["db [tag]"]
        });
    }
    async run(message, args ) {
        booru.search("db", [args], {limit: 1, random: true})
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
            message.reply("Did not find anything ;-;")
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

module.exports = DbCommand;