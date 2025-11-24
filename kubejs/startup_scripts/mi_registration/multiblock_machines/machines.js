MIMachineEvents.registerCasings(event => {
    event.registerBlockImitation("treated_wood_casing", "immersiveengineering:basic_engineering");
    event.registerBlockImitation("sheetmetal_steel_casing", "immersiveengineering:sheetmetal_steel");
    event.registerBlockImitation("fire_clay_bricks", "modern_industrialization:fire_clay_bricks");
    event.registerBlockImitation("blast_brick", "immersiveengineering:blastbrick");
    event.registerBlockImitation("steel_plated_bricks", "extended_industrialization:steel_plated_bricks");

})

global.miTweaksTags = global.miTweaksTags || []

const MI_HATCHES_ALL = ["energy_input", "item_input", "item_output", "fluid_input", "fluid_output"]
function registerMIMachine(name, args){
    let recipe
    MIMachineEvents.registerRecipeTypes(event => {
        recipe = event.register(name)
        args.itemsIn && (recipe = recipe.withItemInputs())
        args.itemsOut && (recipe = recipe.withItemOutputs())
        args.fluidsIn && (recipe = recipe.withFluidInputs())
        args.fluidsOut && (recipe = recipe.withFluidOutputs())
    })
    MIMachineEvents.registerMachines(event => {
        let shape = event.layeredShape(args.casing , args.shape)
        Object.entries(args.shapeKeys).forEach(([key, block]) => {
            let actualBlock = (typeof block === "string") ? block : block.id
            shape = shape.key(key, event.memberOfBlock(actualBlock), block.hatches ? event.hatchOf(block.hatches) : event.noHatch())
        })
        shape = shape.build()
        const multiTypeFunction = args.steam ? event.simpleSteamCraftingMultiBlock : event.simpleElectricCraftingMultiBlock
        multiTypeFunction.apply(event, [
            idToName(name), name, recipe, shape, event.progressBar(args.pBar?.x || 60, args.pBar?.y || 60, args.pBar?.name || "arrow"),
            itemInputs => {
                if(!args.itemInputSlots) {return itemInputs}
                args.itemInputSlots.forEach(slot => itemInputs.addSlots.apply(itemInputs, slot))
                return itemInputs
            },
            itemOutputs => {
                if(!args.itemOutputSlots) {return itemOutputs}
                args.itemOutputSlots.forEach(slot => itemOutputs.addSlots.apply(itemOutputs, slot))
                return itemOutputs
            },
            fluidInputs => {
                if(!args.fluidInputSlots) {return fluidInputs}
                args.fluidInputSlots.forEach(slot => fluidInputs.addSlots.apply(fluidInputs, slot))
                return fluidInputs
            },
            fluidOutputs => {
                if(!args.fluidOutputSlots) {return fluidOutputs}
                args.fluidOutputSlots.forEach(slot => fluidOutputs.addSlots.apply(fluidOutputs, slot))
                return fluidOutputs
            },
            args.mainCasing || 'treated_wood_casing', args.mainOverlays || 'enigma_overlays', args.frontOverlay || false, args.topOverlay || false, args.sideOverlay || false
        ]) 
    })
}

