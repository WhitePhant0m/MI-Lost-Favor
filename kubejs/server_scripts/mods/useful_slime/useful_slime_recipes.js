ServerEvents.recipes(event => {

    const slime_armor = [
        { output: "usefulslime:slime_helmet", input: "minecraft:leather_helmet" },
        { output: "usefulslime:slime_chestplate", input: "minecraft:leather_chestplate" },
        { output: "usefulslime:slime_leggings", input: "minecraft:leather_leggings" },
        { output: "usefulslime:slime_boots", input: "minecraft:leather_boots" },
        { output: "usefulslime:slime_sling", input: "supplementaries:slingshot" }
    ]

    slime_armor.forEach(element => {
        customMixingCauldron(event, {
            fluid: "minecraft:lava",
            fluidAmount: 500,
            ingredients: [
                { "item": element.input },
                { "item": "minecraft:slime_ball" },
                { "item": "minecraft:slime_ball" },
                { "item": "minecraft:slime_ball" },
                { "item": "minecraft:slime_ball" },
                { "item": "minecraft:slime_ball" },
                { "item": "minecraft:slime_ball" },
                { "item": "minecraft:slime_ball" },
            ],
            output: element.output,
            removeRecipe: true
        })
    });


})