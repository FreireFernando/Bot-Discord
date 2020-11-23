const Discord = require('discord.js');
const bot = new Discord.Client();
bot.login("SUA_ID_TOKEN_AQUI");
bot.once('ready', ()=> {
  console.log('Bot online: ${bot.user.tag}!');
});
bot.on('guilderMemberAdd', membro=> {membro.send('E aê, Miauhumano! Seja bem vindo e curta o conteúdo no youtube (https://www.youtube.com/miaulancia) e twitch (twitch.tv/miaulancia)!')
});
bot.on('message', msg => {
  if (msg.content === '!oi'){
    msg.reply('Olá! Me chamo Fernando e esse é meu primeiro bot. O código desse bot tá no meu github (https://github.com/FreireFernando).')
  }
});