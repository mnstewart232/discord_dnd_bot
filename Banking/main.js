const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./main_config.json');
const banking = require('./banking.js');
const fs = require('fs');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!ping') {
    //Make sure to use the backtick / ` to use literals in strings, not ' !
    msg.reply(`pong yourself ${msg.author.username}`);
  } //Need command parsers for anything involving numbers and other usernames.
  else if(msg.content === '!bank'){
    msg.reply(`you have 0 gold in the bank.`);

  }
  else if(msg.content === '!deposit'){
    msg.reply(`X gold depositted.`)

  }
  //look into the use of server "roles" to determine permissions.
  //"DM" and "Active Player" are such categories on Chris' server









});

//If message contains "!bank", or "!transfer", invoke methods from banking.js

client.login(config.token);
