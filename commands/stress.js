const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setTitle("1337#r00t Stresser")
   .setColor("#0099CC")
   .setThumbnail(sicon)
   .addField("**Start a stress test**", "-stress [ip] [port] [time] [method] - You should be given a attack ID")
   .addField("**Stop a stress test**", "-stop [attackid]")
   .addField("**Methods**", "LDAP\n ACK\n NTP\n UDP\n TCP\n UDP-BYPASS\n TCP-BYPASS")
   .addField("Other coming soon!")
   .setFooter(`Requested by ${message.author.tag} `, message.author.avatarURL)
   message.channel.send(serverembed);

}

exports.help = {
    name: "serverinfo"
}