//priority: 100
const $BooleanProperty = Java.loadClass("net.minecraft.world.level.block.state.properties.BooleanProperty")

const en_usPlacer = "Placer"
const en_usEmptyBox = "Empty Box"
const ru_ruPlacer = "Установщик"
const ru_ruEmptyBox = "Пустая коробка"
const definitelyUniqueNameForIETemplatesList = [
    //{name: 'alloy_smelter', langPlacers: {"en_us": `Alloy Smelter ${en_usPlacer}`}, langBoxes: {"en_us": `Alloy Smelter ${en_usEmptyBox}`}},
    {
        name: ['arcfurnace', 'arc_furnace'],
        langPlacers: {"en_us": `Arc Furnace ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} дуговой Печи`},
        langBoxes: {"en_us": `Arc Furnace ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} дуговой Печи`}
    },
    {
        name: 'assembler',
        langPlacers: { "en_us": `Assembler ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} сборщика` },
        langBoxes: { "en_us": `Assembler ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} сборщика` }
    },
    {
        name: 'auto_workbench',
        langPlacers: { "en_us": `Auto Workbench ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} автоматизированного верстака инженера` },
        langBoxes: { "en_us": `Auto Workbench ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} автоматизированного верстака инженера` }
    },
    //{name: 'blast_furnace', langPlacers: {"en_us": `Blast Furnace ${en_usPlacer}`}, langBoxes: {"en_us": `Blast Furnace ${en_usEmptyBox}`}},
    {
        name: 'bottling_machine',
        langPlacers: { "en_us": `Bottling Machine ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} разливочной машины` },
        langBoxes: { "en_us": `Bottling Machine ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} разливочной машины` }
    },
    {
        name: 'chunk_loader',
        langPlacers: { "en_us": `Chunk Loader ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} загрузчика чанков` },
        langBoxes: { "en_us": `Chunk Loader ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} загрузчика чанков` }
    },
    //{name: 'coke_oven', langPlacers: {"en_us": `Coke Oven ${en_usPlacer}`}, langBoxes: {"en_us": `Coke Oven ${en_usEmptyBox}`}},
    {
        name: 'crusher',
        langPlacers: { "en_us": `Crusher ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} дробителя` },
        langBoxes: { "en_us": `Crusher ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} дробителя` }
    },
    {
        name: 'diesel_generator',
        langPlacers: { "en_us": `Diesel Generator ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} дизельного генератора` },
        langBoxes: { "en_us": `Diesel Generator ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} дизельного генератора` }
    },
    {
        name: ['excavator_full', 'excavator'],
        langPlacers: { "en_us": `Excavator ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} экскаватора` },
        langBoxes: { "en_us": `Excavator ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} экскаватора` }
    },
    {
        name: 'fermenter',
        langPlacers: { "en_us": `Fermenter ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} бродильного аппарата` },
        langBoxes: { "en_us": `Fermenter ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} бродильного аппарата` }
    },
    //{name: 'improved_blast_furnace', langPlacers: {"en_us": `Improved Blast Furnace ${en_usPlacer}`}, langBoxes: {"en_us": `Improved Blast Furnace ${en_usEmptyBox}`}},
    {
        name: 'lightning_rod',
        langPlacers: { "en_us": `Lightning Rod ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} молниетвода` },
        langBoxes: { "en_us": `Lightning Rod ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} молниетвода` }
    },
    {
        name: 'metal_press',
        langPlacers: { "en_us": `Metal Press ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} металлического пресса` },
        langBoxes: { "en_us": `Metal Press ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} металлического пресса` }
    },
    {
        name: 'mixer',
        langPlacers: { "en_us": `Mixer ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} смесителя` },
        langBoxes: { "en_us": `Mixer ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} смесителя` }
    },
    {
        name: 'radio_tower',
        langPlacers: { "en_us": `Radio Tower ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} радио Вышки` },
        langBoxes: { "en_us": `Radio Tower ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} радио Вышки` }
    },
    {
        name: 'refinery',
        langPlacers: { "en_us": `Refinery ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} очистителя` },
        langBoxes: { "en_us": `Refinery ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} очистителя` }
    },
    {
        name: 'sawmill',
        langPlacers: { "en_us": `Sawmill ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} лесопилки` },
        langBoxes: { "en_us": `Sawmill ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} лесопилки` }
    },
    {
        name: ['sheetmetal_tank', 'tank'],
        langPlacers: { "en_us": `Fluid Tank ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} жидкостного резервуара` },
        langBoxes: { "en_us": `Fluid Tank ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} жидкостного резервуара` }
    },
    {
        name: 'shelf',
        langPlacers: { "en_us": `Shelf ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} полки` },
        langBoxes: { "en_us": `Shelf ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} полки` }
    },
    {
        name: 'silo',
        langPlacers: { "en_us": `Silo ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} бункера` },
        langBoxes: { "en_us": `Silo ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} бункера` }
    },
    {
        name: 'squeezer',
        langPlacers: { "en_us": `Squeezer ${en_usPlacer}`, "ru_ru": `${ru_ruPlacer} соковыжималки` },
        langBoxes: { "en_us": `Squeezer ${en_usEmptyBox}`, "ru_ru": `${ru_ruEmptyBox} соковыжималки` }
    }
]

