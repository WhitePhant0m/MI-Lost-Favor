//priority: 100
const $BooleanProperty = Java.loadClass("net.minecraft.world.level.block.state.properties.BooleanProperty")

const en_usPlacer = "Placer"
const en_usEmptyBox = "Empty Box"
const definitelyUniqueNameForIETemplatesList = [
    //{name: 'alloy_smelter', langPlacers: {"en_us": `Alloy Smelter ${en_usPlacer}`}, langBoxes: {"en_us": `Alloy Smelter ${en_usEmptyBox}`}},
    {name: ['arcfurnace', 'arc_furnace'], langPlacers: {"en_us": `Arc Furnace ${en_usPlacer}`}, langBoxes: {"en_us": `Arc Furnace ${en_usEmptyBox}`}},
    {name: 'assembler', langPlacers: {"en_us": `Assembler ${en_usPlacer}`}, langBoxes: {"en_us": `Assembler ${en_usEmptyBox}`}},
    {name: 'auto_workbench', langPlacers: {"en_us": `Auto Workbench ${en_usPlacer}`}, langBoxes: {"en_us": `Auto Workbench ${en_usEmptyBox}`}},
    //{name: 'blast_furnace', langPlacers: {"en_us": `Blast Furnace ${en_usPlacer}`}, langBoxes: {"en_us": `Blast Furnace ${en_usEmptyBox}`}},
    {name: 'bottling_machine', langPlacers: {"en_us": `Bottling Machine ${en_usPlacer}`}, langBoxes: {"en_us": `Bottling Machine ${en_usEmptyBox}`}},
    {name: 'chunk_loader', langPlacers: {"en_us": `Chunk Loader ${en_usPlacer}`}, langBoxes: {"en_us": `Chunk Loader ${en_usEmptyBox}`}},
    //{name: 'coke_oven', langPlacers: {"en_us": `Coke Oven ${en_usPlacer}`}, langBoxes: {"en_us": `Coke Oven ${en_usEmptyBox}`}},
    {name: 'crusher', langPlacers: {"en_us": `Crusher ${en_usPlacer}`}, langBoxes: {"en_us": `Crusher ${en_usEmptyBox}`}},
    {name: 'diesel_generator', langPlacers: {"en_us": `Diesel Generator ${en_usPlacer}`}, langBoxes: {"en_us": `Diesel Generator ${en_usEmptyBox}`}},
    {name: ['excavator_full', 'excavator'], langPlacers: {"en_us": `Excavator ${en_usPlacer}`}, langBoxes: {"en_us": `Excavator ${en_usEmptyBox}`}},
    {name: 'fermenter', langPlacers: {"en_us": `Fermenter ${en_usPlacer}`}, langBoxes: {"en_us": `Fermenter ${en_usEmptyBox}`}},
    //{name: 'improved_blast_furnace', langPlacers: {"en_us": `Improved Blast Furnace ${en_usPlacer}`}, langBoxes: {"en_us": `Improved Blast Furnace ${en_usEmptyBox}`}},
    {name: 'lightning_rod', langPlacers: {"en_us": `Lightning Rod ${en_usPlacer}`}, langBoxes: {"en_us": `Lightning Rod ${en_usEmptyBox}`}},
    {name: 'metal_press', langPlacers: {"en_us": `Metal Press ${en_usPlacer}`}, langBoxes: {"en_us": `Metal Press ${en_usEmptyBox}`}},
    {name: 'mixer', langPlacers: {"en_us": `Mixer ${en_usPlacer}`}, langBoxes: {"en_us": `Mixer ${en_usEmptyBox}`}},
    {name: 'radio_tower', langPlacers: {"en_us": `Radio Tower ${en_usPlacer}`}, langBoxes: {"en_us": `Radio Tower ${en_usEmptyBox}`}},
    {name: 'refinery', langPlacers: {"en_us": `Refinery ${en_usPlacer}`}, langBoxes: {"en_us": `Refinery ${en_usEmptyBox}`}},
    {name: 'sawmill', langPlacers: {"en_us": `Sawmill ${en_usPlacer}`}, langBoxes: {"en_us": `Sawmill ${en_usEmptyBox}`}},
    {name: ['sheetmetal_tank', 'tank'], langPlacers: {"en_us": `Fluid Tank ${en_usPlacer}`}, langBoxes: {"en_us": `Fluid Tank ${en_usEmptyBox}`}},
    {name: 'shelf', langPlacers: {"en_us": `Shelf ${en_usPlacer}`}, langBoxes: {"en_us": `Shelf ${en_usEmptyBox}`}},
    {name: 'silo', langPlacers: {"en_us": `Silo ${en_usPlacer}`}, langBoxes: {"en_us": `Silo ${en_usEmptyBox}`}},
    {name: 'squeezer', langPlacers: {"en_us": `Squeezer ${en_usPlacer}`}, langBoxes: {"en_us": `Squeezer ${en_usEmptyBox}`}}
]

