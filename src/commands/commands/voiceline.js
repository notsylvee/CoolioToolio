module.exports = {
    data: {
        name: "voiceline",
        description: "Sends a random Red Teddy voiceline",
        "integration_types": [1],
        "contexts": [0, 1, 2]
    },
    async execute(interaction) {

        const voicelines = [
            "Yellow.",
            "Yellow!"
        ];
        const voiceline = voicelines[Math.floor(Math.random() * voicelines.length)];
    
        await interaction.reply({ content: `${voiceline}`, ephemeral: false });
      },
}