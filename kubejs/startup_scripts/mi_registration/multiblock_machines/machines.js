let ENIGMA_MACHINE;
let RADIO_TRANSCRIBER;

MIMachineEvents.registerRecipeTypes(event => {
    ENIGMA_MACHINE = event.register('enigma_machine')
        .withItemInputs()
        .withItemOutputs()

})

MIMachineEvents.registerRecipeTypes(event => {
    RADIO_TRANSCRIBER = event.register('radio_transcriber')
        .withItemInputs()
        .withItemOutputs()

})

MIMachineEvents.registerCasings(event => {
    event.registerBlockImitation("treated_wood_casing", "immersiveengineering:basic_engineering");
})


MIMachineEvents.registerMachines(event => {
    
    const enigmaMachineShape = event.layeredShape('treated_wood_casing', [
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
        ])
            .key('M', event.memberOfBlock('immersiveengineering:sheetmetal_steel'),event.noHatch())
            .key('P', event.memberOfBlock('immersiveengineering:treated_wood_horizontal'),event.noHatch())
            .key('H', event.memberOfBlock('immersiveengineering:basic_engineering'),event.hatchOf('energy_input', 'item_input', 'item_output','fluid_input'))
            .key('S', event.memberOfBlock('immersiveengineering:slab_sheetmetal_steel'),event.noHatch())
            .key('L', event.memberOfBlock('immersiveengineering:logic_unit'),event.noHatch())
            .key('B', event.memberOfBlock('xkdeco:hollow_steel_beam'),event.noHatch())
            .key('G', event.memberOfBlock('ae2:quartz_vibrant_glass'),event.noHatch())
            .build()

        event.simpleElectricCraftingMultiBlock(
            'Enigma machine', 'enigma_machine', ENIGMA_MACHINE, enigmaMachineShape,
            event.progressBar(58, 33, 'enigma_arrow'),
            itemInputs => itemInputs.addSlots(40, 35, 1, 1).addSlots(50, 55, 1, 1).addSlots(50, 15, 1, 1), itemOutputs => itemOutputs.addSlots(80, 35 ,1,1),
            fluidInputs => {}, fluidOutputs => {},
            'treated_wood_casing', 'enigma_overlays', true, false, false
        )

    const radioTranscriberShape = event.layeredShape('treated_wood_casing', [
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
        ])
            .key('M', event.memberOfBlock('immersiveengineering:sheetmetal_steel'),event.noHatch())
            .key('P', event.memberOfBlock('immersiveengineering:treated_wood_horizontal'),event.noHatch())
            .key('S', event.memberOfBlock('immersiveengineering:slab_sheetmetal_steel'),event.noHatch())
            .key('s', event.memberOfBlock('immersiveengineering:slab_storage_steel'),event.noHatch())
            .key('T', event.memberOfBlock('immersiveengineering:radio_tower'),event.noHatch())
            .key('B', event.memberOfBlock('xkdeco:hollow_steel_beam'),event.noHatch())
            .key('L', event.memberOfBlock('immersiveengineering:logic_unit'),event.noHatch())
            .key('w', event.memberOfBlock('immersiveengineering:steel_wallmount'),event.noHatch())
            .key('t', event.memberOfBlock('immersiveengineering:tesla_coil'),event.noHatch())
            .key('H', event.memberOfBlock('immersiveengineering:basic_engineering'),event.noHatch())
            .key('I', event.memberOfBlock('immersiveengineering:basic_engineering'),event.hatchOf('item_input'))
            .key('O', event.memberOfBlock('immersiveengineering:basic_engineering'),event.hatchOf('item_output'))
            .key('E', event.memberOfBlock('immersiveengineering:basic_engineering'),event.hatchOf('energy_input'))

            .build()

        event.simpleElectricCraftingMultiBlock(
            'Radio transcriber', 'radio_transcriber', RADIO_TRANSCRIBER, radioTranscriberShape,
            event.progressBar(58, 33, 'radio_tower_ui'),
            itemInputs => itemInputs.addSlots(41, 35, 1, 1).addSlots(60, 55, 1, 1), itemOutputs => itemOutputs.addSlots(80, 35 ,1,1),
            fluidInputs => {}, fluidOutputs => {},
            'treated_wood_casing', 'enigma_overlays', true, false, false
        )
})