const en_usOreSample = "Ore Sample"
const ru_ruOreSample = "Образец руды"
const ore_list = [
    { lang: { "en_us": `Iron ${en_usOreSample}`, "ru_ru": `Железный ${ru_ruOreSample}` }, itemName: "iron", directory: "minecraft" },
    { lang: { "en_us": `Gold ${en_usOreSample}`, "ru_ru": `Золотой ${ru_ruOreSample}` }, itemName: "gold", directory: "minecraft" },
    { lang: { "en_us": `Diamond ${en_usOreSample}`, "ru_ru": `Алмазный ${ru_ruOreSample}` }, itemName: "diamond", directory: "minecraft" },
    { lang: { "en_us": `Copper ${en_usOreSample}`, "ru_ru": `Медный ${ru_ruOreSample}` }, itemName: "copper", directory: "minecraft" },
    { lang: { "en_us": `Coal ${en_usOreSample}`, "ru_ru": `Угольный ${ru_ruOreSample}` }, itemName: "coal", directory: "minecraft" },
    { lang: { "en_us": `Emerald ${en_usOreSample}`, "ru_ru": `Изумрудный ${ru_ruOreSample}` }, itemName: "emerald", directory: "minecraft" },
    { lang: { "en_us": `Lapis ${en_usOreSample}`, "ru_ru": `Лазуритовый ${ru_ruOreSample}` }, itemName: "lapis", directory: "minecraft" },
    { lang: { "en_us": `Redstone ${en_usOreSample}`, "ru_ru": `Редстоуновый ${ru_ruOreSample}` }, itemName: "redstone", directory: "minecraft" },
    { lang: { "en_us": `Ancient Debris Sample`, "ru_ru": `${ru_ruOreSample} Древних Осколков` }, itemName: "ancient_debris", directory: "minecraft", uniqueBase: "minecraft:block/netherrack", uniqueOre: "minecraft:block/ancient_debris_top" },
    { lang: { "en_us": `Nether Quartz ${en_usOreSample}`, "ru_ru": `Кварцевый ${ru_ruOreSample}` }, itemName: "nether_quartz", directory: "minecraft", uniqueBase: "minecraft:block/netherrack" },
    { lang: { "en_us": `Nether Gold ${en_usOreSample}` , "ru_ru": `${ru_ruOreSample} Адского Золота` }, itemName: "nether_gold", directory: "minecraft", uniqueBase: "minecraft:block/netherrack" },
    { lang: { "en_us": `Antimony ${en_usOreSample}`, "ru_ru": `${ru_ruOreSample} Сурьмы` }, itemName: "antimony", directory: "modern_industrialization" },
    { lang: { "en_us": `Bauxite ${en_usOreSample}`, "ru_ru": `Бокситовый ${ru_ruOreSample}` }, itemName: "bauxite", directory: "modern_industrialization" },
    { lang: { "en_us": `Iridium ${en_usOreSample}`, "ru_ru": `Иридиевый ${ru_ruOreSample}` }, itemName: "iridium", directory: "modern_industrialization" },
    { lang: { "en_us": `Lead ${en_usOreSample}`, "ru_ru": `Свинцовый ${ru_ruOreSample}` }, itemName: "lead", directory: "modern_industrialization" },
    { lang: { "en_us": `Monazite ${en_usOreSample}`, "ru_ru": `Монацитовый ${ru_ruOreSample}` }, itemName: "monazite", directory: "modern_industrialization" },
    { lang: { "en_us": `Nickel ${en_usOreSample}`, "ru_ru": `Никельевый ${ru_ruOreSample}` }, itemName: "nickel", directory: "modern_industrialization" },
    { lang: { "en_us": `Platinum ${en_usOreSample}`, "ru_ru": `Платиновый ${ru_ruOreSample}` }, itemName: "platinum", directory: "modern_industrialization" },
    { lang: { "en_us": `Salt ${en_usOreSample}`, "ru_ru": `${ru_ruOreSample} Соли` }, itemName: "salt", directory: "modern_industrialization" },
    { lang: { "en_us": `Quartz ${en_usOreSample}`, "ru_ru": `Кварцевый ${ru_ruOreSample}` }, itemName: "quartz", directory: "modern_industrialization" },
    { lang: { "en_us": `Tin ${en_usOreSample}`, "ru_ru": `Оловянный ${ru_ruOreSample}` }, itemName: "tin", directory: "modern_industrialization" },
    { lang: { "en_us": `Titanium ${en_usOreSample}`, "ru_ru": `Титановый ${ru_ruOreSample}` }, itemName: "titanium", directory: "modern_industrialization" },
    { lang: { "en_us": `Tungsten ${en_usOreSample}`, "ru_ru": `Вольфрамовый ${ru_ruOreSample}` }, itemName: "tungsten", directory: "modern_industrialization" },
    { lang: { "en_us": `Uranium ${en_usOreSample}`, "ru_ru": `Урановый ${ru_ruOreSample}` }, itemName: "uranium", directory: "modern_industrialization" },
]

