LootJS.modifiers(event => {

    const items_for_replace = [
        { item: "minecraft:iron_ingot", replace_item: "minecraft:raw_iron" },
        { item: "minecraft:gold_ingot", replace_item: "minecraft:raw_gold" },
        { item: "minecraft:gold_block", replace_item: "minecraft:raw_gold_block" },
        { item: "minecraft:iron_block", replace_item: "minecraft:raw_iron_block" },
        { item: "minecraft:copper_ingot", replace_item: "minecraft:raw_copper" },
        { item: "minecraft:copper_block", replace_item: "minecraft:raw_copper_block" },
        { item: "minecraft:leather", replace_item: "ytech:raw_hide" },
    ]

    const allowed_types_for_replacing = [LootType.CHEST, LootType.ENTITY, LootType.FISHING, LootType.ARCHAEOLOGY, LootType.VAULT, LootType.GIFT, LootType.PIGLIN_BARTER, LootType.GENERIC]

    items_for_replace.forEach(item => {
        allowed_types_for_replacing.forEach(type => {
            event
            .addTableModifier(type)
            .replaceLoot(item.item, item.replace_item, true)
        });
    });

})

