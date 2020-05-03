// Rest of your code
const Discord = require("discord.js") 
exports.run = async (client, message, args) => { // if your cmd handler has different things than client, message etc change it
/* Get the first mentioned user from the message, or, get the user by id from the guild, or get yourself :P */
let member = message.mentions.members.first() || message.guild.members.get(args[0]) || message.author;

/* Creating the embed */
let embed = new Discord.RichEmbed() 
	.setTitle(member.tag + '\' avatar')
	.setImage(member.avatarURL);

/* Sending the embed */
message.channel.send({embed})

}

exports.help = {
    name: "avatar"
}