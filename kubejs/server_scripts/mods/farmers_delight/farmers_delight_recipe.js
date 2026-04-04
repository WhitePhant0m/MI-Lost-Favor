ServerEvents.recipes(event => {

    event.remove({
        output: [
            'farmersdelight:flint_knife',
        ]
    })

    const materials = ["diamond", "iron", "gold"];

    materials.forEach(material => {
        const outputId = material === "gold"
            ? "farmersdelight:golden_knife"
            : `farmersdelight:${material}_knife`;

        yTechShaped(event, {
            pattern: [
                " d#",
                " s ",
                "   ",
            ],
            key: {
                "#": { "tag": "c:hammers" },
                "s": { "item": "minecraft:stick" },
                "d": { "item": `modern_industrialization:${material}_plate` },
            },
            outputItems: [[{ id: outputId }, 1]],
            removeRecipeType: "minecraft:crafting_shaped"
        });
    });

    event.shapeless('farmersdelight:wheat_dough', [
        'minecraft:wheat',
        'ytech:water_clay_bucket'
    ]).keepIngredient('ytech:water_clay_bucket').id('milf:wheat_dough_from_water_clay_bucket')
    
    event.shapeless('farmersdelight:wheat_dough', [
        'minecraft:wheat',
        'minecraft:water_bucket'
    ]).keepIngredient('minecraft:water_bucket').id('milf:wheat_dough_from_water_bucket')


})