ServerEvents.recipes(event => {
    // (`･Θ･´) - Some recipes are located in data because it is easier to change a recipe there and delete the previous recipe at the same time (overwrite)
    event.remove({
        output: [
            'ytech:tin_plate',
            'ytech:lead_plate',
            'ytech:copper_plate',
            'ytech:golden_plate',
            'ytech:bronze_plate',
            'ytech:iron_plate',
            'ytech:tin_block',
            'ytech:lead_block',
            'ytech:bronze_block',
            'ytech:raw_galena_block',
            'ytech:raw_cassiterite_block',

            "eccentrictome:tome",
            "ytech:bone_needle",
            "ytech:crushed_iron",
            "dummmmmmy:target_dummy",
            "toolbelt:belt",
            "toolbelt:pouch",
            "minecraft:lead"
        ]
    })

    const removing_by_recipe_id = [
        "ytech:bronze_ingot_from_alloying"
    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    });

    event.custom({
        "type": "ytech:alloying",
        "ingredient1": {
            "count": 1,
            "ingredient": {
                "tag": "c:ingots/copper"
            }
        },
        "ingredient2": {
            "count": 1,
            "ingredient": {
                "tag": "c:ingots/tin"
            }
        },
        "minTemp": 1085,
        "result": {
            "count": 2,
            "id": "modern_industrialization:bronze_ingot"
        },
        "smeltingTime": 200
    })

    event.recipes.ytech.hammering("heavy_weighted_pressure_plate", "iron_block")
    .tool("#c:hammers");;

    event.replaceInput({ output: 'ytech:reinforced_bricks' }, 'modern_industrialization:copper_bolt', 'modern_industrialization:fire_clay_brick')
    event.replaceInput({ output: 'ytech:reinforced_bricks' }, 'modern_industrialization:copper_plate', 'modern_industrialization:fire_clay_brick')
    event.replaceInput({ input: 'ytech:crushed_copper' }, 'ytech:crushed_copper', 'modern_industrialization:copper_dust')
    event.replaceInput({ input: 'ytech:crushed_gold' }, 'ytech:crushed_gold', 'modern_industrialization:gold_dust')
    event.replaceInput({ input: 'ytech:crushed_iron' }, 'ytech:crushed_iron', 'modern_industrialization:iron_dust')
    event.replaceInput({ input: 'ytech:crushed_galena' }, 'ytech:crushed_galena', 'modern_industrialization:lead_dust')
    event.replaceInput({ input: 'ytech:crushed_cassiterite' }, 'ytech:crushed_cassiterite', 'modern_industrialization:tin_dust')
    event.replaceInput({ input: 'ytech:raw_galena' }, 'ytech:raw_galena', 'modern_industrialization:raw_lead')
    event.replaceInput({ input: 'ytech:raw_cassiterite' }, 'ytech:raw_cassiterite', 'modern_industrialization:raw_tin')
    event.replaceOutput({ output: 'ytech:crushed_gold' }, 'ytech:crushed_gold', 'modern_industrialization:gold_dust')
    event.replaceOutput({ output: 'ytech:crushed_cassiterite' }, 'ytech:crushed_cassiterite', 'modern_industrialization:tin_dust')
    event.replaceOutput({ output: 'ytech:crushed_galena' }, 'ytech:crushed_galena', 'modern_industrialization:lead_dust')
    event.replaceOutput({ output: 'ytech:crushed_copper' }, 'ytech:crushed_copper', 'modern_industrialization:copper_dust')
    event.replaceOutput({ output: 'ytech:crushed_iron' }, 'ytech:crushed_iron', 'modern_industrialization:iron_dust')
    event.replaceOutput({ output: 'ytech:bronze_ingot' }, 'ytech:bronze_ingot', 'modern_industrialization:bronze_ingot')
    event.replaceOutput({ output: 'ytech:tin_ingot' }, 'ytech:tin_ingot', 'modern_industrialization:tin_ingot')
    event.replaceOutput({ output: 'ytech:lead_ingot' }, 'ytech:lead_ingot', 'modern_industrialization:lead_ingot')
    event.replaceOutput({ output: 'ytech:tin_rod' }, 'ytech:tin_rod', 'modern_industrialization:tin_rod')
    event.replaceOutput({ output: 'ytech:copper_rod' }, 'ytech:copper_rod', 'modern_industrialization:copper_rod')
    event.replaceOutput({ output: 'ytech:golden_rod' }, 'ytech:golden_rod', 'modern_industrialization:gold_rod')
    event.replaceOutput({ output: 'ytech:iron_rod' }, 'ytech:iron_rod', 'modern_industrialization:iron_rod')
    event.replaceOutput({ output: 'ytech:lead_rod' }, 'ytech:lead_rod', 'modern_industrialization:lead_rod')
    event.replaceOutput({ output: 'ytech:bronze_rod' }, 'ytech:bronze_rod', 'modern_industrialization:bronze_rod')
    event.replaceOutput({ output: 'ytech:golden_bolt' }, 'ytech:golden_bolt', 'modern_industrialization:gold_bolt')
    event.replaceOutput({ output: 'ytech:copper_bolt' }, 'ytech:copper_bolt', 'modern_industrialization:copper_bolt')
    event.replaceOutput({ output: 'ytech:iron_bolt' }, 'ytech:iron_bolt', 'modern_industrialization:iron_bolt')
    event.replaceOutput({ output: 'ytech:lead_bolt' }, 'ytech:lead_bolt', 'modern_industrialization:lead_bolt')
    event.replaceOutput({ output: 'ytech:tin_bolt' }, 'ytech:tin_bolt', 'modern_industrialization:tin_bolt')
    event.replaceOutput({ output: 'ytech:bronze_bolt' }, 'ytech:bronze_bolt', 'modern_industrialization:bronze_bolt')


    event.custom({
        "type": "ytech:remaining_shaped_crafting",
        "category": "equipment",
        "key": {
            "#": {"tag": "c:saws"},
            "H": {"item": "minecraft:hay_block"},
            "S": {"item": "minecraft:stick"},
            "s": {"tag": "minecraft:wooden_slabs"},
            "b": {"item":"ytech:wooden_bolt"}
        },
        "pattern": [
            "SHS",
            "bHb",
            "s#s"
        ],
        "result": {"count": 1, "id": "dummmmmmy:target_dummy"}
    })

    event.custom({
        "type": "ytech:remaining_shaped_crafting",
        "category": "equipment",
        "key": {
            "#": {"tag": "ytech:bone_needles"},
            "L": {"item": "minecraft:leather"},
            "S": {"tag": "ytech:leather_strips"},
        },
        "pattern": [
            "SLS",
            "L#L",
            "SSS"
        ],
        "result": {"count": 1, "id": "toolbelt:belt"}
    })

    event.custom({
        "type": "ytech:remaining_shaped_crafting",
        "category": "equipment",
        "key": {
            "#": {"tag": "ytech:bone_needles"},
            "L": {"item": "minecraft:leather"},
            "S": {"tag": "ytech:leather_strips"},
        },
        "pattern": [
            "S#S",
            "SSS",
            " L "
        ],
        "result": {"count": 1, "id": "toolbelt:pouch"}
    })

    event.custom({
        "type": "ytech:remaining_shaped_crafting",
        "category": "equipment",
        "key": {
            "#": {"tag": "ytech:bone_needles"},
            "N": {"item": "modern_industrialization:tin_nugget"},
            "S": {"tag": "ytech:leather_strips"},
        },
        "pattern": [
            "#S ",
            "SN ",
            "  S"
        ],
        "result": {"count": 1, "id": "minecraft:lead"}
    })

    event.custom({
        "type": "ytech:remaining_shaped_crafting",
        "category": "equipment",
        "key": {
            "#": {"tag": "ytech:bone_needles"},
            "P": {"item": "minecraft:paper"},
            "S": {"tag": "ytech:leather_strips"},
            "B": {"item": "minecraft:writable_book"}
        },
        "pattern": [
            "SP ",
            "SB#",
            "SP "
        ],
        "result": {"count": 1, "id": "map_atlases:atlas"}
    })

    event.custom({
        "type": "ytech:remaining_shaped_crafting",
        "category": "equipment",
        "key": {
            "#": {"tag": "ytech:bone_needles"},
            "S": {"tag": "ytech:leather_strips"},
            "B": {"item": "minecraft:writable_book"}
        },
        "pattern": [
            "SB ",
            "SB#",
            "SB "
        ],
        "result": {"count": 1, "id": "eccentrictome:tome"}
    })

    event.custom({
        "type": "ytech:remaining_shapeless_crafting",
        "category": "misc",
        "ingredients": [
            {"tag": "c:bricks"},
            {"tag": "c:mortar_and_pestles"}
        ],
        "result": {"count": 1, "id": "modern_industrialization:brick_dust"}
    })

    event.remove({type: "map_atlases:crafting_atlas"})

    event.shaped("2x ytech:crafting_workspace", [
        "QQ ",
        "WW ",
        "   "
    ], {
        Q: "immersiveengineering:hemp_fiber",
        W: "minecraft:stick"
    });

})