const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log(`${client.user.username} Está pronto! Ele está em ` + client.guilds.size + ` servidores!`);
});

var prefix = "s!"
	var ownerID = "273691083425447936"


client.on("message", message => {
	
  const args = message.content.split(" ").slice(1);
  
function clean(text) {
  if (typeof(text) === "string")
    return text.replace(/`/g, "`" + String.fromCharCode(8203)).replace(/@/g, "@" + String.fromCharCode(8203));
  else
      return text;
}
  if (message.content.startsWith("s!eval")) {
  if(message.author.id !== ownerID) {
 message.channel.send("**Você não e digno desse poder!!!**");
  } else {
    try {
      const code = args.join(" ");
      let evaled = eval(code);

      if (typeof evaled !== "string")
        evaled = require("util").inspect(evaled);

      message.channel.send(clean(evaled), {code:"xl"});
    } catch (err) {
      message.channel.send(`\`ERRO\` \`\`\`xl\n${clean(err)}\n\`\`\``);
	 }
    }
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("s!500conto")) {
    message.channel.send("**Seu buceta.** https://cdn.discordapp.com/attachments/354420813966868492/358280240750919690/weenZW.gif");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("s!biscoitooubolacha")) {
    message.reply("**BISCOITO CARAI**");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("s!jailson")) {
    message.reply("**AI QUE DELÍCIA CARA AAAAAHHHHHHH**");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("s!cepodemadeira")) {
    message.reply("Mas tem que se um cepo bem duro!!!");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("s!yatomaru")) {
    message.channel.send({embed: {
  color: 9223456,
  description: `**Oi eu sou o criador do Saitama eu criei o <:Saitama:356137534230757378> com o objetivo dele ser o melhor bot do discord mas e claro que no nivel dele agora ele nem chega perto mas nunca desistir não e mesmo? :D**`
}});
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("s!joãopaulo")) {
    message.reply("**Eu so um merda mermão ;-;**");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("s!tramontina")) {
    message.reply("Corte rapido TRAMONTINA :knife:");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("s!oiaoiaoia")) {
    message.channel.send("**KARAI BORACHA MANO**");
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("s!bilada")) {
    message.channel.send("**BI-LA-DA SURRA DE PAU MOLE**");
  }
});

  client.on("guildCreate", guild => {
  console.log(`Entrei no servidor: ${guild.name} (id: ${guild.id}) esse servidor tem ${guild.memberCount} pessoas!!!`);
});

client.on("guildDelete", guild => {
  console.log(`Me tiraram do servidor: ${guild.name} (id: ${guild.id})`);
});

client.on("message", (message) => {
  if (message.content.startsWith("s!invite")) {
    message.channel.send({embed: {
  color: 9223456,
    description: ` **Clique [aqui](https://discordapp.com/oauth2/authorize?client_id=342453300362215434&scope=bot&permissions=2146958591)** **para me adicionar no seu servidor espero que goste de mim :p**`
}});
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("s!ajuda")) {
    message.channel.send({embed: {
  color: 9223456,
    description: `Olá meu nome e **Saitama** eu sou um bot feito em **discord.js** atualmente eu so tenho comandos **fun** mas eu prometo melhorar :D.\n\nMe criaram no dia **2 de Agosto de 2017**.\n\nO usuário **YatoMaru#9107** meu criador lindo eu devo minha vida a ele :smile:.\n\nSe você quiser ver meus comando escreva **s!comandos** =D.`
}});
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("s!dtviado")) {
var texto = ['```O homem mais hetero de todos.```', '**E um homem puro.**', '`Da o cu com força.`', '*E viado*'];
    const random = texto[Math.floor(Math.random() * texto.length)];
    message.channel.send(random)
  }
});

client.on('ready', () => {
client.user.setGame("na twitch e falando em "+ client.guilds.size + " servidores diferentes =D (Digite s!ajuda para saber os comandos :D)", "https://www.twitch.tv/yat0mar4")
});

client.on("message", (message) => {
  if (message.content.startsWith("s!punheta")) {
let user = message.mentions.users.first();
if (message.mentions.users.size < 1) return message.reply('Menciona alguem primeiro né anta p-p. ').catch(console.error);
     message.channel.send(`** ${user} TA BATENDO UMA NÉ SEU SAFADO VO CONTA PRA MAMÃE VO CONTA!!!**`);
  }
});

client.on("message", (message) => {
  if (message.content.startsWith("s!créditos")) {
    message.channel.send({embed: {
  color: 9223456,
    description: `**Credíto para a pessoa que me ajudou a me criar.**\n\n**Lhermebr#0596:** Ele me ajudou em praticamente tudo para me criar eu te agradeço muito **Lherme** :3.`
}});
  }
});

client.on("message", (message) => {
   if (message.content.startsWith("s!id")) {
let user = message.mentions.users.first() || message.author;
const Discord = require('discord.js');
  var embed = new Discord.RichEmbed()
  .setAuthor(`ID desse usuário:`, user.avatarURL)
  .setColor('BLUE')
  .addField(`${message.author.id}`, 'ㅤ')
  .setFooter(`Comando usado por ${message.author.username}.`, `${message.author.avatarURL}`)
  .setThumbnail(user.avatarURL)

message.channel.send({embed: embed})
console.log(message.author.username+` usou o comando s!id no servidor ${message.guild.name}`)
  }
});

client.on("message", message => {
  if (message.content.startsWith("s!comandos")) {
    message.reply(":mailbox_with_mail: **Mandei la no seu privado** :smiley: ")
    message.author.send({embed: {
  color: 9223456,
  description: `__***Os comandos que eu tenho até agora são:***__\n\n**:ping_pong:ping:** Mostra o ping do bot.\n\n**<:Pow:364171116232572930>500conto:** Não vai devolve não?\n\n**:cookie:biscoitooubolacha:** Mostra a minha opnião.\n\n**<:Jaja:364171056849616909>jailson:** O grande macho peludo.\n\n**<:cepo:364171023408431105>cepodemadeira:** Um cepo de madeira.\n\n**<:Yato:364171139859349514>yatomaru:** O meu lindo criador :3.\n\n**<:Joopaulo:364171091385647135>joãopaulo:** Eu so um merda ;-;.\n\n**:knife:tramontina:** Essa faca e braba.\n\n**<:Borracha:364170996674068481>oiaoiaoia:** Mata polícia.\n\n**<:safadenho:356123436692537366>punheta:** Como usar: s!punheta (pessoa).\n\n**<:bilada:364170964453425172>bilada:** BI-LA-DA.\n\n**:frame_photo:avatar:** Como usar: s!avatar (pessoa).\n\n**:ok_hand:invite:** Meu invite caso você queira me adicionar :3.\n\n**:gay_pride_flag:dtviado:** Diz se você e viado ou não.\n\n:yum:**créditos:** Diz a pessoa que me ajudou em tudo para me criar.\n\n:computer:**id:** Mostra o seu id ou o id da pessoa que você mencionou.\n\n:pencil2:**say:** Escreva s!say (mensagem) e ele falara a mensagem que você escreveu.\n\n:pen_ballpoint:**embed:** Fala oque você escreveu em embed e a mesma coisa que o say so que em embed.\n\n__**(E o meu prefixo e s! :D.)**__` 
    }
  })
  }
}); 

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.channel.type === 'dm') return;
  if (message.content.startsWith("s!avatar")) {
    let user = message.mentions.users.first() || message.author;
    let avatar = user.avatarURL
        const Discord = require('discord.js');
            const embed = new Discord.RichEmbed()
            .setColor("BLUE")
            .setDescription(`:frame_photo: **Foto de Perfil de ${user.username}\n[Clique aqui e baixe o avatar](${user.avatarURL})**`)
            .setImage(avatar)
            message.channel.send({embed: embed});
console.log(message.author.username+` usou o comando s!avatar no servidor ${message.guild.name}`)
  }
});

client.on("message", (message) => {
  if (!message.content.startsWith(config.prefix) || message.author.bot) return;
  if (message.channel.type === 'dm') return;
  if (message.content.startsWith("s!ping")) {
    message.channel.send({embed: {
  color: 9223456,
  description: `:ping_pong: **O Ping é de __${Math.round(client.ping)}ms__**`
}});
  }
});

client.on("message", message => {
  if (message.content.startsWith("s!embed")) {
    const args = message.content.split(" ").slice(1);    
    const sayMessage = args.join(" ");
    message.delete(message.author)
    const Discord = require('discord.js');
    const embed = new Discord.RichEmbed()
	.setColor("BLUE")
	.setDescription(sayMessage)
	
	message.channel.send({embed: embed})
  }
});

client.on("message", message => {
  if (message.content.startsWith("s!ajuda")) {
    const args = message.content.split(" ").slice(1);    
    const sayMessage = args.join(" ");
    message.delete(message.author)
    message.channel.send(sayMessage);
  }
}); 

client.login(process.env.BOT_TOKEN);
