//priority: 1000
global.langCustomStuff = global.langCustomStuff || {}
function createNewItem(id, args) {
    args = args || {}
    StartupEvents.registry('item', event =>{
        let item = args.itemType ? event.create(id, args.itemType) : event.create(id)
        item.texture(args.texturePath || `custom_stuff:item/${id}`)
        itemBuilder(item, args)
    })
    global.langCustomStuff[`item.kubejs.${id}`] = Object.assign({"en_us" : idToName(id)}, args.lang)
}


function itemBuilder(/**@type {$ItemBuilder_} */ item, args){
    args.stackSize && item.maxStackSize(args.stackSize)
    args.rarity && item.rarity(args.rarity)
    args.material && item.material(args.material)
    args.tag && (!Array.isArray(args.tag) ? item.tag(args.tag) : args.tag.forEach(tag => {item.tag(tag)}))
    args.maxDamage && item.maxDamage(args.maxDamage)
    args.food && item.food(food =>{
        args.food.nutrition && food.nutrition(args.food.nutrition)
        args.food.saturation && food.saturation(args.food.saturation)
        args.food.effects && args.food.effects.forEach(effect => food.effect.apply(food, effect))
        args.food.alwaysEdible && food.alwaysEdible()
        args.food.eaten && food.eaten(ctx => args.food.eaten(ctx))
    })
}

function createNewBlock(id, args) {
    args = args || {}
    StartupEvents.registry('block', event =>{
        const block = args.blockType ? event.create(id, args.blockType) : event.create(id)
        block.texture(args.texturePath || `custom_stuff:blocks/${id}`)
        args.soundType && block.soundType(args.soundType)
        args.requiresTool && block.requiresTool(true)
        args.hardness && block.hardness(args.hardness)
        args.renderType && block.renderType(args.renderType)
        args.defaultCutout && block.defaultCutout()
        args.box && block.box.apply(block, args.box)
        args.tagBlock && (!Array.isArray(args.tagBlock) ? block.tagBlock(args.tagBlock) : args.tagBlock.forEach(tag => {block.tagBlock(tag)}))
        args.parentModel && block.parentModel(args.parentModel)
        args.noDrops && block.noDrops()
        args.notSolid && block.notSolid()
        args.waterlogged && block.waterlogged()
        args.property && block.property(args.property)
        if (args.defaultState) {
            block.defaultState(state =>{
                args.defaultState.cycle && state.cycle(args.defaultState.cycle)
                args.defaultState.setProperty && state.set(args.defaultState.setProperty.property, args.defaultState.setProperty.value)
            })
        }
        block.item(item => {
            itemBuilder(item, args)
        }) 
    })
    global.langCustomStuff[`block.kubejs.${id}`] = Object.assign({"en_us" : idToName(id)}, args.lang)
}

