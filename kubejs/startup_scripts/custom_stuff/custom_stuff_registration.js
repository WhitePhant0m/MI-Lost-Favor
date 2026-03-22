//priority: 1000
/** @type {typeof import("net.neoforged.neoforge.event.BlockEntityTypeAddBlocksEvent").$BlockEntityTypeAddBlocksEvent } */
let $BlockEntityTypeAddBlocksEvent  = Java.loadClass("net.neoforged.neoforge.event.BlockEntityTypeAddBlocksEvent")
/** @type {typeof import("net.minecraft.world.level.block.state.properties.EnumProperty").$EnumProperty } */
let $EnumProperty  = Java.loadClass("net.minecraft.world.level.block.state.properties.EnumProperty")
/** @type {typeof import("net.minecraft.world.level.block.state.properties.IntegerProperty").$IntegerProperty } */
let $IntegerProperty  = Java.loadClass("net.minecraft.world.level.block.state.properties.IntegerProperty")
/** @type {typeof import("net.minecraft.world.level.block.state.properties.BooleanProperty").$BooleanProperty } */
let $BooleanProperty  = Java.loadClass("net.minecraft.world.level.block.state.properties.BooleanProperty")
global.langCustomStuff = global.langCustomStuff || {}

const enabledProperty = $BooleanProperty.create("enabled")
//const activeMachineShapeProperty  = $EnumProperty.create("shape", "String",["0", "1", "2", "3", "4"])
const activeMachineShapeProperty  = $IntegerProperty.create("machine_shape", 0, 5)


function createNewItem(id, args) {
    args = args || {}
    StartupEvents.registry('item', event => {
        let item = args.itemType ? event.create(id, args.itemType) : event.create(id)
        item.texture(args.texturePath || `custom_stuff:item/${id}`)
        itemBuilder(item, args)
    })
    global.langCustomStuff[`item.kubejs.${id}`] = Object.assign({ "en_us": idToName(id) }, args.lang)
}

function itemBuilder(/**@type {$ItemBuilder_} */ item, args) {
    args.stackSize && item.maxStackSize(args.stackSize)
    args.rarity && item.rarity(args.rarity)
    args.material && item.material(args.material)
    args.tag && (!Array.isArray(args.tag) ? item.tag(args.tag) : args.tag.forEach(tag => { item.tag(tag) }))
    args.maxDamage && item.maxDamage(args.maxDamage)
    args.useAnimation && item.useAnimation(args.useAnimation)
    args.food && item.food(food => {
        args.food.nutrition && food.nutrition(args.food.nutrition)
        args.food.saturation && food.saturation(args.food.saturation)
        args.food.effects && args.food.effects.forEach(effect => food.effect.apply(food, effect))
        args.food.alwaysEdible && food.alwaysEdible()
        args.food.eaten && food.eaten(ctx => global.get(args.food.eaten).call(global.get(args.food.eaten), ctx))
    })
    if (args.use){
        item.use((level, player, hand) => args.use.conditions ? args.use.conditions(level, player, hand)  : true)
        item.useDuration(itemStack => args.use.duration || 64)
        item.useAnimation(args.use.animation || "bow")
        item.finishUsing((itemstack, level, entity) => args.use.finishUsing ? args.use.finishUsing(itemstack, level, entity) : itemstack)
        args.use.releaseUsing && item.releaseUsing((itemstack, level, entity, tick) =>args.use.releaseUsing(itemstack, level, entity, tick))
    }
}

