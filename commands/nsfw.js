const Discord = require("discord.js"); //2018 by DRYNO


// Make sure you got this when you use a command handler!*
module.exports.run = async (bot, message, args) => {
      if (!message.channel.nsfw) return message.channel.send('Poti folosi aceasta comanda doar daca este NSFW CHANNEL!')
    let replies = ["https://78.media.tumblr.com/8c3df486bc2f7eb0b992019ff74c812a/tumblr_osn7f1242h1vpw5nxo1_500.gif","https://cdn.boob.bot/Gifs/1890.gif","https://cdn.boob.bot/Gifs/17FA.gif","https://cdn.boob.bot/Gifs/1972.gif","https://cdn.boob.bot/Gifs/1847.gif","https://cdn.boob.bot/Gifs/160F.gif","https://cdn.boob.bot/Gifs/16B6.gif","https://cdn.boob.bot/Gifs/16B6.gif","https://cdn.boob.bot/Gifs/18A3.gif","https://cdn.boob.bot/Gifs/1713.gif","https://cdn.boob.bot/Gifs/194F.gif","https://cdn.boob.bot/Gifs/1732.gif","https://cdn.boob.bot/Gifs/1760.gif","https://cdn.boob.bot/Gifs/17DB.gif","https://cdn.boob.bot/Gifs/16AB.gif","https://cdn.boob.bot/Gifs/16F0.gif","https://cdn.boob.bot/Gifs/1668.gif","https://cdn.boob.bot/Gifs/18DB.gif","https://cdn.boob.bot/Gifs/176B.gif","https://cdn.boob.bot/Gifs/178F.gif","https://cdn.boob.bot/Gifs/188C.gif","https://cdn.boob.bot/Gifs/16E3.gif","https://cdn.boob.bot/Gifs/18EB.gif","https://cdn.boob.bot/Gifs/17B1.gif","https://cdn.boob.bot/Gifs/1832.gif","https://cdn.boob.bot/Gifs/1719.gif","https://cdn.boob.bot/Gifs/18A2.gif","https://cdn.boob.bot/Gifs/1680.gif","https://cdn.boob.bot/Gifs/1680.gif","https://cdn.boob.bot/Gifs/18B4.gif","https://cdn.boob.bot/Gifs/16CF.gif", "https://cdn.boob.bot/Gifs/1609.gif", "https://cdn.boob.bot/Gifs/15E6.gif","https://cdn.boob.bot/Gifs/15B3.gif", "https://78.media.tumblr.com/2ed7f5b5b1886a73b472d0e9f52f8b70/tumblr_o7854tvKXR1vpw5nxo1_400.gif", "https://78.media.tumblr.com/b9abb328981dc634da641b9b0f68cc40/tumblr_o4xkg71BGk1vpw5nxo1_500.gif", "https://78.media.tumblr.com/fd8e86ba904b17170f11d731e99043c2/tumblr_o4ry8qckvG1vpw5nxo1_500.gif", "https://78.media.tumblr.com/40c78b68c8ed362513d3286bf99f322f/tumblr_o4n22jlwJN1vpw5nxo1_400.gif", "https://78.media.tumblr.com/4f50555ee26b8cda1868108c57e8f2e5/tumblr_o4mmiqF2Cz1vpw5nxo1_400.gif", "https://78.media.tumblr.com/eb9a74715e65870b78535e941306307f/tumblr_o4l4ppRqat1vpw5nxo1_250.gif", "https://78.media.tumblr.com/544d5b52e112d86dc8494356118f0d15/tumblr_p9ei8wIJuf1v7dt6vo1_500.gif", "https://78.media.tumblr.com/cd7a4c688c8f5d7b05d8c092951180d1/tumblr_p91b9e2Kfh1v7dt6vo1_500.gif",
                  "https://78.media.tumblr.com/5710bafd5111f8ffa3e1d631d689f12a/tumblr_p91toahaH91v7dt6vo1_400.gif","https://nekos.life/api/v2/img/lewd","https://cdn.boob.bot/Gifs/17B2.gif","https://cdn.boob.bot/Gifs/15B3.gif","https://cdn.boob.bot/Gifs/17E9.gif","https://cdn.boob.bot/Gifs/188A.gif","https://cdn.boob.bot/Gifs/1705.gif","https://cdn.boob.bot/Gifs/1768.gif","https://cdn.boob.bot/Gifs/1979.gif","https://cdn.boob.bot/Gifs/1932.gif","https://cdn.boob.bot/Gifs/18ED.gif","https://cdn.boob.bot/Gifs/1615.gif","https://tenor.com/03VR.gif"];

    let result = Math.floor((Math.random() * replies.length));

    let gifembed = new Discord.RichEmbed()
        .setTitle("Aici este giful tau! 🍑")
        .setColor("#FF69B4")
        .setFooter(`Requested by ${message.author.tag} 🍑`, message.author.avatarURL)
        .setImage(replies[result]);

    message.channel.send(gifembed);
};

// Make sure you got this when you use a command handler!*
module.exports.help = {
    name: "nsfw"
}