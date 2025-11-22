ServerEvents.recipes(event => {
    event.remove({id: 'minecraft:blast_furnace'})
    event.remove({id: 'minecraft:tinted_glass'})
    

    event.replaceInput(
            { output: "minecraft:flint_and_steel" },
            "iron_ingot",
            "modern_industrialization:steel_ingot"
        )
})