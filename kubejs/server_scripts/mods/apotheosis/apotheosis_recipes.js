ServerEvents.recipes(event => {
    event.remove({
        output: [
            'apotheosis:potion_charm',
            'apothic_enchanting:flimsy_ender_lead',
            'apothic_enchanting:ender_lead',
            'apothic_enchanting:occult_ender_lead',
            "apothic_enchanting:scrap_tome",
            "apothic_enchanting:improved_scrap_tome",
            "apothic_enchanting:extraction_tome",
            "apothic_enchanting:ender_library",
            "apothic_enchanting:library",
        ]
    })

    const runes = [
        'kubejs:rune_of_piercing',
        'kubejs:rune_of_armor',
        'kubejs:rune_of_bloodshed',
        'kubejs:rune_of_diversity',
        'kubejs:rune_of_fishing',
        'kubejs:rune_of_mining'
    ]


    customPedestalCraft(event, {
        time: 200,
        tier: "basic",
        experience: 2.0,
        citrine: 2,
        topaz: 4,
        pattern: [
            'www',
            'www',
            'q  '
        ],
        key: {
            q: 'kubejs:rune_of_diversity',
            w: 'minecraft:book'
        },
        result: {
            "id": "apothic_enchanting:other_tome",
            "count": 6
        },
        advancement: "spectrum:craft_cmy_pedestal",
        yield_upgrades: true,
        removeRecipe: true
    })

    customPedestalCraft(event, {
        time: 200,
        tier: "basic",
        experience: 2.0,
        citrine: 2,
        topaz: 4,
        pattern: [
            '  q',
            ' ew',
            'e w'
        ],
        key: {
            q: 'kubejs:rune_of_fishing',
            w: 'minecraft:book',
            e: "minecraft:stick"
        },
        result: {
            "id": "apothic_enchanting:fishing_tome",
            "count": 2
        },
        advancement: "spectrum:craft_cmy_pedestal",
        yield_upgrades: true,
        removeRecipe: true
    })
    customPedestalCraft(event, {
        time: 200,
        tier: "basic",
        experience: 2.0,
        citrine: 2,
        topaz: 4,
        pattern: [
            'www',
            ' q ',
            ' e '
        ],
        key: {
            q: 'kubejs:rune_of_mining',
            w: 'minecraft:book',
            e: "minecraft:stick"
        },
        result: {
            "id": "apothic_enchanting:pickaxe_tome",
            "count": 3
        },
        advancement: "spectrum:craft_cmy_pedestal",
        yield_upgrades: true,
        removeRecipe: true
    })
    customPedestalCraft(event, {
        time: 200,
        tier: "basic",
        experience: 2.0,
        citrine: 2,
        topaz: 4,
        pattern: [
            ' ew',
            'q w',
            ' ew'
        ],
        key: {
            q: 'kubejs:rune_of_piercing',
            w: 'minecraft:book',
            e: "minecraft:stick"
        },
        result: {
            "id": "apothic_enchanting:bow_tome",
            "count": 3
        },
        advancement: "spectrum:craft_cmy_pedestal",
        yield_upgrades: true,
        removeRecipe: true
    })
    customPedestalCraft(event, {
        time: 200,
        tier: "basic",
        experience: 2.0,
        citrine: 2,
        topaz: 4,
        pattern: [
            ' w ',
            ' w ',
            ' q '
        ],
        key: {
            q: 'kubejs:rune_of_bloodshed',
            w: 'minecraft:book'
        },
        result: {
            "id": "apothic_enchanting:weapon_tome",
            "count": 2
        },
        advancement: "spectrum:craft_cmy_pedestal",
        yield_upgrades: true,
        removeRecipe: true
    })
    customPedestalCraft(event, {
        time: 200,
        tier: "basic",
        experience: 2.0,
        citrine: 2,
        topaz: 4,
        pattern: [
            'www',
            'wqw',
            '   '
        ],
        key: {
            q: 'kubejs:rune_of_armor',
            w: 'minecraft:book'
        },
        result: {
            "id": "apothic_enchanting:helmet_tome",
            "count": 5
        },
        advancement: "spectrum:craft_cmy_pedestal",
        yield_upgrades: true,
        removeRecipe: true
    })
    customPedestalCraft(event, {
        time: 200,
        tier: "basic",
        experience: 2.0,
        citrine: 2,
        topaz: 4,
        pattern: [
            'wqw',
            'www',
            'www'
        ],
        key: {
            q: 'kubejs:rune_of_armor',
            w: 'minecraft:book'
        },
        result: {
            "id": "apothic_enchanting:chestplate_tome",
            "count": 8
        },
        advancement: "spectrum:craft_cmy_pedestal",
        yield_upgrades: true,
        removeRecipe: true
    })
    customPedestalCraft(event, {
        time: 200,
        tier: "basic",
        experience: 2.0,
        citrine: 2,
        topaz: 4,
        pattern: [
            'www',
            'wqw',
            'w w'
        ],
        key: {
            q: 'kubejs:rune_of_armor',
            w: 'minecraft:book'
        },
        result: {
            "id": "apothic_enchanting:leggings_tome",
            "count": 7
        },
        advancement: "spectrum:craft_cmy_pedestal",
        yield_upgrades: true,
        removeRecipe: true
    })
    customPedestalCraft(event, {
        time: 200,
        tier: "basic",
        experience: 2.0,
        citrine: 2,
        topaz: 4,
        pattern: [
            'wqw',
            'w w',
            '   '
        ],
        key: {
            q: 'kubejs:rune_of_armor',
            w: 'minecraft:book'
        },
        result: {
            "id": "apothic_enchanting:boots_tome",
            "count": 4
        },
        advancement: "spectrum:craft_cmy_pedestal",
        yield_upgrades: true,
        removeRecipe: true
    })

    //WIP, move most blocks in forbidden_arcanus hephaestus_forge
    customPedestalCraft(event, {
        time: 200,
        tier: "advanced",
        experience: 2.0,
        citrine: 64,
        topaz: 40,
        onyx: 12,
        pattern: [
            ' q ',
            'wew',
            'rrr'
        ],
        key: {
            q: 'kubejs:blaze_core',
            w: 'apotheosis:epic_material',
            e: 'spectrum:enchanter',
            r: 'minecraft:smooth_stone',
        },
        result: {
            "id": "apotheosis:simple_reforging_table",
            "count": 1
        },
        advancement: "spectrum:midgame/enter_liquid_crystal",
        yield_upgrades: false,
        removeRecipe: true
    })

    customPedestalCraft(event, {
        time: 200,
        tier: "advanced",
        experience: 2.0,
        citrine: 64,
        topaz: 40,
        onyx: 12,
        pattern: [
            ' q ',
            'wew',
            'rrr'
        ],
        key: {
            q: 'kubejs:electronic_ender_core',
            w: 'apotheosis:mythic_material',
            e: 'apotheosis:simple_reforging_table',
            r: 'spectrum:bismuth_crystal',
        },
        result: {
            "id": "apotheosis:reforging_table",
            "count": 1
        },
        advancement: "spectrum:lategame/collect_bismuth_crystal",
        yield_upgrades: false,
        removeRecipe: true
    })
    customPedestalCraft(event, {
        time: 200,
        tier: "advanced",
        experience: 2.0,
        citrine: 64,
        topaz: 64,
        amethyst: 64,
        onyx: 30,
        pattern: [
            ' q ',
            'wew',
            'rrr'
        ],
        key: {
            q: 'spectrum:aether_vestiges',
            w: 'apotheosis:mythic_material',
            e: 'malum:umbral_spirit',
            r: 'malum:block_of_malignant_pewter',
        },
        result: {
            "id": "apotheosis:augmenting_table",
            "count": 1
        },
        advancement: "spectrum:lategame/collect_aether_vestiges",
        yield_upgrades: false,
        removeRecipe: true
    })

})


