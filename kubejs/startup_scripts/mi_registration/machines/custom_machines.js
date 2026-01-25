/* let MI_FURNACE;

MIMachineEvents.registerRecipeTypes(event => {
    MI_FURNACE = event.register('mi_furnace')
    .withItemInputs()
    .withItemOutputs()
})

MIMachineEvents.registerMachines(event => {
    
    event.craftingSingleBlock(
        'Furnace', 'mi_furnace', MI_FURNACE, ["bronze", "steel", "electric"],
        186, event.progressBar(77, 33, "arrow"), event.efficiencyBar(38, 62), event.energyBar(18, 30),
        // SLOT CONFIGURATION
        // Number of slots: item inputs, item outputs, fluid inputs, fluid outputs
        1, 1, 0, 0,
        // Capacity for fluid slots (unused here)
        16,
        // Slot positions: items and fluids.
        // Explanation: 3x3 grid of item slots starting at position (42, 27), then 1x3 grid of item slots starting at position (139, 27).
        items => items.addSlots(56, 35, 1, 1).addSlots(102, 35, 1, 1), fluids => {},
        // MODEL CONFIGURATION
        // front overlay?, top overlay?, side overlay?
        true, false, false,
    );
}) */

const machineTiersAll = ["bronze", "steel", "electric"]

function registerSingleMIMachine(name, args){
    let recipe
    MIMachineEvents.registerRecipeTypes(event => {
        recipe = event.register(name)
        args.itemsIn && (recipe = recipe.withItemInputs())
        args.itemsOut && (recipe = recipe.withItemOutputs())
        args.fluidsIn && (recipe = recipe.withFluidInputs())
        args.fluidsOut && (recipe = recipe.withFluidOutputs())
    })
    MIMachineEvents.registerMachines(event => {
        event.craftingSingleBlock(
            args.name || idToName(name), name, recipe, args.tiers || ["electric"], args.guiheight || -1, 
            event.progressBar(args.pBar?.x || 60, args.pBar?.y || 60, args.pBar?.name || "arrow"),
            event.efficiencyBar(args.efBar?.x || 48, args.efBar?.y || 86), event.energyBar(args.enBar?.x || 14, args.enBar?.y || 44),
            args.slots?.iIn || 0, args.slots?.iOut || 0, args.slots?.fIn || 0, args.slots?.fOut || 0, args.slots?.capacity || 16,
            items => {
                if(!args.itemSlots) {return items}
                args.itemSlots.forEach(slot => items.addSlots.apply(items, slot))
                return items
            },
            fluids => {
                if(!args.fluidSlots) {return fluids}
                args.fluidSlots.forEach(slot => fluids.addSlots.apply(fluids, slot))
                return fluids
            },
            args.frontOverlay || false, args.topOverlay || false, args.sideOverlay || false
        ) 
    })
}

registerSingleMIMachine('mi_furnace', {name:"Furnace", itemsIn: true, itemsOut: true, tiers:machineTiersAll,
    pBar: {x: 77, y: 33, name: 'arrow'}, efBar: {x: 38, y: 62}, enBar: {x: 18, y: 30},
    slots:{iIn:1, iOut:1},
    itemSlots: [[56, 35, 1, 1], [102, 35, 1, 1]],
    frontOverlay: true
})

registerSingleMIMachine('microbial_fabricator', {name:"Microbial Fabricator", itemsIn: true, itemsOut: true,
    pBar: {x: 58, y: 33, name: 'enigma_arrow'}, efBar: {x: 62, y: 75000}, enBar: {x: 18, y: 35},
    slots:{iIn:3, iOut:1},
    itemSlots: [[50, 15, 1, 1], [40, 35, 1, 1], [50, 55, 1, 1], [80, 35, 1, 1]],
    frontOverlay: true, sideOverlay:true
})