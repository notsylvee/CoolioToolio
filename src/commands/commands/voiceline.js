module.exports = {
    data: {
        name: "voiceline",
        description: "Sends a random Coolio Toolio voiceline",
        "integration_types": [0, 1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

        const voicelines = [
            "Yellow._3",
            "Yellow._4",
            "Yellow._5",
            "Yellow._6",
            "Yellow._7",
            "Yellow_8",
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