function createNewBlock(id, args) {
    args = args || {}
    StartupEvents.registry('block', event => {
        const block = args.blockType ? event.create(id, args.blockType) : event.create(id)
        block.texture(args.texturePath || `custom_stuff:blocks/${id}`)
        args.soundType && block.soundType(args.soundType)
        args.requiresTool && block.requiresTool(true)
        args.hardness && block.hardness(args.hardness)
        args.renderType && block.renderType(args.renderType)
        args.defaultCutout && block.defaultCutout()
        args.box && block.box.apply(block, args.box)
        args.tagBlock && (!Array.isArray(args.tagBlock) ? block.tagBlock(args.tagBlock) : args.tagBlock.forEach(tag => { block.tagBlock(tag) }))
        args.parentModel && block.parentModel(args.parentModel)
        args.noDrops && block.noDrops()
        args.notSolid && block.notSolid()
        args.waterlogged && block.waterlogged()
        //args.property && block.property(args.property)
        args.blockEntity && block.blockEntity(args.blockEntity)
        args.property && (!Array.isArray(args.property) ? block.property(args.property) : args.property.forEach(property => { block.property(property)}))
        if (args.defaultState) {
            block.defaultState(state => {
                args.defaultState.cycle && state.cycle(args.defaultState.cycle)
                args.defaultState.setProperty && state.set(args.defaultState.setProperty.property, args.defaultState.setProperty.value)
            })
        }
        block.item(item => {
            itemBuilder(item, args)
        })
    })
    global.langCustomStuff[`block.kubejs.${id}`] = Object.assign({ "en_us": idToName(id) }, args.lang)
}

function createNewFluid(id, args) {
    args = args || {}
    StartupEvents.registry('fluid', event => {
        let fluid = args.textureType ? event.create(id, args.textureType) : event.create(id)
        args.color && fluid.tint.apply(fluid, [args.color])
        itemBuilder(fluid.bucketItem, args)
    })
    global.langCustomStuff[`item.kubejs.${id}`] = Object.assign({ "en_us": idToName(id) }, args.lang)
}

function idToName(id) {
    return id.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}

global.setOnFire = ctx => {
    ctx.player.setRemainingFireTicks(200)
}


//#region Easter eggs
createNewBlock("saeta_plush", { blockType: "cardinal", renderType: "cutout", notSolid: true, waterlogged: true, soundType: "wool", stackSize: 1, rarity: "epic", box: [4, 0, 4, 12, 12, 12] })
createNewBlock("kisuny_plush", { blockType: "cardinal", renderType: "cutout", notSolid: true, waterlogged: true, soundType: "wool", stackSize: 1, rarity: "epic", box: [4, 0, 4, 12, 12, 12] })
createNewItem('meze_109', { itemType: "helmet", material: 'kubejs:meze', stackSize: 1, rarity: 'epic' })
//#endregion

//#region Food
createNewItem("steaming_iron_ingot", { food: { nutrition: 4, saturation: 0, alwaysEdible: true, eaten: "setOnFire", effects: [['minecraft:nausea', 200, 0, 1], ['minecraft:darkness', 100, 0, 1]] }, lang: { "en_us": "Steaming iron ingot", "ru_ru": "Жареный железный слиток" }})
createNewItem("dirt_cake", { food: { nutrition: 1, saturation: 0, alwaysEdible: true, effects: [['minecraft:hunger', 200, 0, 1], ['minecraft:slowness', 200, 0, 1], ['minecraft:strength', 100, 0, 1]] }, lang: { "en_us": "Dirt cake", "ru_ru": "Торт из грязи" } })
createNewItem("concrete_popsicle", { food: { nutrition: 1, saturation: 9, alwaysEdible: false, effects: [['minecraft:slowness', 100, 10, 1]] }, lang: { "en_us": "Concrete popsicle"}})
createNewItem("uranium_sandwich", { food: { nutrition: 1, saturation: 20000, alwaysEdible: true, effects: [['minecraft:hunger', 200, 3, 1], ['minecraft:poison', 1000, 0, 1]] }, lang: { "en_us": "Uranium sandwich", "ru_ru": "Урановый бутерброд" }})

