const Discord = require("discord.js");
const { Client, Util } = require('discord.js');
const { prefix } = require('./config.json');
const TOKEN = "NzA2NTA3NzYxOTQwNDMwOTI4.Xq7Qtg._y5IGn4nj234dYWMKG-ZG5DyELc";
const fs = require('fs');
const client = new Discord.Client({disableEveryone: true});
const config = require("./config.json");
const db = require("quick.db")
client.aliases = new Discord.Collection();
client.helps = new Discord.Collection();
client.commands = new Discord.Collection();


fs.readdir("./commands/", (err, files) => {

  if(err) console.log(err);
  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) => {
        let props = require(`./commands/${f}`);
        client.commands.set(props.help.name, props); 
    });
});

client.on('ready', function() {
      setInterval(async () => {
    const statuslist = [
      `-help | ${client.guilds.size} servers`,
      `-help | ${client.channels.size} channels`,
      `-help | ${client.users.size} users`
    ];
    const random = Math.floor(Math.random() * statuslist.length);

    try {
      await client.user.setPresence({
        game: {
          name: `${statuslist[random]}`,
          type: "PLAYING"
          //url: 'https://www.twitch.tv/spokloo'
        },
        status: "do not disturb"
      });
    } catch (error) {
      console.error(error);
    }
  }, 10000);
});

  
client.on('message', async message => {
  if(message.content === 'absen')  require('./commands/absen.js')(message, args)
	if (message.author.bot) return undefined;
  if (message.channel.type === "dm") return; 
	let prefix = config.prefix;
	if (!message.content.startsWith(prefix)) return undefined;
 let messageArray = message.content.split(" ");
  let msg = message.content.toLowerCase();
	let command = message.content.toLowerCase().split(' ')[0];
  command = command.slice(prefix.length);
	let args = message.content.slice(prefix.length).trim().split(" ");
	let cmd = `${args.shift().toLowerCase()}`;
	
  	/*try {
    if (command == 'h') command == 'help';
    
		let commandFile = require(`./commands/${cmd}.js`);
		commandFile.run(client, message, args);
	} catch (e) {
		console.log(e.message)
	} finally {
		console.log(`${message.author.username} using command ${cmd}`);
	}*/
    try {
  if (command == 'h') command = 'help';
    let commands = require(`./commands/${cmd}.js`);
    commands.run (client, message, args);
  } catch (e) {
    console.log(e.stack)
  } finally {
    console.log(`${message.author.tag} foloseste comanda \`${cmd}.js\``)
  }
    
  let commands = require(`./commands/${cmd}.js`);
 
});
  
//^^ INI UNTUK COMMAND HANDLER
const express = require('express');
const http = require('http');
const app = express();

// 5 Minute Ping Times
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

client.login(TOKEN);
