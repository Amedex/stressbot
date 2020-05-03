const Discord = require("discord.js");

module.exports.run = async (bot, message, args, member, guild, size) => {
  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("HEI!, nu ai permisiunea de a executa aceasta comanda");
  
    if (message.author.bot) return;

    var msg = message.content.toUpperCase();
    var args = msg.split(" ")
    if (!args[1]) return message.channel.send("`Comanda gresit !Scrie : /say (un cuvant)`");
    let arg = message.content.split(" ").slice(1);
    message.channel.send(arg.join(" "));

};

exports.help = {
    name: "say"
}