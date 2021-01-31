const Discord = require('discord.js');
const client = new Discord.Client();
//Rename the config file as needed
const config = require('./config_mine.json');
const fs = require('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply("pong");
  }
});

client.login(config.token);
