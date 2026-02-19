ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:blast_furnace' })
    event.remove({ id: 'minecraft:tinted_glass' })
    event.remove({ id: 'minecraft:bread' })


    event.replaceInput(
        { output: "minecraft:flint_and_steel" },
        "iron_ingot",
        "modern_industrialization:steel_ingot"
    )
    // YTech why do u change vanilla recipes with minecraft id :(
    event.replaceInput({mod: "minecraft"}, "ytech:flour", "minecraft:wheat")

    yTechShaped(event, {
        pattern: [
            "#S ",
            "SN ",
            "  S"
        ],
        key: {
            "#": { "tag": "ytech:bone_needles" },
            "N": { "item": "modern_industrialization:tin_nugget" },
            "S": { "tag": "ytech:leather_strips" }
        },
        outputItems: [[{ id: "minecraft:lead" }, 1]],
        removeRecipeType: "minecraft:crafting_shaped"
    })

    // same recipe only for MI compat
    global.dyeColors.forEach(color => {
        yTechShaped(event, {
            pattern: [
                "# @",
                "WWW",
                "PPP"
            ],
            key: {
                "#": { "tag": "c:hammers" },
                "P": { "tag": "minecraft:wooden_slabs" },
                "@": { "tag": "c:saws" },
                "W": { "item": `minecraft:${color.name}_wool` }
            },
            outputItems: [[{ id: `minecraft:${color.name}_bed` }, 1]],
            removeRecipeType: "minecraft:crafting_shaped"
        })
    });

    yTechShaped(event, {
        pattern: [
            "d# ",
            "s  ",
            "s  ",
        ],
        key: {
            "#": { "tag": "c:hammers" },
            "s": { "item": "minecraft:stick" },
            "d": { "item": "modern_industrialization:diamond_plate" },
        },
        outputItems: [[{ id: "minecraft:diamond_shovel" }, 1]],
        removeRecipeType: "minecraft:crafting_shaped"
    })

    yTechShaped(event, {
        pattern: [
            "ddd",
            " s#",
            " s ",
        ],
        key: {
            "#": { "tag": "c:hammers" },
            "s": { "item": "minecraft:stick" },
            "d": { "item": "modern_industrialization:diamond_plate" },
        },
        outputItems: [[{ id: "minecraft:diamond_pickaxe" }, 1]],
        removeRecipeType: "minecraft:crafting_shaped"
    })

    yTechShaped(event, {
        pattern: [
            "dd#",
            " s ",
            " s ",
        ],
        key: {
            "#": { "tag": "c:hammers" },
            "s": { "item": "minecraft:stick" },
            "d": { "item": "modern_industrialization:diamond_plate" },
        },
        outputItems: [[{ id: "minecraft:diamond_hoe" }, 1]],
        removeRecipeType: "minecraft:crafting_shaped"
    })

    yTechShaped(event, {
        pattern: [
            "d  ",
            "d  ",
            "s# ",
        ],
        key: {
            "#": { "tag": "c:hammers" },
            "s": { "item": "minecraft:stick" },
            "d": { "item": "modern_industrialization:diamond_plate" },
        },
        outputItems: [[{ id: "minecraft:diamond_sword" }, 1]],
        removeRecipeType: "minecraft:crafting_shaped"
    })

    yTechShaped(event, {
        pattern: [
            "dd#",
            "ds ",
            " s ",
        ],
        key: {
            "#": { "tag": "c:hammers" },
            "s": { "item": "minecraft:stick" },
            "d": { "item": "modern_industrialization:diamond_plate" },
        },
        outputItems: [[{ id: "minecraft:diamond_axe" }, 1]],
        removeRecipeType: "minecraft:crafting_shaped"
    })

    yTechShaped(event, {
        pattern: [
            "ddd",
            "d#d",
            "   ",
        ],
        key: {
            "#": { "tag": "c:hammers" },
            "d": { "item": "modern_industrialization:diamond_plate" },
        },
        outputItems: [[{ id: "minecraft:diamond_helmet" }, 1]],
        removeRecipeType: "minecraft:crafting_shaped"
    })

    yTechShaped(event, {
        pattern: [
            "d#d",
            "ddd",
            "ddd",
        ],
        key: {
            "#": { "tag": "c:hammers" },
            "d": { "item": "modern_industrialization:diamond_plate" },
        },
        outputItems: [[{ id: "minecraft:diamond_chestplate" }, 1]],
        removeRecipeType: "minecraft:crafting_shaped"
    })
    yTechShaped(event, {
        pattern: [
            "ddd",
            "d#d",
            "d d",
        ],
        key: {
            "#": { "tag": "c:hammers" },
            "d": { "item": "modern_industrialization:diamond_plate" },
        },
        outputItems: [[{ id: "minecraft:diamond_leggings" }, 1]],
        removeRecipeType: "minecraft:crafting_shaped"
    })
    
    yTechShaped(event, {
        pattern: [
            "d#d",
            "d d",
            "   ",
        ],
        key: {
            "#": { "tag": "c:hammers" },
            "d": { "item": "modern_industrialization:diamond_plate" },
        },
        outputItems: [[{ id: "minecraft:diamond_boots" }, 1]],
        removeRecipeType: "minecraft:crafting_shaped"
    })

    yTechShaped(event, {
        pattern: [
            "S F",
            "l l",
            " l ",
        ],
        key: {
            "S": { "tag": "c:saws" },
            "F": { "tag": "c:files" },
            "l": { "tag": "minecraft:logs" },
        },
        outputItems: [[{ id: "minecraft:chest" }, 1]],
        compatOff:true
    })
})