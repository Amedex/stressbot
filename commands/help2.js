const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  let online = message.guild.members.filter(member => member.user.presence.status !== 'offline');
  let day = message.guild.createdAt.getDate()
  let month = 1 + message.guild.createdAt.getMonth()
  let year = message.guild.createdAt.getFullYear()
   let sicon = message.guild.iconURL;
   let serverembed = new Discord.RichEmbed()
   .setTitle("```Night-Games BOT Commands```")
   .setFooter("Bot Coded by: CoronaVirus#6117")
   .setColor("#7289DA")
   .setThumbnail(sicon)
   .addField("MODERATION COMMANDS","========================")
   .addField("kick someone(Need Kick Permission)", "-kick")
   .addField("(Need Administrator Permission)", "-mute")
   .addField("UnMute Someone(Need Administrator Perms)", "-unmute")
   .addField("Ban someone(Need Ban Permission)", "-ban")
   .addField("Create a poll", "-poll")
   .addField("delete a number of messages", "-purge")
   .addField("make the bot say your custom message", "-say")
   .addField("FUN COMMANDS","========================")
   .addField("Sends a message with your avatar", "-avatar")
   .addField("Coinflip command", "-coinflip")
   .addField("You smoke a Joint Nigga!", "-smoke")
   .addField("Shows The Server info", "-serverinfo")
   .addField("OTHER COMMANDS","========================")
   .addField("Shows the leaderboard of invites(Sometimes it's bugged)", "-inviteleaderboard")
   .addField("Bot will send you an invite link for the bot.", "-invite")
   .addField("NSFW Animated GIF/Photo", "-nsfw")
   .setDescription("All Night-Games BOT Commands")
   message.channel.send(serverembed);

}

exports.help = {
    name: "serverinfo"
}