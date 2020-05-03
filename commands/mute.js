exports.run = async (client, message, args) => {
    if (!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send(`HEI!, nu poti executa aceasta comanda!`)
    if (!message.guild.member(client.user).hasPermission("MANAGE_ROLES")) return message.channel.send(`HEI!, nu ai permisiunea de a executa această comandă. \`MANAGE_ROLES\` For Doit!`)

    let member = message.mentions.members.first() || message.guild.members.get(args[0]);
     if (!member) return message.channel.send(`Comanda gresit,comanda cea buna este:
**/mute <user> <reason>** `  )
    
    let muterole = message.guild.roles.find(x => x.name === 'Muted');
    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: 'Muted',
                color: '#000000',
                permission: []
            });
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                
                });
            });
        } catch(e) {
            console.log(e.message);
        }
    };

    if (member.roles.has(muterole.id)) return message.channel.send(`Acest membru a primit mute`).
    await (member.addRole(muterole.id));
    message.channel.send(`:white_check_mark: | you have been muted <@${member.id}>.`);
}

exports.conf = {
    aliases: []
}

exports.help = {
  name: "mute",
  description: 'Da mute cuiva [ADMIN ONLY]',
  usage: 'mute <User> <Reason>',
  category: "MODERATION"
}