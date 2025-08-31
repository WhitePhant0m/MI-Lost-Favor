const customEnchanterCraft = (event, args) => {
    event.custom({
        "type": "pastel:enchanter",
        "time": args.time || 300,
        "required_experience": args.experience || 100,
        //max 9 items
        "ingredients": args.ingredients,
        "result": args.result,
        "required_advancement": args.advancement
    })
}

function customEnchanterUpgradeCraft(event, { bulk_item, enchantment, item_scaling, required_advancement, level_cap, xp_scaling }) {
    event.custom({
        type: "pastel:enchantment_upgrade",
        bulk_item: bulk_item,
        enchantment: enchantment,
        item_scaling: item_scaling,
        level_cap: level_cap,
        required_advancement: required_advancement,
        xp_scaling: xp_scaling
    });
}


ServerEvents.recipes(event => {
    // xp / item scaling = level_cap - 1 lvl
    const CUSTOM_ENCHANT_BOOK_CRAFTS = [
        {
            name: "yigd:soulbound",
            level_cap: 1,
            pigment_color: "pastel:cyan_pigment",
            item_1: "forbidden_arcanus:soul",
            item_2: "bosses_of_mass_destruction:soul_star",
            advancement: "pastel:midgame/build_enchanting_structure"
        },
        {
            name: "travelanchors:teleportation_range",
            level_cap: 3,
            xp_scaling: [100, 200],
            item_scaling: [8, 16],
            pigment_color: "pastel:blue_pigment",
            item_1: "minecraft:ender_pearl",
            item_2: "pastel:pure_redstone",
            advancement: "pastel:midgame/build_enchanting_structure"
        },
        {
            name: "the_bumblezone:neurotoxins",
            level_cap: 2,
            xp_scaling: [100],
            item_scaling: [8],
            pigment_color: "pastel:green_pigment",
            item_1: "minecraft:poisonous_potato",
            item_2: "minecraft:spider_eye",
            advancement: "pastel:midgame/build_enchanting_structure"
        },
    ]

    const seen = new Set();
    // For Enchanter Upgrade
    CUSTOM_ENCHANT_BOOK_CRAFTS.forEach(cfg => {
        if (cfg.level_cap <= 1) return;
        if (seen.has(cfg.name)) return;
        seen.add(cfg.name);

        customEnchanterUpgradeCraft(event, {
            bulk_item: {
                item: cfg.pigment_color
            },
            enchantment: cfg.name,
            item_scaling: {
                type: "pastel:indexed",
                indexes: cfg.item_scaling
            },
            level_cap: cfg.level_cap,
            required_advancement: cfg.advancement,
            xp_scaling: {
                type: "pastel:indexed",
                indexes: cfg.xp_scaling
            }
        });
    });

    // For Enchanter Craft
    CUSTOM_ENCHANT_BOOK_CRAFTS.forEach(element => {

        const stored = {};
        stored[String(element.name)] = 1;

        const result = {
            id: "minecraft:enchanted_book",
            components: {
                stored_enchantments: stored
            }
        };

        customEnchanterCraft(event, {
            time: 300, experience: 100, advancement: element.advancement,
            ingredients: [
                { "item": "minecraft:book" },
                { "item": element.pigment_color },
                { "item": element.pigment_color },
                { "item": element.item_1 },
                { "item": element.item_2 },
                { "item": element.pigment_color },
                { "item": element.pigment_color },
                { "item": element.item_1 },
                { "item": element.item_2 }
            ],
            result: result,
        });
    });

})