function registerBatchMIMachine(name, args){
    let recipe
    MIMachineEvents.registerRecipeTypes(event => {
        recipe = event.register(name)
        args.itemsIn && (recipe = recipe.withItemInputs())
        args.itemsOut && (recipe = recipe.withItemOutputs())
        args.fluidsIn && (recipe = recipe.withFluidInputs())
        args.fluidsOut && (recipe = recipe.withFluidOutputs())
    })
    MITweaksMachineEvents.registerBatchMultiblocks(event => {
        let shape = event.layeredShape(args.casing , args.shape)
        Object.entries(args.shapeKeys).forEach(([key, block]) => {
            let actualBlock = (typeof block === "string") ? block : block.id
            shape = shape.key(key, event.memberOfBlock(actualBlock), block.hatches ? event.hatchOf(block.hatches) : event.noHatch())
        })
        shape = shape.build()
        const multiTypeFunction = args.steam ? event.steamStandalone : event.electricStandalone
        multiTypeFunction.apply(event, [
            idToName(name), name, recipe, shape, event.progressBar(args.pBar?.x || 60, args.pBar?.y || 60, args.pBar?.name || "arrow"),
            itemInputs => {
                if(!args.itemInputSlots) {return itemInputs}
                args.itemInputSlots.forEach(slot => itemInputs.addSlots.apply(itemInputs, slot))
                return itemInputs
            },
            itemOutputs => {
                if(!args.itemOutputSlots) {return itemOutputs}
                args.itemOutputSlots.forEach(slot => itemOutputs.addSlots.apply(itemOutputs, slot))
                return itemOutputs
            },
            fluidInputs => {
                if(!args.fluidInputSlots) {return fluidInputs}
                args.fluidInputSlots.forEach(slot => fluidInputs.addSlots.apply(fluidInputs, slot))
                return fluidInputs
            },
            fluidOutputs => {
                if(!args.fluidOutputSlots) {return fluidOutputs}
                args.fluidOutputSlots.forEach(slot => fluidOutputs.addSlots.apply(fluidOutputs, slot))
                return fluidOutputs
            },
            args.mainCasing || 'treated_wood_casing', args.mainOverlays || 'enigma_overlays', args.frontOverlay || false, args.topOverlay || false, args.sideOverlay || false,
            args.batchsize || 8, args.costMulti || 1
        ]) 
    })
    jsonDataForBatchMachine(name, args.mainCasing, args.mainOverlays)
}

function registerBatchMIMachineFromExisting(name, args){
    MITweaksMachineEvents.registerBatchMultiblocks(event => {
        let shape = event.layeredShape(args.casing , args.shape)
        Object.entries(args.shapeKeys).forEach(([key, block]) => {
            let actualBlock = (typeof block === "string") ? block : block.id
            shape = shape.key(key, event.memberOfBlock(actualBlock), block.hatches ? event.hatchOf(block.hatches) : event.noHatch())
        })
        shape = shape.build()
        const multiTypeFunction = args.steam ? event.steam : event.electric
        multiTypeFunction.apply(event, [
            idToName(name), name, event.getRecipeType(args.recipeType), shape,
            (emiWorkstations) => emiWorkstations.add.apply(emiWorkstations, args.emiWorkstations),
            args.mainCasing || 'treated_wood_casing', args.mainOverlays || 'enigma_overlays', args.frontOverlay || false, args.topOverlay || false, args.sideOverlay || false,
            args.batchsize, args.costMulti
        ]) 
    })
    jsonDataForBatchMachine(name, args.mainCasing, args.mainOverlays)
}

registerMIMachine('enigma_machine', {itemsIn: true, itemsOut: true, casing: 'treated_wood_casing',
    shape: [
        ['           ','           ','           ','           ','           ','           '],
        ['    PPP    ','    SSS    ','           ','           ','           ','           '],
        ['  PPPPPPP  ','  MM   MM  ','           ','           ','           ','           '],
        ['  PPPPPPP  ','  M     M  ','           ','           ','           ','           '],
        [' PPPMMMPPP ',' S  HLH  S ','    B B    ','    B B    ','    BBB    ','    SMS    '],
        [' PPPMMMPPP ',' S  LGL  S ','     G     ','     G     ','    BGB    ','    MMM    '],
        [' PPPMMMPPP ',' S  H#H  S ','    B B    ','    B B    ','    BBB    ','    SMS    '],
        ['  PPPPPPP  ','  M     M  ','           ','           ','           ','           '],
        ['  PPPPPPP  ','  MM   MM  ','           ','           ','           ','           '],
        ['    PPP    ','    SSS    ','           ','           ','           ','           '],
        ['           ','           ','           ','           ','           ','           '],
    ],
    shapeKeys: {
        M: "immersiveengineering:sheetmetal_steel",
        P: "immersiveengineering:treated_wood_horizontal",
        H: {id: "immersiveengineering:basic_engineering", hatches: MI_HATCHES_ALL},
        S: "immersiveengineering:slab_sheetmetal_steel",
        L: "immersiveengineering:logic_unit",
        B: "xkdeco:hollow_steel_beam",
        G: "ae2:quartz_vibrant_glass"
    },
    pBar: {x: 58, y: 33, name: 'enigma_arrow'},
    itemInputSlots: [[40, 35, 1, 1], [50, 55, 1, 1], [50, 15, 1, 1]],
    itemOutputSlots: [[80, 35, 1, 1]],
    mainCasing:'treated_wood_casing', mainOverlays: 'enigma_overlays', frontOverlay: true
})

