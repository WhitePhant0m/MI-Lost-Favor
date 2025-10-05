ServerEvents.recipes(event => {

    miMachineCraft(event, {energy:8, time:200, machine:"modern_industrialization:assembler",
        inputItems:[
            [{item:"modern_industrialization:tin_cable"}, 4],
            [{item:"modern_industrialization:portable_storage_unit"}],
            [{item:"modern_industrialization:frostproof_machine_casing"}],
            [{item:"kubejs:tempered_glass"}],
        ],
        outputItems:[
            [{item:"modern_industrialization:basic_machine_hull"}]
        ],
        removeRecipe:true
    })

    miMachineCraft(event, {energy:8, time:200, machine:"modern_industrialization:assembler",
        inputItems:[
            [{item:"modern_industrialization:tin_cable"}, 4],
            [{item:"modern_industrialization:cupronickel_wire_magnetic"}, 8],
            [{item:"modern_industrialization:portable_storage_unit"}],
            [{item:"modern_industrialization:heatproof_machine_casing"}],
            [{item:"kubejs:tempered_glass"}],
        ],
        outputItems:[
            [{item:"modern_industrialization:electric_blast_furnace"}]
        ],
        removeRecipe:true
    })

    miMachineCraft(event, {energy:8, time:200, machine:"modern_industrialization:assembler",
        inputItems:[
            [{tag:"c:cobblestones"}, 8],
        ],
        outputItems:[
            [{item:"minecraft:furnace"}]
        ],
        removeRecipe:true
    })

})