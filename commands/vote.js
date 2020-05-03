const Discord = require("discord.js")
const db = require("quick.db")
const bot = new Discord.Client();
const ms = require("parse-ms")


exports.run = async (client, message, args) =>  {
  var msg = message
  let cooldown = 8.64e+7
  let mentioned = (msg.mentions.users.first())
  if(!mentioned) return message.channel.send(`Please mention a user!`);
  if(mentioned.id === msg.author.id) return message.channel.send("You can't vote yourself")
  let cooldownt = db.get(`cooldown.${msg.author.id}`)
  let timeObj = ms(cooldown - (Date.now() - cooldown))
  if (!mentioned) return msg.channel.send("Please mention a user!")
  try {
  if (cooldownt !== null && cooldown - (Date.now() - cooldownt) > 0) {
     msg.channel.send(`Ai dat puncte de repuție ceva timp în urmă. Vă rugăm să așteptați **${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s**`)        
  
  } else { //lanjut lah
    db.add(`vote.${mentioned.id}`, + 1) //awkwk
    db.set(`cooldown.${msg.author.id}`, Date.now()) // :v
    msg.channel.send(`:tada: You alredy voted someone! **@${mentioned.tag}**`) 
  }
  } catch (e) {
    console.log(e)
  }
}

module.exports.help = {
  name: "vote",
  category: "ECONOMY"
}