global.getConfidence = (/**@type {$FoodEatenKubeEvent_}*/ ctx) => {
    if (ctx.player.level.clientSide) return
    let player = ctx.entity;
    let player_name = player.profile.name
    ctx.server.runCommandSilent(`astages add ${player_name} the_gatekeeper`)
}
createNewItem("vial_of_liquid_confidence", {
    useAnimation: "drink",
    rarity: 'epic',
    food: { nutrition: 1, saturation: 0, alwaysEdible: true, eaten: "getConfidence" },
    lang: { "en_us": "Vial of liquid confidence", "ru_ru": "Флакон жидкой уверенности" }
})

//#endregion

//#region Misc
createNewItem('amber_visage', { stackSize: 16, rarity: 'epic', lang: { "en_us": "Amber visage", "ru_ru": "Янтарный облик" } })
createNewItem('table_core', {rarity: 'rare', lang: { "en_us": "Table Core", "ru_ru": "Ядро Стола" } })
createNewItem('onyx_table_core', {rarity: 'rare', lang: { "ru_ru": "Ониксовое Ядро Стола" } })
createNewItem('moonstone_table_core', {rarity: 'rare', lang: { "ru_ru": "Луннокаменное Ядро Стола" } })

createNewItem('dev_pen')
createNewItem('nbt_pen')

createNewItem('transmutation_orb', {use:{animation:"block"}})
createNewItem('regal_orb', {use:{animation:"block"}})
createNewItem('divine_orb', {use:{animation:"block"}})
createNewItem('orb_of_alchemy', {use:{animation:"block"}})
createNewItem('orb_of_chance', {use:{animation:"block"}})
createNewItem('orb_of_annulment', {use:{animation:"block"}})
createNewItem('orb_of_regret', {use:{animation:"block"}})
createNewItem('orb_of_corruption', {use:{animation:"block"}})
createNewItem('orb_of_the_forest', {use:{animation:"block"}})

createNewItem('rune_of_piercing', {stackSize: 16, rarity: 'rare', lang : { "en_us": "Rune of Piercing", "ru_ru": "Руна Пронзания" }})
createNewItem('rune_of_armor', {stackSize: 16, rarity: 'rare', lang : { "en_us": "Rune of Armor", "ru_ru": "Руна Брони" }})
createNewItem('rune_of_bloodshed', {stackSize: 16, rarity: 'rare', lang : { "en_us": "Rune of Bloodshed", "ru_ru": "Руна Кровопролития" }})
createNewItem('rune_of_diversity', {stackSize: 16, rarity: 'rare', lang : { "en_us": "Rune of Diversity", "ru_ru": "Руна Разнообразия" }})
createNewItem('rune_of_fishing', {stackSize: 16, rarity: 'rare', lang : { "en_us": "Rune of Fishing", "ru_ru": "Руна Рыбалки" }})
createNewItem('rune_of_mining', {stackSize: 16, rarity: 'rare', lang : { "en_us": "Rune of Mining", "ru_ru": "Руна Добычи" }})
createNewItem('blaze_core', {stackSize: 1, rarity: 'epic', lang : { "en_us": "Blaze Core", "ru_ru": "Ядро Пламени" }})
createNewItem('electronic_ender_core', {stackSize: 1, rarity: 'epic', lang : { "en_us": "Electronic Ender Core", "ru_ru": "Электронное Ядро Энда" }})
createNewItem('magnet_part', {stackSize: 16, lang : { "en_us": "Magnet Part", "ru_ru": "Магнитная часть" }})
createNewItem('demagnetized_magnet_part', {stackSize: 16, lang : { "en_us": "Demagnetized Magnet Part", "ru_ru": "Размагниченная Часть Магнита" }})

//#endregion

