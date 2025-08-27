LootJS.modifiers(event => {

    const items_for_replace = [
        // { item: "minecraft:iron_ingot", replace_item: "minecraft:raw_iron" },
        // { item: "minecraft:gold_ingot", replace_item: "minecraft:raw_gold" },
        // { item: "minecraft:gold_block", replace_item: "minecraft:raw_gold_block" },
        // { item: "minecraft:iron_block", replace_item: "minecraft:raw_iron_block" },
        // { item: "minecraft:copper_ingot", replace_item: "minecraft:raw_copper" },
        // { item: "minecraft:copper_block", replace_item: "minecraft:raw_copper_block" },
    ]

    items_for_replace.forEach(item => {
        event
            .addTableModifier(/.*chests.*/)
            .replaceLoot(item.item, item.replace_item, true)

        event
            .addTableModifier(/.*entities.*/)
            .replaceLoot(item.item, item.replace_item, true)
    });

})