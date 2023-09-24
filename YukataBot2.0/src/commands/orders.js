import { SlashCommandBuilder } from '@discordjs/builders';

const orderCommand = new SlashCommandBuilder()
        .setName('order')
        .setDescription('This is your order')
        .addStringOption((option) =>
            option
            .setName('food')
            .setDescription('Select your favourite food')
            .setRequired(true)
            .setChoices(
                {
                    name: 'Cake',
                    value: 'cake',
                },
                {
                    name: 'Hamburguer',
                    value: 'hamburguer',
                },
                {
                    name: 'Pizza',
                    value: 'pizza',
                }
            )
        ).addStringOption((option) => 
            option
            .setName('drink')
            .setDescription('Select your favourite drink')
            .setRequired(true)
            .setChoices(
                {
                    name: 'Coca-cola',
                    value: 'coca-cola',
                },
                {
                    name: 'Sprite',
                    value: 'sprite',
                },
                {
                    name: 'Water',
                    value: 'water',
                }
            )
        );

export default orderCommand.toJSON();