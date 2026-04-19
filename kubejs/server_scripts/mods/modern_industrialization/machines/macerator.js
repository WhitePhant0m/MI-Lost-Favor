ServerEvents.recipes(event => {
    miMachineCraft(event, {
        energy: 2, time: 100, machine: "modern_industrialization:macerator",
        inputItems: [[{ tag: "c:ores/redstone" }, 1]],
        outputItems: [[{ item: "modern_industrialization:redstone_crushed_dust" }, 4], [{ item: "paganbless:cinnabar" }, 1]],
        ieCompat:true
    })

    miMachineCraft(event, {
        energy: 2, time: 100, machine: "modern_industrialization:macerator",
        inputItems: [[{ item: "paganbless:cinnabar" }, 1]],
        outputItems: [[{ item: "minecraft:redstone" }, 3]],
        ieCompat: true
    })

    miMachineCraft(event, {
        energy: 2, time: 100, machine: "modern_industrialization:macerator",
        inputItems: [[{ item: "minecraft:player_head" }, 1]],
        outputItems: [[{ item: "grimoireofgaia:meat" }, 1], [{ item: "grimoireofgaia:meat" }, 1, 0.25]],
        ieCompat: true
    })
})