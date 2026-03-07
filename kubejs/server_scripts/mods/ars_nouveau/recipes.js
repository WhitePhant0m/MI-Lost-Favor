ServerEvents.recipes(event => {
    const removing_by_recipe_id = [
        "ars_nouveau:archwood_to_chest"
    ]

    removing_by_recipe_id.forEach(id => {
        event.remove({ id: id })
    });

    event.remove({type: "ars_nouveau:enchantment"})
    event.remove({type: "ars_nouveau:reactive_enchantment"})

    event.remove({
        output: [
            "ars_nouveau:volcanic_sourcelink",
            "ars_nouveau:dowsing_rod",
        ]
    })
    event.shaped("ars_nouveau:dowsing_rod", [
        " Q ",
        "WRW",
        "   "
    ], {
        Q: "minecraft:gold_ingot",
        W: "#minecraft:planks",
        R: "enchanted:whiff_of_magic",
    });

    event.remove({output: "ars_elemental:curio_bag"})
    event.shaped("ars_elemental:curio_bag", [
        "CFC",
        "BAB",
        "DBD"
    ], {
        C: "modern_industrialization:iron_rod",
        B: "hexerei:infused_fabric",
        D: "modern_industrialization:iron_large_plate",
        A: "#c:chests",
        F: "enchanted:creeper_heart"
    });
})