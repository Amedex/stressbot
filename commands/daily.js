const db = require('quick.db')
const Discord = require('discord.js')
const ms = require('parse-ms')

exports.run = async (bot, message, args) => {

    let cooldown = 7.2e+7,
    amount = 250

    let lastDaily = db.fetch(`lastDaily.${message.author.id}`)
    try {
    if (lastDaily !== null && cooldown - (Date.now() - lastDaily) > 0) {
        let timeObj = ms(cooldown - (Date.now() - lastDaily))

        let lastDailyEmbed = new Discord.RichEmbed()
        .setAuthor(`KaLiPsO`)
        .setColor('RED')
        .setDescription(`:dollar: | You have successfully collected the reward, for a new reward you have to wait: __**${timeObj.hours}h ${timeObj.minutes}m ${timeObj.seconds}s**__!`)
        .setFooter('Requested by: ' + message.author.tag, message.author.avatarURL)
        message.channel.send(lastDailyEmbed)
    } else {
        db.set(`lastDaily.${message.author.id}`, Date.now());
        db.add(`userBalance.${message.member.id}`, amount)
          var discord = require('discord.js')
          var embed = new Discord.RichEmbed()
          .setTitle('Daily')
          .setDescription(`:dollar: | You have successfully collected the reward, $${amount}`)
          
          .setColor('#4e9eda')
          .setFooter('Requested by: ' + message.author.tag, message.author.avatarURL)
          message.channel.send(embed)
        }
    } catch(err) {console.log(err)}
}

module.exports.help = {
  name: "daily",
  category: "ECONOMY"
}