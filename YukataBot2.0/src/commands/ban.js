import { SlashCommandBuilder } from '@discordjs/builders';

const banCommand = new SlashCommandBuilder()
    .setName('ban')
    .setDescription('Bans a user')
    .addSubcommandGroup((group) =>
    group
    .setName('a_bans')
    .setDescription('Group of A ban commands')
    .addSubcommand((subcommand) =>
        subcommand
        .setName('temp')
        .setDescription('Temporary bans a user')
        .addUserOption(option =>
            option
            .setName('user')
            .setDescription('User to temporary ban')
            )
        )
        .addSubcommand((subcommand) =>
        subcommand
        .setName('perma')
        .setDescription('Permanently bans a user')
        .addUserOption(option =>
            option
            .setName('user')
            .setDescription('User to permanently ban')
            )
        )
    )
    .addSubcommandGroup(group =>
        group
        .setName('b_bans')
        .setDescription('Group of B ban commands')
        .addSubcommand((subcommand) =>
        subcommand
        .setName('soft')
        .setDescription('Soft bans a user')
        .addUserOption(option =>
            option
            .setName('user')
            .setDescription('User to be soft banned')
            )
        )
    );

export default banCommand.toJSON();