//#region Ytech stuff
createNewItem('needle', { maxDamage: 500, tag: "ytech:bone_needles", lang: { "en_us": "Needle", "ru_ru": "Игла" }})
createNewItem('crushed_copper', { tag: ["c:crushed_ores", "c:crushed_ores/copper"], lang: { "en_us": "Сrushed copper", "ru_ru": "Измельченная медь" }})
createNewItem('crushed_gold', { tag: ["c:crushed_ores", "c:crushed_ores/gold"], lang: { "en_us": "Сrushed gold", "ru_ru": "Измельченное золото" }})
createNewItem('crushed_iron', { tag: ["c:crushed_ores", "c:crushed_ores/iron"], lang: { "en_us": "Сrushed iron", "ru_ru": "Измельченное железо" }})
createNewItem('crushed_lead', { tag: ["c:crushed_ores", "c:crushed_ores/lead"], lang: { "en_us": "Сrushed lead", "ru_ru": "Измельченный свинец" }})
createNewItem('crushed_tin', { tag: ["c:crushed_ores", "c:crushed_ores/tin"], lang: { "en_us": "Сrushed tin", "ru_ru": "Измельченное олово" }})

createNewItem('unfired_fire_clay_brick')
createNewItem('fire_clay_ball')
//#endregion

//#region MI stuff
createNewItem('bronze_glass', { stackSize: 8, lang: { "en_us": "Bronze glass", "ru_ru": "Бронзовое стекло" } })
createNewItem('steel_infused_glass', { stackSize: 8, lang: { "en_us": "Steel infused glass", "ru_ru": "Стальное стекло" } })
createNewItem('tempered_glass', { stackSize: 8, lang: { "en_us": "Tempered glass", "ru_ru": "Закаленное стекло" } })
createNewItem('bronze_machine_bit', { stackSize: 32, lang: { "en_us": "Bronze machine bit", "ru_ru": "Бронзовый фрагмент механизма" } })
createNewItem('steel_machine_bit', { stackSize: 32, lang: { "en_us": "Steel machine bit", "ru_ru": "Стальной фрагмент механизма" } })
createNewItem('basic_machine_bit', { stackSize: 32, lang: { "en_us": "Basic machine bit", "ru_ru": "Базовый фрагмент механизма" } })
createNewItem('small_copper_fluid_container', { texturePath: 'custom_stuff:item/copper_fluid_container', lang: { "en_us": "Small copper fluid container", "ru_ru": "Небольшой медный контейнер для жидкости" } })
createNewItem('small_steel_fluid_container', { texturePath: 'custom_stuff:item/steel_fluid_container', lang: { "en_us": "Small steel fluid container", "ru_ru": "Небольшой стальной контейнер для жидкости" } })
createNewItem('rangefinder', { lang: { "en_us": "Rangefinder", "ru_ru": "Дальномер" } })
createNewItem('cd_reader', { lang: { "en_us": "CD Reader", "ru_ru": "CD-Привод" } })
createNewItem('cd', { stackSize: 8, lang: { "en_us": "CD", "ru_ru": "CD" } })
createNewItem('lens', { lang: { "en_us": "Lens", "ru_ru": "Линза" } })

createNewItem("bits_mold")
createNewItem("cement")
createNewFluid("liquid_plastic", {textureType:"thick", color: Number("0xFFFFFF")})
createNewFluid("desalted_crude_oil", {textureType:"thick", color: Number("0x292520")})
createNewFluid("high_sulfur_kerosene", {textureType:"thin", color: Number("0x735b3e")})


createNewBlock("radio_tower_block", { hardness: 1, soundType: "chain", requiresTool: true, tagBlock: 'minecraft:mineable/pickaxe', lang: { "en_us": "Radio tower block", "ru_ru": "Блок радио вышки" } })
createNewBlock("radio_tower_slab", { texturePath: 'custom_stuff:blocks/radio_tower_block', blockType: "slab", hardness: 1, soundType: "chain", requiresTool: true, tagBlock: 'minecraft:mineable/pickaxe', lang: { "en_us": "Radio tower slab", "ru_ru": "Плита радио вышки" } })

//#endregion

