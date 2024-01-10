module.exports = {
  name:'ping',
  description: 'Pong!',
  // devOnly: Boolean,
  // testOnly: Boolean,
  // options: Object[],
  // deleted: Booleanm

  callback: (supreme, interaction) => {
    interaction.reply(`Pong! ${client.ws.ping}ms`);
  }
}