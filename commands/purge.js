const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("HEI!, nu ai permisiunea de a executa această comandă.");
  if(!args[0]) return message.channel.send(" -purge (0-100)");
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} messages deleted!`)
});

}

exports.help = {
  name: "purge",
  description: 'Da purge la chat [ADMIN ONLY]',
  usage: 'purge <User> <Reason>',
  category: "MODERATION"
}