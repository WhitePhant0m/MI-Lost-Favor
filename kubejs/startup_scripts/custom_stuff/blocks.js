//priority: 1000
let $BooleanProperty = Java.loadClass("net.minecraft.world.level.block.state.properties.BooleanProperty")
const definitelyUniqueNameForIETemplatesList = [
    //'alloy_smelter',
    ['arcfurnace', 'arc_furnace'],
    'assembler',
    'auto_workbench',
    //'blast_furnace',
    'bottling_machine',
    'chunk_loader',
    //'coke_oven',
    'crusher',
    'diesel_generator',
    ['excavator_full', 'excavator'],
    'fermenter',
    //'improved_blast_furnace',
    'lightning_rod',
    'metal_press',
    'mixer',
    'radio_tower',
    'refinery',
    'sawmill',
    ['sheetmetal_tank', 'tank'],
    'shelf',
    'silo',
    'squeezer'
]

global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime = global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime || {}
global.AnotherDefinitelyUniqueNameForBoxes = global.AnotherDefinitelyUniqueNameForBoxes || {}

StartupEvents.registry('block', event => {


    event.create('radio_tower_block') 
    .item(i => i.maxStackSize(64))
    .displayName('Radio tower block') 
    .hardness(1.0) 
    .soundType("chain")
    .requiresTool(true) 
    .tagBlock('minecraft:mineable/pickaxe')
    .texture('custom_stuff:blocks/radio_tower_block')

    event.create('radio_tower_slab', "slab") 
    .item(i => i.maxStackSize(64))
    .displayName('Radio tower slab') 
    .hardness(1.0) 
    .soundType("chain")
    .requiresTool(true) 
    .tagBlock('minecraft:mineable/pickaxe')
    .texture('custom_stuff:blocks/radio_tower_block')

    const enabledProperty = $BooleanProperty.create("enabled")
    //event.create(`box_open`, "cardinal")
    //event.create(`box_closed`, "cardinal")

    definitelyUniqueNameForIETemplatesList.forEach(name => {
        const [nameString, itemName] = Array.isArray(name) ? [name[0], name[1]] : [name, name]
        console.log([nameString, itemName]);
        event.create(`${nameString}_placer`, "cardinal")
        .defaultCutout()
        .box(2, 0, 1, 14, 9, 15, true)
        .soundType('bamboo')
        .tagBlock("milf:placers")
        .property(enabledProperty)
        .defaultState(state => state.cycle(enabledProperty))
        .parentModel("kubejs:block/box_closed")
        global.AnotherDefinitelyUniqueNameForPlacerBlocksThisTime[`kubejs:${nameString}_placer`] = `immersiveengineering:${itemName}`
        event.create(`${nameString}_empty_box`, "cardinal")
        .defaultCutout()
        .box(2, 0, 1, 14, 9, 15, true)
        .soundType('bamboo')
        .tagBlock("milf:empty_box")
        .property(enabledProperty)
        .defaultState(state => state.cycle(enabledProperty))
        .parentModel("kubejs:block/box_open")
        .noDrops()
        global.AnotherDefinitelyUniqueNameForBoxes[`kubejs:${nameString}_empty_box`] = `immersiveengineering:${itemName}`

    });
})