registerMIMachine('radio_transcriber', {itemsIn: true, itemsOut: true, casing: 'treated_wood_casing',
    shape: [
        ['  SSMMMSS  ','           ','           ','           ','           ','           '],
        [' SMMPPPMMS ','           ','           ','           ','           ','           '],
        ['SMPPPPPPPMS','    SsS    ','           ','           ','           ','           '],
        ['SMPPPPPPPMS','   sMHMs   ','    BEB    ','    wsw    ','           ','           '],
        ['MPPPMMMPPPM','  SM   MS  ','   B   B   ','   w   w   ','           ','           '],
        ['MPPPMMMPPPM','  sI   Os  ','   L   L   ','   s   s   ','           ','     T     '],
        ['MPPPMMMPPPM','  SM   MS  ','   B   B   ','   w   w   ','           ','           '],
        ['SMPPPPPPPMS','   s   s   ','           ','     B     ','           ','           '],
        ['SMPPPPPPPMS','           ','           ','    B#B    ','    wtw    ','           '],
        [' SMMPPPMMS ','           ','           ','           ','           ','           '],
        ['  SSMMMSS  ','           ','           ','           ','           ','           '],
    ],
    shapeKeys: {
        M: "immersiveengineering:sheetmetal_steel",
        P: "immersiveengineering:treated_wood_horizontal",
        S: "immersiveengineering:slab_sheetmetal_steel",
        s: "immersiveengineering:slab_storage_steel",
        T: "immersiveengineering:radio_tower",
        B: "xkdeco:hollow_steel_beam",
        L: "immersiveengineering:logic_unit",
        w: "immersiveengineering:steel_wallmount",
        t: "immersiveengineering:tesla_coil",
        H: "immersiveengineering:basic_engineering",
        I: {id: "immersiveengineering:basic_engineering", hatches: ["item_input"]},
        O: {id: "immersiveengineering:basic_engineering", hatches: ["item_output"]},
        E: {id: "immersiveengineering:basic_engineering", hatches: ["energy_input"]}
    },
    pBar: {x: 58, y: 33, name: 'radio_tower_ui'},
    itemInputSlots: [[41, 35, 1, 1], [60, 55, 1, 1]],
    itemOutputSlots: [[80, 35, 1, 1]],
    mainCasing:'treated_wood_casing', mainOverlays: 'enigma_overlays', frontOverlay: true
})

