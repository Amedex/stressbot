const Discord = require("discord.js"); //2018 by DRYNO


// Make sure you got this when you use a command handler!*
module.exports.run = async (bot, message, args) => {
      if (!message.channel.nsfw) return message.channel.send('Poti folosi aceasta comanda doar daca este NSFW CHANNEL!')
    let replies = ["123","abc","def"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Aici este giful tau! 🍑")
        .setColor("#FF69B4")
        .setFooter(`Requested by ${message.author.tag} 🍑`, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

// Make sure you got this when you use a command handler!*
module.exports.help = {
    name: "nsfw"
}