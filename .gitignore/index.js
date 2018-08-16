const Discord = require ("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {bot.user.setGame("JusdaBot , !help"); });
console.log("Le bot a bien ete conecter");
bot.login("NDc5NDMwODQzNTUxNTgwMTYw.DlZaPg.O-pyYPurpinjnX9MNQN1KPW7_DA");
