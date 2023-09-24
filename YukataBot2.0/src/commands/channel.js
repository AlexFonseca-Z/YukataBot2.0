import { SlashCommandBuilder } from '@discordjs/builders';

const channelCommand = new SlashCommandBuilder()
    .setName('channels')
    .setDescription('channels cmd')
    .addChannelOption(option =>
        option
        .setName('channel')
        .setDescription('channel')
        .setRequired(true)
        )
        .addBooleanOption(option =>
            option
            .setName('deletemsgs')
            .setDescription('Delete the messages')
            .setRequired(true)
        )
        .addAttachmentOption(option =>
            option
            .setName('attatchment')
            .setDescription('attatch something')
            .setRequired(true)
        )
        .addIntegerOption(option =>
            option
            .setName('age')
            .setDescription('Enter your age')
        );
        

export default channelCommand.toJSON();