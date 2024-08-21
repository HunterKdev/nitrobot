const Discord = require("discord.js");
const client = new Discord.Client({ restTimeOffset: 100, messageCacheMaxSize: 25 });

exports.run = (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "**Bu Komudu Kullanabilmek İçin `Yönetici` İznine Sahip Olmanız Gerekmektedir**"
    );

  if (message.member.hasPermission("ADMINISTRATOR")) {
    function rasteleSembol(uzunluk, semboller) {
      var maske = "";
      if (semboller.indexOf("a") > -1) maske += "abcdefghijklmnopqrstuvwxyz";
      if (semboller.indexOf("A") > -1) maske += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      if (semboller.indexOf("0") > -1) maske += "0123456789";
      var sonuc = "";

      for (var i = uzunluk; i > 0; --i) {
        sonuc += maske[Math.floor(Math.random() * maske.length)];
      }
      return sonuc;
    }
    function spamla() {
      message.channel.send("**Nitro Kodun : **https://discord.gift/" + rasteleSembol(24, "0aA"));
    }
    var veri = message.content.toString();
    var veriSn = veri.substring(10);
    var saniye = parseInt(veriSn);
    var saniye1 = saniye * 10000;
    setInterval(spamla, 50);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["nitro", "Nitro"]
};

exports.help = {
  name: "Nitro Gen",
  description: "Rastgele Nitro Kodları Atar.",
  usage: "nitro"
};