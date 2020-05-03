const Discord = require("discord.js") 

module.exports.run = async (bot, message, args) => {
  let pages = [`
Here you can find the order list for Original Bot.
This bot is used for utility and moderation.


All bot commands without embed with: -help2
 Created by CoronaVirus#6117
`, `
Commands [user]:

•help
•avatar
•slots
•inviteleaderboard
•smoke
•userinfo
•botstats
•coinflip
•serverinfo


`, `
Commands [STAFF]:

• kick
• purge
• mute
• unmute
• ban

`]
let page = 1;
  
  const embed = new Discord.RichEmbed() 
    .setThumbnail(bot.user.displayAvatarURL)
    .setColor(0xff2f2f) 
    .setAuthor("Help List", bot.user.displayAvatarURL)
    .setFooter(`Page ${page} of ${pages.length} • Bloody BOT`)
    .setDescription(pages[page-1])
 
  message.channel.send(embed).then(msg => {
   
    msg.react('⏪').then( r => {
          msg.react(`❎`).then( r => { 
      msg.react('⏩')
     
      // Filters - These make sure the variables are correct before running a part of code
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const delFilter = (reaction, user) => reaction.emoji.name === `❎` && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;
     
      const backwards = msg.createReactionCollector(backwardsFilter, { time: 60000 }); 
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 60000 });
      const dels = msg.createReactionCollector(delFilter, { time:100000 });

      
      backwards.on('collect', r => { 
        if (page === 1) return; 
        page--;
	embed.setAuthor("Help list", bot.user.displayAvatarURL)
        embed.setDescription(pages[page-1])
        embed.setFooter(`Page ${page} of ${pages.length} • Night-Games BOT`)
        embed.setThumbnail(bot.user.displayAvatarURL);
        msg.edit(embed) 
      })
     
      forwards.on('collect', r => {
        if (page === pages.length) return; 
        page++;
	embed.setAuthor("Help list", bot.user.displayAvatarURL)
          embed.setThumbnail(bot.user.displayAvatarURL)
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Page ${page} of ${pages.length} • Night-Games BOT`);
        msg.edit(embed) 
   
    })
          dels.on('collect', r => {
          msg.delete(1000)
        })
 
  }) 
 
})
  
})

}

exports.help = {
 name: "help",
  aliases: "h"
}
