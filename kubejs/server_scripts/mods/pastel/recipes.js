ServerEvents.recipes(event => {
    const removing_by_recipe_id = [
        "pastel:smelting/blackslag_ores/iron",
    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    });

    event.remove({
        output: [
            "pastel:pedestal_basic_amethyst",
            "pastel:pedestal_basic_citrine",
            "pastel:pedestal_basic_topaz",
            "pastel:pedestal_onyx",
            "pastel:pedestal_moonstone",
        ]
    })


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
            "item": "enchanted:attuned_stone_charged"
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
    pedestalBasicCraft('pastel:pedestal_basic_topaz', 'pastel:topaz_shard')
    pedestalBasicCraft('pastel:pedestal_basic_amethyst', 'minecraft:amethyst_shard')
    pedestalBasicCraft('pastel:pedestal_basic_citrine', 'pastel:citrine_shard')


    customPedestalCraft(event, {
        time: 200,
        tier: "simple",
        experience: 8.0,
        pattern: [
            'qwq',
            'ere',
            ' e '
        ],
        key: {
            q: 'pastel:shimmerstone_gem',
            w: 'pastel:onyx_shard',
            e: "minecraft:obsidian",
            r: "kubejs:onyx_table_core"
        },
        result: {
            "id": "pastel:pedestal_onyx",
            "count": 1
        },
        advancement: "pastel:create_onyx_shard",
        yield_upgrades: true
    })

    customPedestalCraft(event, {
        time: 200,
        tier: "advanced",
        experience: 16.0,
        pattern: [
            'eee',
            'qrq',
            ' w '
        ],
        key: {
            q: 'pastel:bismuth_flake',
            w: 'pastel:polished_onyx_block',
            e: "pastel:moonstone_shard",
            r: "kubejs:moonstone_table_core"
        },
        result: {
            "id": "pastel:pedestal_moonstone",
            "count": 1
        },
        advancement: "pastel:lategame/collect_moonstone",
        yield_upgrades: true
    })

})