const en_usOreSample = "Ore Sample"
const ore_list = [
    { lang: {"en_us": `Iron ${en_usOreSample}`}, itemName: "iron", directory: "minecraft" },
    { lang: {"en_us": `Gold ${en_usOreSample}`}, itemName: "gold", directory: "minecraft" },
    { lang: {"en_us": `Diamond ${en_usOreSample}`}, itemName: "diamond", directory: "minecraft" },
    { lang: {"en_us": `Copper ${en_usOreSample}`}, itemName: "copper", directory: "minecraft" },
    { lang: {"en_us": `Coal ${en_usOreSample}`}, itemName: "coal", directory: "minecraft" },
    { lang: {"en_us": `Emerald ${en_usOreSample}`}, itemName: "emerald", directory: "minecraft" },
    { lang: {"en_us": `Lapis ${en_usOreSample}`}, itemName: "lapis", directory: "minecraft" },
    { lang: {"en_us": `Redstone ${en_usOreSample}`}, itemName: "redstone", directory: "minecraft" },
    { lang: {"en_us": `Ancient Debris Sample`}, itemName: "ancient_debris", directory: "minecraft", uniqueBase:"minecraft:block/netherrack", uniqueOre:"minecraft:block/ancient_debris_top"},
    { lang: {"en_us": `Nether Quartz ${en_usOreSample}`}, itemName: "nether_quartz", directory: "minecraft", uniqueBase:"minecraft:block/netherrack" },
    { lang: {"en_us": `Nether Gold ${en_usOreSample}`}, itemName: "nether_gold", directory: "minecraft", uniqueBase:"minecraft:block/netherrack" },
    { lang: {"en_us": `Antimony ${en_usOreSample}`}, itemName: "antimony", directory: "modern_industrialization" },
    { lang: {"en_us": `Bauxite ${en_usOreSample}`}, itemName: "bauxite", directory: "modern_industrialization"},
    { lang: {"en_us": `Iridium ${en_usOreSample}`}, itemName: "iridium", directory: "modern_industrialization"},
    { lang: {"en_us": `Lead ${en_usOreSample}`}, itemName: "lead", directory: "modern_industrialization"},
    { lang: {"en_us": `Monazite ${en_usOreSample}`}, itemName: "monazite", directory: "modern_industrialization" },
    { lang: {"en_us": `Nickel ${en_usOreSample}`}, itemName: "nickel", directory: "modern_industrialization" },
    { lang: {"en_us": `Platinum ${en_usOreSample}`}, itemName: "platinum", directory: "modern_industrialization" },
    { lang: {"en_us": `Salt ${en_usOreSample}`}, itemName: "salt", directory: "modern_industrialization" },
    { lang: {"en_us": `Quartz ${en_usOreSample}`}, itemName: "quartz", directory: "modern_industrialization"},
    { lang: {"en_us": `Tin ${en_usOreSample}`}, itemName: "tin", directory: "modern_industrialization" },
    { lang: {"en_us": `Titanium ${en_usOreSample}`}, itemName: "titanium", directory: "modern_industrialization" },
    { lang: {"en_us": `Tungsten ${en_usOreSample}`}, itemName: "tungsten", directory: "modern_industrialization" },
    { lang: {"en_us": `Uranium ${en_usOreSample}`}, itemName: "uranium", directory: "modern_industrialization" },
]

global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime = global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime || {}
global.AnotherDefinitelyUniqueNameForBoxes = global.AnotherDefinitelyUniqueNameForBoxes || {}

const enabledProperty = $BooleanProperty.create("enabled")

createNewBlock("chunk_flag", {property:enabledProperty, box:[5, 0, 5, 11, 1, 11, true], defaultCutout:true})

ore_list.forEach(ore => {
    createNewBlock(`${ore.itemName}_ore_sample`, {
        blockType:"cardinal",
        defaultCutout:true, 
        box:[2, 0, 2, 14, 5, 14, true], 
        soundType:"stone",
        property:BlockProperties.WATERLOGGED,
        tagBlock:'minecraft:mineable/pickaxe',
        lang:ore.lang
    })
});

definitelyUniqueNameForIETemplatesList.forEach(name => {
    const [nameString, itemName] = Array.isArray(name.name) ? [name.name[0], name.name[1]] : [name.name, name.name]
    createNewBlock(`${nameString}_placer`, {
        blockType:"cardinal",
        defaultCutout:true,
        box:[2, 0, 1, 14, 9, 15, true],
        soundType:'bamboo',
        tagBlock:"milf:placers",
        property:enabledProperty,
        defaultState:{cycle:enabledProperty},
        parentModel:"kubejs:block/box_closed",
        lang:name.langPlacers
    })
    global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime[`kubejs:${nameString}_placer`] = `immersiveengineering:${itemName}`
    createNewBlock(`${nameString}_empty_box`, {
        blockType:"cardinal",
        defaultCutout:true,
        box:[2, 0, 1, 14, 9, 15, true],
        soundType:'bamboo',
        tagBlock:"milf:empty_box",
        property:enabledProperty,
        defaultState:{cycle:enabledProperty},
        parentModel:"kubejs:block/box_open",
        noDrops:true,
        lang:name.langBoxes
    })
    global.AnotherDefinitelyUniqueNameForBoxes[`kubejs:${nameString}_empty_box`] = `immersiveengineering:${itemName}`
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

definitelyUniqueNameForIETemplatesList.forEach(name => {
    const [nameString, itemName] = Array.isArray(name) ? [name[0], name[1]] : [name, name]
    const emiJsonPath = `kubejs/assets/emi/recipe/additions/${nameString}_placer.json`;
    const left = {
        "type": "item",
        "id": `kubejs:${nameString}_placer`,
        "remainder": `item:kubejs:${nameString}_empty_box`
    }
    const right = {
        "type": "item",
        "id": "immersiveengineering:hammer",
        "chance": 0
    }
    const Json = {
        "type": "emi:world_interaction",
        "left":left,
        "right":right,
        "output": `item:immersiveengineering:${itemName}`
    }
    JsonIO.write(emiJsonPath, JSON.stringify(Json, null, 2))
}) 
*/