function idToName(id){
    return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

global.setOnFire = ctx => {
  ctx.player.setRemainingFireTicks(200)
}

//#region Easter eggs
createNewBlock("saeta_plush", {blockType:"cardinal", renderType:"cutout", notSolid:true, waterlogged:true, soundType:"wool", stackSize:1, rarity:"epic", box:[4,0,4,12,12,12]})
createNewBlock("kisuny_plush", {blockType:"cardinal", renderType:"cutout", notSolid:true, waterlogged:true, soundType:"wool", stackSize:1, rarity:"epic", box:[4,0,4,12,12,12]})
createNewItem('meze_109', {itemType:"helmet", material:'kubejs:meze', stackSize: 1, rarity:'epic'})
//#endregion

//#region Food
createNewItem("steaming_iron_ingot", {food:{nutrition:4, saturation:0, alwaysEdible:true, eaten:global.setOnFire, effects:[['minecraft:nausea', 200, 0, 1], ['minecraft:darkness', 100, 0, 1]]}})
createNewItem("dirt_cake", {food:{nutrition:1, saturation:0, alwaysEdible:true, effects:[['minecraft:hunger', 200, 0, 1], ['minecraft:slowness', 200, 0, 1], ['minecraft:strength', 100, 0, 1]]}})
createNewItem("uranium_sandwich", {food:{nutrition:1, saturation:20000, alwaysEdible:true, effects:[['minecraft:hunger', 200, 3, 1], ['minecraft:poison', 1000, 0, 1]]}})

//#endregion

//#region Misc
createNewItem('amber_visage', {stackSize: 16, rarity:'epic', lang:{"en_us":"Amber Visage" , "ru_ru":"Янтарный Облик"}})
createNewItem('dev_pen')

//#endregion

//#region Ytech stuff
createNewItem('needle', {maxDamage:500, tag:"ytech:bone_needles"})
createNewItem('crushed_copper', {tag:["c:crushed_ores", "c:crushed_ores/copper"]})
createNewItem('crushed_gold', {tag:["c:crushed_ores", "c:crushed_ores/gold"]})
createNewItem('crushed_iron', {tag:["c:crushed_ores", "c:crushed_ores/iron"]})
createNewItem('crushed_lead', {tag:["c:crushed_ores", "c:crushed_ores/lead"]})
createNewItem('crushed_tin', {tag:["c:crushed_ores", "c:crushed_ores/tin"]})
//#endregion

//#region MI stuff
createNewItem('bronze_glass', {stackSize: 8, lang: {"en_us": "Bronze Glass"}})
createNewItem('steel_infused_glass', {stackSize: 8, lang: {"en_us": "Steel Infused Glass"}})
createNewItem('tempered_glass', {stackSize: 8, lang: {"en_us": "Tempered Glass"}})
createNewItem('bronze_machine_bit', {stackSize: 32, lang: {"en_us": "Bronze Machine Bit"}})
createNewItem('steel_machine_bit', {stackSize: 32, lang: {"en_us": "Steel Machine Bit"}})
createNewItem('basic_machine_bit', {stackSize: 32, lang: {"en_us": "Basic Machine Bit"}})
createNewItem('small_copper_fluid_container', {texturePath: 'custom_stuff:item/copper_fluid_container', lang: {"en_us": "Small Copper Fluid Container"}})
createNewItem('small_steel_fluid_container', {texturePath: 'custom_stuff:item/steel_fluid_container', lang: {"en_us": "Small Steel Fluid Container"}})
createNewItem('rangefinder', {lang: {"en_us": "Rangefinder"}})
createNewItem('cd_reader', {lang: {"en_us": "CD Reader"}})
createNewItem('cd', {stackSize: 8, lang: {"en_us": "CD"}})
createNewItem('lens', {lang: {"en_us": "Lens"}})

createNewBlock("radio_tower_block", {hardness:1, soundType:"chain", requiresTool:true, tagBlock:'minecraft:mineable/pickaxe', lang:{"en_us":"Radio Tower Block"}})
createNewBlock("radio_tower_slab", {texturePath: 'custom_stuff:blocks/radio_tower_block', blockType:"slab", hardness:1, soundType:"chain", requiresTool:true, tagBlock:'minecraft:mineable/pickaxe', lang:{"en_us":"Radio Tower Slab"}})

//#endregion

//#region AE stuff
//enigma
createNewItem('old_diary', {stackSize: 1, lang: {"en_us": "Old Diary"}})
createNewItem('old_tablet', {stackSize: 1, lang: {"en_us": "Old Tablet"}})
createNewItem('disk_from_space', {stackSize: 1, lang: {"en_us": "Disk From Space"}})
createNewItem('holy_book_of_color', {texturePath: 'custom_stuff:item/color_holy_book', stackSize: 1, lang: {"en_us": "Holy Book of Color"}})
createNewItem('old_notes', {stackSize: 1, lang: {"en_us": "Old Notes"}})

createNewItem('punched_card', {stackSize: 1, lang: {"en_us": "Punched Card"}})
createNewItem('blank_blueprint', {stackSize: 63, lang: {"en_us": "Blank Blueprint"}})

//cores
createNewItem('core_hull', {lang: {"en_us": "Core Hull"}})
createNewItem('core_press', {stackSize: 16, lang: {"en_us": "Core Press"}})

//cells
createNewItem('cell_half', {lang: {"en_us": "Cell Half"}})
createNewItem('cell_press', {stackSize: 16, lang: {"en_us": "Cell Press"}})

//MI automation tokens (disks)
createNewItem('mysterious_disk', {texturePath: 'custom_stuff:item/automation_disk_t1', stackSize: 8, lang: {"en_us": "Mysterious Disk"}})
createNewItem('storage_disk', {texturePath: 'custom_stuff:item/automation_disk_t2', stackSize: 8, lang: {"en_us": "Storage Disk"}})
createNewItem('automation_disk', {texturePath: 'custom_stuff:item/automation_disk_t3', stackSize: 8, lang: {"en_us": "Automation Disk"}})
createNewItem('quantum_disk', {texturePath: 'custom_stuff:item/automation_disk_t4', stackSize: 8, lang: {"en_us": "Quantum Disk"}})

//Blueprints
createNewItem('blueprint_pack', {stackSize: 4, lang: {"en_us": "Blueprint Pack"}})
createNewItem('mysterious_blueprint', {texturePath: 'custom_stuff:item/blueprint_t1', stackSize: 1, lang: {"en_us": "Mysterious Blueprint"}})
createNewItem('storage_blueprint', {texturePath: 'custom_stuff:item/blueprint_t2', stackSize: 1, lang: {"en_us": "Storage Blueprint"}})
createNewItem('automation_blueprint', {texturePath: 'custom_stuff:item/blueprint_t3', stackSize: 1, lang: {"en_us": "Automation Blueprint"}})
createNewItem('quantum_blueprint', {texturePath: 'custom_stuff:item/blueprint_t4', stackSize: 1, lang: {"en_us": "Quantum Blueprint"}})
createNewItem('divine_blueprint', {texturePath: 'custom_stuff:item/blueprint_t5', stackSize: 1, lang: {"en_us": "Divine Blueprint"}})
//#endregion
