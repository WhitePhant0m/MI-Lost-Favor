ServerEvents.recipes(event => {
    const removeById = [
        "toxony:mortar/green_dye_alt",
        "toxony:mortar/green_dye",
        "toxony:mortar_pestle",
    ]

    removeById.forEach(id => {
        event.remove({id: id});
    });

    event.remove({output: [
        "toxony:redstone_mortar",
    ]})

    
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "tag": "toxony:possible_ingredients" },
            { "tag": "toxony:possible_ingredients"},
            { "tag": "toxony:possible_ingredients"},
            { "item": "minecraft:nether_wart"},
        ],
        output: "toxony:affinity_fusion_mix",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "tag": "toxony:ingredients/poisonous" },
            { "tag": "toxony:plants/poisonous"},
            { "item": "minecraft:bone_meal"},
            { "item": "enchanted:hint_of_rebirth"},
        ],
        output: "toxony:poison_paste",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "honeycomb" },
            { "item": "blaze_powder"},
            { "item": "toxony:warproot"},
            { "item": "toxony:empty_tox_pot"},
        ],
        output: "toxony:witchfire_tox_pot",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "honeycomb" },
            { "item": "glow_ink_sac"},
            { "item": "toxony:empty_oil_pot"},
        ],
        output: "toxony:glowing_oil_pot",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "tag": "toxony:possible_ingredients" },
            { "tag": "toxony:possible_ingredients"},
            { "tag": "toxony:possible_ingredients"},
            { "item": "toxony:toxin"},
            { "item": "bowl"},
        ],
        output: "toxony:pure_blend",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "tag": "toxony:possible_ingredients" },
            { "tag": "toxony:possible_ingredients"},
            { "item": "toxony:toxic_paste"},
            { "item": "bowl"},
        ],
        output: "toxony:toxic_blend",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "ghast_tear" },
            { "item": "honeycomb"},
            { "item": "toxony:sunspot"},
            { "item": "toxony:empty_tox_pot"},
        ],
        output: "toxony:regeneration_tox_pot",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "honeycomb"},
            { "item": "toxony:toxic_paste"},
            { "item": "toxony:acid_slimeball"},
            { "item": "toxony:acid_slimeball"},
            { "item": "toxony:empty_oil_pot"},
        ],
        output: "toxony:acid_oil_pot",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "toxony:toxic_paste"}
        ],
        output: "green_dye",
        amount: 8,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "toxony:poison_paste"}
        ],
        output: "green_dye",
        amount: 4,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "honeycomb"},
            { "item": "fermented_spider_eye"},
            { "item": "toxony:water_hemlock"},
            { "item": "toxony:empty_oil_pot"},
        ],
        output: "toxony:fatigue_oil_pot",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "honeycomb"},
            { "item": "fermented_spider_eye"},
            { "item": "toxony:water_hemlock"},
            { "item": "toxony:empty_oil_pot"},
        ],
        output: "toxony:fatigue_oil_pot",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "honeycomb"},
            { "item": "toxony:toxic_paste"},
        ],
        output: "toxony:oil_base",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "honeycomb"},
            { "item": "toxony:toxic_paste"},
            { "item": "toxony:toxin"},
            { "item": "toxony:empty_tox_pot"},
        ],
        output: "toxony:toxin_tox_pot",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "honeycomb"},
            { "item": "magma_cream"},
            { "item": "toxony:empty_oil_pot"},
        ],
        output: "toxony:fire_resistance_oil_pot",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "honeycomb"},
            { "item": "toxony:poison_paste"},
            { "item": "toxony:empty_oil_pot"},
        ],
        output: "toxony:poison_oil_pot",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "honeycomb"},
            { "item": "toxony:warproot"},
            { "item": "toxony:acid_slimeball"},
            { "item": "toxony:bog_bone"},
            { "item": "toxony:empty_tox_pot"},
        ],
        output: "toxony:acid_tox_pot",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "honeycomb"},
            { "item": "fermented_spider_eye"},
            { "item": "toxony:moonlight_hemlock"},
            { "item": "toxony:empty_tox_pot"},
        ],
        output: "toxony:smoke_tox_pot",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "toxony:poison_paste"},
            { "tag": "toxony:possible_ingredients"},
            { "item": "bowl"},
        ],
        output: "toxony:poison_blend",
        removeRecipe: true,
        grindingTime: 60
    })
    customPestleAndMortarCraft(event, {
        ingredients: [
            { "item": "honeycomb"},
            { "item": "toxony:toxic_paste"},
            { "item": "toxony:toxic_spit"},
            { "item": "toxony:ocelot_mint"},
            { "item": "toxony:empty_oil_pot"},
        ],
        output: "toxony:mending_oil_pot",
        removeRecipe: true,
        grindingTime: 60
    })

});

