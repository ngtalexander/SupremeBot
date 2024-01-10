module.exports = async (supreme, guildId) => {
  let applicationCommands;

  if (guildId) {
    const guild = await supreme.guilds.fetch(guildId);
    applicationCommands = guild.commands;
    } else {
      applicationCommands = await supreme.rest.application.commands;
  }

  await applicationCommands.fetch();
  return applicationCommands;
};