const { RichEmbed } = require('discord.js');


exports.run = async (client, message, args) => {
  
  
  if (!message.member.hasPermission("MANAGE_MESSAGES")){ 
    let embed = new RichEmbed()
      .setColor("RANDOM")
      .setTitle("You don't have permission to use this");
return message.channel.send(embed);
  }
  if (!message.guild.member(client.user).hasPermission("MANAGE_NICKNAMES")) return message.channel.send(`**${message.author.tag}** HEI!, nu ai permisiunea de a executa aceasta comanda. \`KICK_MEMBERS\` Please Give Permissions \`KICK_MEMBERS\` Firts.`)
  
  let toKick = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!toKick) return message.channel.sendMessage("Unable to find user! Mention the user! Write: ```/ kick <user> <reason>```");
  let reason = args.join(" ").slice(22);
  if (toKick.hasPermission("KICK_MEMBERS")) return message.channel.send("Can not get kicked. :(")
  
  if (toKick.highestRole.position < message.guild.member(client.user).highestRole.position) {
   message.guild.member(toKick).kick(reason);
   try {
    if (!reason) {
      toKick.send(`**${toKick.user.tag}** You have been kicked by **${message.guild.name}**`)
    } else {
      toKick.send(`**${toKick.user.tag}** You have been kicked by **${message.guild.name}**
Motiv: "${reason}"`);
    }
    let embedB = new RichEmbed()
  .setTitle(":DBClogo: Member kicked") 
  .setColor("#ff0000")
  .setTimestamp()
  .addField("Kicked User:", `${toKick} **[**${toKick.id}**]**`)
  .addField("Reason:", reason)
  .addField("Moderator:", `${message.author} **[**${message.author.id}**]**`)
  .addField("Time:", message.createdAt)
    
    let banEmbed = new RichEmbed()
    .setAuthor(`DiscordBots Community`, 'https://cdn.discordapp.com/attachments/558414106495942657/558932703119015937/DBI_logo.png')
  .setColor("#ff0000")
  .addField("Kick Information", `Moderator : ${message.author} | ${message.author.tag}\n Time : ${message.createdAt}`)
  
  toKick.send(banEmbed)
    client.channels.get("558416180088537098").send(embedB);
  } catch (e) {
    console.log(e.message)
  }
  } else {
   message.channel.send(`You can not kick **${toKick.user.tag}** because his rank is higher then yours`)
  }
}
 
exports.conf = {
  aliases: ['kick'],
  cooldown: '5'
}

exports.help = {
  name: "kick",
  description: 'Kick someone on the server [ADMIN ONLY]',
  usage: 'Kick <User> <Reason>',
  category: "MODERATION"
}