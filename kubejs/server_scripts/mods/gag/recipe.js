ServerEvents.recipes(event => {

    event.remove({
        output: [
            'gag:hearthstone',
        ]
    })

    customShrineRecipe(event, {
        time: 24000,
        experience: 16.0,
        fluid: "pastel:liquid_crystal",
        ingredients: [
            { "item": "bosses_of_mass_destruction:blazing_eye", count: 1 },
            { "item": "minecraft:bundle", count: 1 },
            { "item": "minecraft:raw_gold_block", count: 8 },
            { "item": "minecraft:nautilus_shell", count: 12 }
        ],
        result: {
            "id": "gag:time_sand_pouch",
            "count": 1
        },
        advancement: "pastel:midgame/enter_liquid_crystal"
    })
    event.remove({ output: 'gag:time_sand_pouch' })

})