ServerEvents.recipes(event => {
    const removing_by_recipe_id = [
        "pastel:smelting/blackslag_ores/iron",
    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    });


    customAlchemicalForgeCraft(event, {
        affinities: [
            "toxony:heat",
            "toxony:soul",
            "toxony:decay"
        ],
        auxiliary: [
            {
                "item": "modern_industrialization:bronze_block"
            },
            {
                "item": "enchanted:creeper_heart"
            }
        ],
        main: {
            "item" : "enchanted:attuned_stone_charged"
        },
        result: "kubejs:table_core"
    })

    const pedestalBasicCraft = (output, gem) => {
        event.shaped(output, [
            'eee',
            'wrw',
            'wqw'
        ], {
            q: '#minecraft:planks',
            w: 'minecraft:tuff',
            e: gem,
            r: "kubejs:table_core",
        })
    }

    event.remove({ output: "pastel:pedestal_basic_amethyst" })
    event.remove({ output: "pastel:pedestal_basic_citrine" })
    event.remove({ output: "pastel:pedestal_basic_topaz" })
    pedestalBasicCraft('pastel:pedestal_basic_topaz', 'pastel:topaz_shard')
    pedestalBasicCraft('pastel:pedestal_basic_amethyst', 'minecraft:amethyst_shard')
    pedestalBasicCraft('pastel:pedestal_basic_citrine', 'pastel:citrine_shard')
    

})




