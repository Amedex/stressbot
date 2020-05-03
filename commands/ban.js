const Discord = require("discord.js"); // Discord Module Required
exports.run = async (client, message, args) => { // if your cmd handler has different things than client, message etc change it
  
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply("HEI!, nu ai permisiunea de a executa aceasta comanda");

  let user = message.mentions.users.first();
  if (!user) return message.reply("Unable to find user! Mention the user! Write: ```/ban <user> <reason>``` ");

  let reason = args.join(" ");
  if(!reason) reason = "You didn't put a reason";

  message.guild.member(user).ban(reason);

  let logsEmbed = new Discord.RichEmbed() // Master is MessageEmbed
  .setTitle(":ok_hand:  Banned member")
  .setColor("#ff0000")
  .setTimestamp()
  .addField("Banned member", `${user} **[**${user.id}**]**`)
  .addField("Reason:", reason)
  .addField("Moderator:", `${message.author} **[**${message.author.id}**]**`)
  .addField("Time:", message.createdAt)

  let banEmbed = new Discord.RichEmbed()
 .setAuthor(`Chill Community-Moderation`, '')
  .setColor("#ff0000")
  .setDescription(`You have been ___**BANNED**___ by **Chill Community-Moderation**, for: \`\`\`${reason}\`\`\``)
  .addField("Information", `Moderator : ${message.author} | ${message.author.tag}\n Time : ${message.createdAt}`)
  
  user.send(banEmbed)
}
exports.help = {
  name: "ban"
}