import { MessageEmbed } from "discord.js";
import { ICommand } from "wokcommands";

export default {
    category: 'general',
    description: 'The bots latency!',

    slash: true,
    testOnly: true,

    callback: async({interaction}) => {

        const embed = new MessageEmbed()
        .setTitle("Bot Latency")
        .setDescription(`Latency: ${interaction.client.ws.ping}ms.`)
        .setColor("#0099ff")
        .setURL("")
        .setTimestamp()

        interaction.deferReply({
            ephemeral: true
        })

        await new Promise(res => setTimeout(res, 5000));


        interaction.editReply({
            embeds: [embed],
        })
    }
} as ICommand;