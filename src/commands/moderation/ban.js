const { ApplicationCommandOptionType, PermissionFlagsBits } = require('discord.js');

module.exports = {
  name:'ban',
  description: 'Ban',
  // devOnly: Boolean,
  // testOnly: Boolean,
  // deleted: Booleanm

   options: [
    {
      name: 'target-user',
      description: 'The user you want to ban.',
      required: true,
      type: ApplicationCommandOptionType.Mentionable,
    },
    {
      name: 'reason',
      description: 'Reason',
      required: false,
      type: ApplicationCommandOptionType.String,
    }
   ],
   permissionsRequired: [PermissionFlagsBits.Administrator],
   botsPermissions: [PermissionFlagsBits.Administrator],

  callback: (supreme, interaction) => {
    interaction.reply(`ban..`);
  },
};