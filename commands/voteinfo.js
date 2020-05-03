const Discord = require("discord.js")
const db = require("quick.db")

exports.run = async (client, message, args) => {
 let user = message.mentions.users.first() || message.author 
  if(!user) return message.channel.send("Please mention a user!")
  
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setTitle(`${user.username} Vote Count`)
  .addField(':green_apple: Vote', db.get(`vote.${user.id}`) ? db.get(`vote.${user.id}`) : 0, true)
  
  message.channel.send(embed)
  
}

exports.help = {
 name: "voteinfo"
}
