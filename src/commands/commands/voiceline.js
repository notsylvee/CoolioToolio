module.exports = {
    data: {
        name: "voiceline",
        description: "Sends a random Coolio Toolio voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

        const voicelines = [
            "Yellow1",
            "Yellow2",
            "Yellow3",
            "Yellow4",
            "Yellow5",
            "Yellow6",
        ];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
    
        await interaction.reply({
            content: `Yellow.`,
            files:[{
                attachment: `sounds/${voiceline}.mp3`,
                name: `${voiceline}.mp3`
            }],
            ephemeral: false
        });
      },
}