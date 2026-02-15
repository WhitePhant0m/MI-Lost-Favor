ServerEvents.recipes(event => {
    event.custom({
        "type": "ytech:remaining_shapeless_crafting",
        "category": "misc",
        "ingredients": [
            {"item": "toolbelt:belt"},
            {"tag": "ytech:bone_needles"},
            {"item": "toolbelt:pouch"},
        ],
        "result": {"count": 1, "id": "toolbelt:belt", "components":{"toolbelt:belt_size":4}}
    })

    yTechShaped(event, {
        pattern: [
            "SLS",
            "L#L",
            "SSS"
        ],
        key: {
            "#": { "tag": "ytech:bone_needles" },
            "L": { "item": "minecraft:leather" },
            "S": { "tag": "ytech:leather_strips" }
        },
        outputItems: [[{ id: "toolbelt:belt" }, 1]],
        removeRecipeType: "minecraft:crafting_shaped"
    })

    yTechShaped(event, {
        pattern: [
            "S#S",
            "SSS",
            " L "
        ],
        key: {
            "#": { "tag": "ytech:bone_needles" },
            "L": { "item": "minecraft:leather" },
            "S": { "tag": "ytech:leather_strips" }
        },
        outputItems: [[{ id: "toolbelt:pouch" }, 1]],
        removeRecipeType: "minecraft:crafting_shaped"
    })
})

