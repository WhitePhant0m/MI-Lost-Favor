StartupEvents.registry('block', event => {

    //fix quartz and ancient_debris

    const ore_list = [
        { displayName: "Iron", itemName: "iron", directory: "minecraft" },
        { displayName: "Gold", itemName: "gold", directory: "minecraft" },
        { displayName: "Diamond", itemName: "diamond", directory: "minecraft" },
        { displayName: "Copper", itemName: "copper", directory: "minecraft" },
        { displayName: "Coal", itemName: "coal", directory: "minecraft" },
        { displayName: "Emerald", itemName: "emerald", directory: "minecraft" },
        { displayName: "Lapis", itemName: "lapis", directory: "minecraft" },
        { displayName: "Redstone", itemName: "redstone", directory: "minecraft" },
        { displayName: "Ancient Debris", itemName: "ancient_debris", directory: "minecraft", uniqueBase:"minecraft:block/netherrack", uniqueOre:"minecraft:block/ancient_debris_top"},
        { displayName: "Nether Quartz", itemName: "nether_quartz", directory: "minecraft", uniqueBase:"minecraft:block/netherrack" },
        { displayName: "Nether Gold", itemName: "nether_gold", directory: "minecraft", uniqueBase:"minecraft:block/netherrack" },
        { displayName: "Antimony", itemName: "antimony", directory: "modern_industrialization" },
        { displayName: "Bauxite", itemName: "bauxite", directory: "modern_industrialization"},
        { displayName: "Iridium", itemName: "iridium", directory: "modern_industrialization"},
        { displayName: "Lead", itemName: "lead", directory: "modern_industrialization"},
        { displayName: "Monazite", itemName: "monazite", directory: "modern_industrialization" },
        { displayName: "Nickel", itemName: "nickel", directory: "modern_industrialization" },
        { displayName: "Platinum", itemName: "platinum", directory: "modern_industrialization" },
        { displayName: "Salt", itemName: "salt", directory: "modern_industrialization" },
        { displayName: "Quartz", itemName: "quartz", directory: "modern_industrialization"},
        { displayName: "Tin", itemName: "tin", directory: "modern_industrialization" },
        { displayName: "Titanium", itemName: "titanium", directory: "modern_industrialization" },
        { displayName: "Tungsten", itemName: "tungsten", directory: "modern_industrialization" },
        { displayName: "Uranium", itemName: "uranium", directory: "modern_industrialization" },
    ]
    /* 
    ore_list.forEach(ore => {
        event
            .create(`kubejs:${ore.itemName}_ore_sample`, 'cardinal')
            .displayName(`${ore.displayName} Ore Sample`)
            .defaultCutout()
            .box(4, 0, 3, 9, 5, 8, true)
            .box(4, 0, 10, 8, 2, 14, true)
            .box(8, 0, 7, 12, 3, 11, true)
            .soundType('stone')
            .property(BlockProperties.WATERLOGGED)
            .tagBlock('minecraft:mineable/pickaxe')
    });
    */

    ore_list.forEach(ore => {
        event
            .create(`kubejs:${ore.itemName}_ore_sample`, 'cardinal')
            .displayName(`${ore.displayName} Ore Sample`)
            .defaultCutout()
            .box(2, 0, 2, 14, 5, 14, true)
            .soundType('stone')
            .property(BlockProperties.WATERLOGGED)
            .tagBlock('minecraft:mineable/pickaxe')
    });

    /*JSONs shenanigans
    ore_list.forEach(ore => {
        const blockstatesJsonPath = `kubejs/assets/kubejs/blockstates/${ore.itemName}_ore_sample.json`;
        const blockstatesJson = {"variants": {"": []}}

        for(let i = 1; i <=6; i++){
            let modelsJsonPath = `kubejs/assets/kubejs/models/block/ore_samples/${ore.itemName}_ore_sample_${i}.json`
            let modelsJson = {
                "parent": `kubejs:block/ore_sample_${i}`,
                "textures": {
                    "ore": `${ore.directory}:block/${ore.itemName}_ore`,
                }
            }
            if(ore.uniqueBase){modelsJson.textures["0"] = ore.uniqueBase}
            if(ore.uniqueOre){modelsJson.textures["ore"] = ore.uniqueOre}
            JsonIO.write(modelsJsonPath, JSON.stringify(modelsJson, null, 2))
            blockstatesJson.variants[""].push(
                    {"model": `kubejs:block/ore_samples/${ore.itemName}_ore_sample_${i}`,"weight":1},
                    {"model": `kubejs:block/ore_samples/${ore.itemName}_ore_sample_${i}`, "y": 90,"weight":1},
                    {"model": `kubejs:block/ore_samples/${ore.itemName}_ore_sample_${i}`, "y": 180,"weight":1},
                    {"model": `kubejs:block/ore_samples/${ore.itemName}_ore_sample_${i}`, "y": 270,"weight":1},
            )
        }
        JsonIO.write(blockstatesJsonPath, JSON.stringify(blockstatesJson, null, 2))
    })

    */
})