registerMIMachine('multiblock_packer_3000_safety_regulations_edition', {steam:true, itemsIn: true, itemsOut: true, casing: 'sheetmetal_steel_casing',
    shape: [
        ['       ', '  AAA  ', '       ', '       '], 
        ['       ', '  aBa  ', '  bCb  ', '  AAA  '], 
        ['  aca  ', 'Aa   aA', ' b   b ', ' A   A '], 
        ['  ccc  ', 'AB   BA', ' C   C ', ' A   A '], 
        ['  aca  ', 'Aa   aA', ' b   b ', ' A   A '], 
        ['       ', '  aBa  ', '  b#b  ', '  AAA  '], 
        ['       ', '  AAA  ', '       ', '       ']
    ],
    shapeKeys: {
        "A":"immersiveengineering:slab_sheetmetal_steel",
        "a":{id:"immersiveengineering:sheetmetal_steel", hatches: MI_HATCHES_ALL},
        "B":"minecraft:piston",
        "b":"immersiveengineering:steel_scaffolding_standard",
        "C":"immersiveengineering:light_engineering",
        "c":"immersiveengineering:treated_wood_horizontal"
    },
    pBar: {x: 54, y: 69, name: 'square'},
    itemInputSlots: [[20, 35, 2, 1], [20, 53, 1, 1], [74, 35, 2, 1], [92, 53, 1, 1], [20, 107, 2, 1], [20, 89, 1, 1], [74, 107, 2, 1], [92, 89, 1, 1]],
    itemOutputSlots: [[56, 71, 1, 1]],
    mainCasing:'treated_wood_casing', mainOverlays: 'enigma_overlays', frontOverlay: true
})

registerBatchMIMachineFromExisting('advanced_large_steam_furnace', {steam:true, casing: 'modern_industrialization:fire_clay_bricks', recipeType:"modern_industrialization:mi_furnace",
    emiWorkstations:["modern_industrialization:bronze_mi_furnace"],
    shape: [['AAA', 'aaa', 'aaa'], 
            ['BAB', 'B B', 'BaB'], 
            ['AAA', 'a#a', 'aaa']],
    shapeKeys: {"A":{id:"modern_industrialization:fire_clay_bricks", hatches: MI_HATCHES_ALL},
                "a":"modern_industrialization:bronze_plated_bricks",
                "B":"modern_industrialization:bronze_machine_casing_pipe"
    },
    mainCasing:'bronze_plated_bricks', mainOverlays: 'mi_furnace', frontOverlay: true,
    batchsize:8, costMulti:0.75
})

registerBatchMIMachineFromExisting('large_electric_furnace', {steam:true, casing: 'modern_industrialization:heatproof_machine_casing', recipeType:"modern_industrialization:mi_furnace",
    emiWorkstations:["modern_industrialization:bronze_mi_furnace"],
    shape: [['AAA', 'aaa', 'aaa', 'AAA'], 
            ['BAB', 'B B', 'B B', 'BAB'], 
            ['A#A', 'aaa', 'aaa', 'AAA']],
    shapeKeys: {"A":{id:"modern_industrialization:heatproof_machine_casing", hatches: MI_HATCHES_ALL},
                "a":"modern_industrialization:cupronickel_coil",
                "B":"modern_industrialization:invar_machine_casing_pipe"},
    mainCasing:'heatproof_machine_casing', mainOverlays: 'mi_furnace', frontOverlay: true,
    batchsize:8, costMulti:0.75
})

registerBatchMIMachineFromExisting('advanced_steam_blast_furnace', {steam:true, casing: 'steel_plated_bricks', recipeType:"modern_industrialization:blast_furnace",
    emiWorkstations:["modern_industrialization:steam_blast_furnace"],
    shape: [['AaaaA', 'AaaaA', ' BBB '], 
            ['a   a', 'a   a', 'B   B'], 
            ['a   a', 'a F a', 'B   B'], 
            ['a   a', 'a   a', 'B   B'], 
            ['AaaaA', 'Aa#aA', ' BBB ']],
    shapeKeys: {"A":"immersiveengineering:blastbrick",
                "a":{id:"extended_industrialization:steel_plated_bricks", hatches: MI_HATCHES_ALL},
                "B":"immersiveengineering:slab_blastbrick",
                "F":"immersiveengineering:blast_furnace"},
    mainCasing:'steel_plated_bricks', mainOverlays: 'blast_furnace', frontOverlay: true,
    batchsize:8, costMulti:0.75
})

