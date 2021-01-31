const config = require('./banking_config.json');
const fs = require('fs');

/*
Basics:
  The banking code of the bot should keep track of the amount of 'gold'
  each player has. Gold has a weight value associated with it, determined
  in the banking_config file. Test value will be 1-to-1, but it should be
  considered a floating point value in the code.

  Players will have an amount of gold on their person, and an amount in the bank.
  Both will be stored in a player file associated with their username (for now).

  Players can transfer money on their person to other players.
  The DM can transfer arbitrary amounts to other players.
  Players can transfer money to & from the bank.
  Players can check their person balance or bank balance.
  Players can check their transaction history - a list of all past transfers.

*/
