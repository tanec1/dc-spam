const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

console.log('qwerty');

client.on("ready", () => {
      let zoom = client.channels.get("channel id"); // qwerty


      zoom.send("message").then(msg => {
   msg.delete(10000)
 });
 console.log("sa")
      setInterval(() => {
       let zoom = client.channels.get("channel id"); // qwerty


       zoom.send("message").then(msg => {
    msg.delete(10000)
  });
  console.log("as")
      }, 410000);
});

client.login("");