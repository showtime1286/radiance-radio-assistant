const { Client } = require('discord.js');

const client = new Client({
  intents: []
});

client.once('ready', () => {
  console.log('Radiance Radio Assistant is ONLINE!');
});

client.login(process.env.TOKEN);

setInterval(() => {}, 1000 * 60 * 60);
