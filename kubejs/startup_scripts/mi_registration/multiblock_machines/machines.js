MIMachineEvents.registerCasings(event => {
    event.registerBlockImitation("treated_wood_casing", "immersiveengineering:basic_engineering");
    event.registerBlockImitation("sheetmetal_steel_casing", "immersiveengineering:sheetmetal_steel");

})
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
        H: {id: "immersiveengineering:basic_engineering", hatches: ["energy_input", "item_input", "item_output", "fluid_input"]},
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
        "a":{id:"immersiveengineering:sheetmetal_steel", hatches: ["energy_input", "item_input", "item_output", "fluid_input"]},
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
