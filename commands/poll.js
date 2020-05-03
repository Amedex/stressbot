const Discord = require('discord.js');

exports.run = async (bot, message, args, ops) => {

	if (!message.member.roles.find("name", "@everyone")) { //Whatever role you want, I pick @everyone because everyone can use this command
		message.channel.send('Invalid permissions.');
		return;
	}
    
    // Check for input
    if (!args[0]) return message.channel.send('Mod de utilizare: /poll <intrebare>');
    
    // Create Embed
    const embed = new Discord.RichEmbed()
        .setColor("#ffffff") //To change color do .setcolor("#fffff")
        .setFooter('Reactioneaza pentru a vota.')
        .setDescription(args.join(' '))
        .setTitle(`Poll creat de catre ${message.author.username}`);
        
    let msg = await message.channel.send(embed)
        .then(function (msg) {
            msg.react("✅");
            msg.react("❎"); // You can only add two reacts
            message.delete({timeout: 1000});
            }).catch(function(error) {
            console.log(error);
        });
};

exports.help = {
    name: "poll"
}