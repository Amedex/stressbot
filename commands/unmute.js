exports.run = async(bot, message, args)  => {  
  if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`HEI!, nu poti executa aceasta comanda.`)
    if (!message.guild.member(bot.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`HEI!, nu ai permisiunea de a executa aceasta comanda. \`MANAGE_ROLES\` For Doit!`)

let member = message.mentions.members.first() || message.guild.members.get(args[0]);
    if (!member) return message.channel.send(`Unable to find user! Mention the user! Write: 
**/unmute <user> <reason>** `)
    
    let mrole = message.guild.roles.find(`Muted`, "Muted")
    message.member.removeRole(mrole);

    message.channel.send(`:white_check_mark: | ${member}, ai primit unmute.`);
  }
 
exports.help = {
  name: "unmute",
  description: 'Da unmute la cineva [ADMIN ONLY]',
  usage: 'unmute <User> <Reason>',
  category: "MODERATION"
}
