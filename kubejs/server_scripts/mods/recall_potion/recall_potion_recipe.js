ServerEvents.recipes(event => {

    customMixingCauldron(event, {
        fluid: "minecraft:water",
        fluidAmount: 1000,
        ingredients: [
            { "item": "minecraft:glass_bottle" },
            { "tag": "hexerei:flower_biproduct" },
            { "item": "minecraft:poisonous_potato" },
            { "tag": "spectrum:gemstone_shards" },
            { "tag": "spectrum:gemstone_shards" },
            { "tag": "spectrum:gemstone_shards" },
            { "item": "minecraft:poisonous_potato" },
            { "tag": "hexerei:flower_biproduct" }
        ],
        output: "recall_potion:recall_potion",
        amount: 4,
        removeRecipe: true
    })

    customMixingCauldron(event, {
        fluid: "minecraft:lava",
        fluidAmount: 1000,
        ingredients: [
            { "item": "minecraft:glass_bottle" },
            { "tag": "hexerei:flower_biproduct" },
            { "item": "minecraft:honeycomb" },
            { "item": "minecraft:magma_cream" },
            { "item": "minecraft:crimson_fungus" },
            { "item": "minecraft:magma_cream" },
            { "item": "minecraft:honeycomb" },
            { "tag": "hexerei:flower_biproduct" }
        ],
        output: "recall_potion:nether_potion",
        amount: 4,
        heat: "heated",
        removeRecipe: true
    })
    
    customMixingCauldron(event, {
        fluid: "minecraft:lava",
        fluidAmount: 1000,
        ingredients: [
            { "item": "minecraft:dragon_breath" },
            { "tag": "hexerei:flower_biproduct" },
            { "item": "minecraft:end_stone" },
            { "item": "minecraft:phantom_membrane" },
            { "item": "minecraft:chorus_fruit" },
            { "item": "minecraft:phantom_membrane" },
            { "item": "minecraft:end_stone" },
            { "tag": "hexerei:flower_biproduct" }
        ],
        output: "recall_potion:end_potion",
        amount: 4,
        heat: "heated",
        removeRecipe: true
    })

});