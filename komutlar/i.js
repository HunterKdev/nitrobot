const Discord = require("discord.js");

exports.run = (client, message, args) => {
  let istatistik = new Discord.MessageEmbed()    
      .addField('**__Bot Verileri__**', `**${client.guilds.cache.size} Sunucu\n${client.channels.cache.size} Kanal\n${client.guilds.cache.reduce((a, b) => a + b.memberCount, 0).toLocaleString()} Kullanıcı**`, true)
      .addField('**__Gecikmeler__**', `**Bot Gecikmesi : ${client.ws.ping} Ms\nMesaj Gecikmesi : ${new Date().getTime() - message.createdTimestamp} Ms**`, true)
      .setTimestamp()
      .setAuthor(client.user.username, client.user.avatarURL())
    message.channel.send(istatistik);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ping"]
};

exports.help = {
  name: "i",
  description: "Botun Pingini Atar.",
  usage: "ping"
};