//#region AE stuff
//enigma
createNewItem('old_diary', { stackSize: 1, lang: { "en_us": "Old diary", "ru_ru": "Старый дневник" } })
createNewItem('old_tablet', { stackSize: 1, lang: { "en_us": "Old tablet", "ru_ru": "Старая табличка" } })
createNewItem('disk_from_space', { stackSize: 1, lang: { "en_us": "Disk from space", "ru_ru": "Внеземной диск" } })
createNewItem('holy_book_of_color', { texturePath: 'custom_stuff:item/color_holy_book', stackSize: 1, lang: { "en_us": "Holy book of color", "ru_ru": "Священная книга цвета" } })
createNewItem('old_notes', { stackSize: 1, lang: { "en_us": "Old notes", "ru_ru": "Старые заметки" } })

createNewItem('punched_card', { stackSize: 1, lang: { "en_us": "Punched card", "ru_ru": "Перфокарта" } })
createNewItem('blank_blueprint', { stackSize: 63, lang: { "en_us": "Blank blueprint", "ru_ru": "Пустой чертеж" } })

createNewItem('bioactive_coating', { stackSize: 1 })
createNewItem('thermophilic_dermis', { stackSize: 1 })
createNewItem('symbiote_membrane', { stackSize: 1 })

createNewItem('goo_coated_blank_blueprint', { stackSize: 1 })



//cores
createNewItem('core_hull', { lang: { "en_us": "Core hull", "ru_ru": "Основа ядра" } })
createNewItem('core_press', { stackSize: 16, lang: { "en_us": "Core press", "ru_ru": "Пресс для ядра" } })

//cells
createNewItem('cell_half', { lang: { "en_us": "Cell half", "ru_ru": "Часть ячейки" } })
createNewItem('cell_press', { stackSize: 16, lang: { "en_us": "Cell press", "ru_ru": "Пресс для ячейки" } })

//MI automation tokens (disks)
createNewItem('mysterious_disk', { texturePath: 'custom_stuff:item/automation_disk_t1', stackSize: 8, lang: { "en_us": "Mysterious disk", "ru_ru": "Таинственный диск" } })
createNewItem('storage_disk', { texturePath: 'custom_stuff:item/automation_disk_t2', stackSize: 8, lang: { "en_us": "Storage disk", "ru_ru": "Диск Хранения данных" } })
createNewItem('automation_disk', { texturePath: 'custom_stuff:item/automation_disk_t3', stackSize: 8, lang: { "en_us": "Automation disk", "ru_ru": "Диск автоматизации" } })
createNewItem('quantum_disk', { texturePath: 'custom_stuff:item/automation_disk_t4', stackSize: 8, lang: { "en_us": "Quantum disk", "ru_ru": "Квантовый диск" } })

//Blueprints
createNewItem('blueprint_pack', { stackSize: 4, lang: { "en_us": "Blueprint pack", "ru_ru": "Набор чертежей" } })
createNewItem('mysterious_blueprint', { texturePath: 'custom_stuff:item/blueprint_t1', stackSize: 1, lang: { "en_us": "Mysterious blueprint", "ru_ru": "Таинственный чертёж" } })
createNewItem('storage_blueprint', { texturePath: 'custom_stuff:item/blueprint_t2', stackSize: 1, lang: { "en_us": "Storage blueprint", "ru_ru": "Чертёж хранения" } })
createNewItem('automation_blueprint', { texturePath: 'custom_stuff:item/blueprint_t3', stackSize: 1, lang: { "en_us": "Automation blueprint", "ru_ru": "Чертёж автоматизации" } })
createNewItem('quantum_blueprint', { texturePath: 'custom_stuff:item/blueprint_t4', stackSize: 1, lang: { "en_us": "Quantum blueprint", "ru_ru": "Квантовый чертёж" } })
createNewItem('divine_blueprint', { texturePath: 'custom_stuff:item/blueprint_t5', stackSize: 1, lang: { "en_us": "Divine blueprint", "ru_ru": "Божественный чертёж" } })
//#endregion