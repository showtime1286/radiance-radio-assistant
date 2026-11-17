const {
  Client,
  GatewayIntentBits
} = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log('Radiance Radio Assistant is ONLINE!');
});

client.on('messageCreate', message => {
console.log("MESSAGE:", message.content);

  if (message.author.bot) return;

  if (message.content.toLowerCase() === '!help') {
    message.reply(`
📻 **Radiance Radio Assistant**

Commands:
!help - Show commands
!website - Radiance Radio website
!about - About Radiance Radio
    `);
  }

  if (message.content.toLowerCase() === '!website') {
    message.reply(
      '📻 Radiance Radio Online\nhttps://www.radianceradioonline.com'
    );
  }

  if (message.content.toLowerCase() === '!about') {
    message.reply(`
📻 Radiance Radio Online

Broadcasting music, live DJs, events,
and community entertainment worldwide.

Join us on Discord and visit our website!
    `);
  }

});

client.login(process.env.TOKEN);

// Keep Railway awake
setInterval(() => {}, 1000 * 60 * 60);