registerBatchMIMachine('advanced_steam_alloy_smelter', {steam:true, itemsIn: true, itemsOut: true,fluidsIn: true, fluidsOut: true, casing: 'steel_plated_bricks',
    shape: [['AAAAA', '  A  ', '  A  ', 'aaAaa'], 
            ['ABBBA', ' K K ', '     ', 'aaAaa'], 
            ['ABBBA', 'A   A', 'A   A', 'AAAAA'], 
            ['ABBBA', ' K K ', '     ', 'aaAaa'], 
            ['AAAAA', '  #  ', '  A  ', 'aaAaa']],
    shapeKeys: {"A":{id:"extended_industrialization:steel_plated_bricks", hatches: MI_HATCHES_ALL},
                "a":"immersiveengineering:slab_alloybrick",
                "B":"modern_industrialization:fire_clay_bricks",
                "K":"immersiveengineering:alloy_smelter"},
    pBar: {x: 88, y: 33, name: 'arrow'},
    itemInputSlots: [[40, 35, 2, 1]],
    itemOutputSlots: [[120, 35,1,1]],
    mainCasing:'steel_plated_bricks', mainOverlays: 'coke_oven', frontOverlay: true,
    batchsize:8, costMulti:0.75
})

function saveJsonToPath(path, json){
    JsonIO.write(path, JSON.stringify(json, null, 2))
}

function jsonDataForBatchMachine(machineName, mainCasing, mainOverlays){
    global.langCustomStuff[`block.mi_tweaks.${machineName}`] = Object.assign({ "en_us": idToName(machineName)})
    global.langCustomStuff[`rei_categories.modern_industrialization.${machineName}`] = Object.assign({ "en_us": idToName(machineName)})
    global.langCustomStuff[`rei_categories.mi_tweaks.${machineName}`] = Object.assign({ "en_us": idToName(machineName)})
    global.miTweaksTags.push(`mi_tweaks:${machineName}`)
    return;
    let blockstatesPath = `kubejs/assets/mi_tweaks/blockstates/${machineName}.json`;
    let blockstatesJson = {
        "variants": {
            "": {
                "model": `mi_tweaks:block/${machineName}`
            }
        }
    }
    saveJsonToPath(blockstatesPath, blockstatesJson)

    let modelPath = `kubejs/assets/mi_tweaks/models/block/${machineName}.json`;
    let modelJson = {
        "casing": `modern_industrialization:${mainCasing}`,
        "default_overlays": {
            "fluid_auto": "modern_industrialization:block/overlays/fluid_auto",
            "front": `modern_industrialization:block/machines/${mainOverlays}/overlay_front`,
            "front_active": `modern_industrialization:block/machines/${mainOverlays}/overlay_front_active`,
            "item_auto": "modern_industrialization:block/overlays/item_auto",
            "output": "modern_industrialization:block/overlays/output"
        },
        "loader": "modern_industrialization:machine"
    }
    saveJsonToPath(modelPath, modelJson)

    let itemPath = `kubejs/assets/mi_tweaks/models/item/${machineName}.json`;
    let itemJson = {
        "parent": `mi_tweaks:block/${machineName}`
    }
    saveJsonToPath(itemPath, itemJson)

    let dataPath = `kubejs/data/mi_tweaks/loot_table/blocks/${machineName}.json`;
    let dataJson = {
        "type": "minecraft:block",
        "pools": [
            {
                "bonus_rolls": 0.0,
                "conditions": [
                    {
                        "condition": "minecraft:survives_explosion"
                    }
                ],
                "entries": [
                    {
                        "type": "minecraft:item",
                        "name": `mi_tweaks:${machineName}`
                    }
                ],
                "rolls": 1.0
            }
        ],
        "random_sequence": `mi_tweaks:blocks/${machineName}`
    }
    saveJsonToPath(dataPath, dataJson)
}
