const Discord = require('discord.js');

module.exports = client => {
  console.log('Bot ' + client.user.tag + ' Kullanıcı Adı İle Giriş Yaptı!');
  client.user.setStatus("dnd");
  client.user.setActivity(`YouTube: HunterK || .nitro`, { type: "WATCHING"});
};