global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime = global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime || {}
global.AnotherDefinitelyUniqueNameForBoxes = global.AnotherDefinitelyUniqueNameForBoxes || {}

const enabledProperty = $BooleanProperty.create("enabled")

createNewBlock("chunk_flag", { property: enabledProperty, box: [5, 0, 5, 11, 1, 11, true], defaultCutout: true, lang: { "en_us": "Chunk flag", "ru_ru": "Флаг чанка" }})

ore_list.forEach(ore => {
    createNewBlock(`${ore.itemName}_ore_sample`, {
        blockType: "cardinal",
        defaultCutout: true,
        box: [2, 0, 2, 14, 5, 14, true],
        soundType: "stone",
        property: BlockProperties.WATERLOGGED,
        tagBlock: 'minecraft:mineable/pickaxe',
        lang: ore.lang
    })
});

definitelyUniqueNameForIETemplatesList.forEach(name => {
    const [nameString, itemName] = Array.isArray(name.name) ? [name.name[0], name.name[1]] : [name.name, name.name]
    createNewBlock(`${nameString}_placer`, {
        blockType: "cardinal",
        defaultCutout: true,
        box: [2, 0, 1, 14, 9, 15, true],
        soundType: 'bamboo',
        tagBlock: "milf:placers",
        property: enabledProperty,
        defaultState: { cycle: enabledProperty },
        parentModel: "kubejs:block/box_closed",
        lang: name.langPlacers
    })
    global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime[`kubejs:${nameString}_placer`] = `immersiveengineering:${itemName}`
    createNewBlock(`${nameString}_empty_box`, {
        blockType: "cardinal",
        defaultCutout: true,
        box: [2, 0, 1, 14, 9, 15, true],
        soundType: 'bamboo',
        tagBlock: "milf:empty_box",
        property: enabledProperty,
        defaultState: { cycle: enabledProperty },
        parentModel: "kubejs:block/box_open",
        noDrops: true,
        lang: name.langBoxes
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