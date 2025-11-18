// Remove IE recipes
ServerEvents.recipes(event => {

    const remove_by_id = [
        "eternal_starlight:blast_furnace_from_cinder_brick",
    ]
    remove_by_id.forEach(id => {
        event.remove({ id: id })
    });

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
                "W": { "item": `eternal_starlight:${color.name}_yeti_fur` }
            },
            outputItems: [[{ id: `minecraft:${color.name}_bed` }, 1]],
            removeRecipeType: "minecraft:crafting_shaped"
        })
    });
})