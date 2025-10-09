ServerEvents.recipes(event => {

    //ae stuff
    /*
    var tier1token = "kubejs:mysterious_disk"
    var tier2token = "kubejs:storage_disk"
    var tier3token = "kubejs:automation_disk"
    var tier4token = "kubejs:quantum_disk"
    */

    var tier1token = "#mi_lost_favor:tier_1_recipes"
    var tier2token = "#mi_lost_favor:tier_2_recipes"
    var tier3token = "#mi_lost_favor:tier_3_recipes"
    var tier4token = "#mi_lost_favor:tier_4_recipes"

    function ae_press_recipes (pressForm, input, output, token) {
        event.recipes.modern_industrialization.packer(8, 40)
        .itemIn(input)
        .itemIn(pressForm,0)
        .itemIn(token,0)
        .itemOut(output)
    }
    //tier 2
    ae_press_recipes ("ae2:silicon_press", "#c:ingots/silicon", "ae2:printed_silicon", tier3token)
    ae_press_recipes ("ae2:logic_processor_press", "#c:ingots/gold", "ae2:printed_logic_processor", tier3token)
    ae_press_recipes ("kubejs:cell_press", "#c:plates/iron", "kubejs:cell_half", tier3token)

    //tier 3
    ae_press_recipes ("ae2:calculation_processor_press", "#c:gems/certus_quartz", "ae2:printed_calculation_processor", tier3token)
    ae_press_recipes ("ae2:engineering_processor_press", "#c:ingots/aluminum", "ae2:printed_engineering_processor", tier3token)
    ae_press_recipes ("kubejs:core_press", "#c:plates/iron", "kubejs:core_hull", tier3token)

    //tier 4
    ae_press_recipes ("advanced_ae:quantum_processor_press", "advanced_ae:quantum_alloy", "advanced_ae:printed_quantum_processor", tier4token)
    ae_press_recipes ("megacells:accumulation_processor_press", "megacells:sky_steel_ingot", "megacells:printed_accumulation_processor", tier4token)

    //tier 5
    //ae_press_recipes ("extendedae:concurrent_processor_press", "extendedae:entro_crystal", "extendedae:concurrent_processor_print", tier4token)


    miMachineCraft(event, {energy:4, time:300, machine:"modern_industrialization:packer",
        outputItems:[
            [{item:"sophisticatedstorage:compacting_upgrade"}]
        ],
        inputItems:[
            [{tag:"sophisticatedstorage:all_storage"}],
            [{item:"minecraft:piston"}, 4],
            [{item:"sophisticatedstorage:upgrade_base"}],
        ],
        removeRecipe:true
    })

    miMachineCraft(event, {energy:8, time:300, machine:"modern_industrialization:packer",
        outputItems:[
            [{item:"sophisticatedstorage:advanced_compacting_upgrade"}]
        ],
        inputItems:[
            [{tag:"sophisticatedstorage:all_storage"}],
            [{item:"modern_industrialization:piston"}, 4],
            [{item:"sophisticatedstorage:compacting_upgrade"}],
        ],
        removeRecipe:true
    })
})