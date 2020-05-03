const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setTitle("ViXer Invite Link")
   .setFooter("Bot Coded by: IceTeaFoot_#8061")
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("`Invite link:`", "https://discordapp.com/oauth2/authorize?client_id=640656227482992640&scope=bot&permissions=8")
   .setDescription("ViXer Invite link.")
   message.channel.send(serverembed);

}

exports.help = {
    name: "serverinfo"
}