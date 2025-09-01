ServerEvents.recipes(event => {
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

    var tier1DefaultEnergy = 4
    var tier2DefaultEnergy = 8
    var tier3DefaultEnergy = 12
    var tier4DefaultEnergy = 16
    var tier5DefaultEnergy = 20

    var tier1DefaultTime = 100
    var tier2DefaultTime = 200
    var tier3DefaultTime = 400
    var tier4DefaultTime = 800
    var tier5DefaultTime = 1600

    let craft_removal_list = [
        "extendedae:quartz_blend"
    ]

    //main function, called in every helper function
    function assembler_recipe(energy,time,inputs,outputs,fluids,token){
        fluids = fluids || [];
        energy = energy + inputs.length * (energy / 4)
        var recipe = event.recipes.modern_industrialization.assembler(energy, time);
        inputs.forEach((input) => {
            if (Array.isArray(input)) {
                recipe.itemIn(input[0], input[1]);
            } else {
                recipe.itemIn(input);
            }
        })
        fluids.forEach((fluid) => {recipe.fluidIn(fluid[0], fluid[1])})
        outputs.forEach((out) => {
            recipe.itemOut(out)
            craft_removal_list.push(out.split(" ").length == 2 ? out.split(" ")[1] : out)
        })
        if (token != undefined){recipe.itemIn(token, 0)}
    }

    //#region helper functions
    function ae_item_cell (cellComponent, output, token) {
        var inputs = [
            "2x ae2:quartz_glass",
            "2x kubejs:cell_half",
            "2x #c:plates/aluminum",
            cellComponent
        ];
        var fluids = [
            ["modern_industrialization:molten_redstone", 250],
            ["modern_industrialization:soldering_alloy", 100]
        ];
        assembler_recipe(16, 200, inputs, [output], fluids, token);
    }

    function ae_fluid_cell (cellComponent, output, token) {
        var inputs = [
            "2x ae2:quartz_glass",
            "2x kubejs:cell_half",
            "2x #c:plates/copper",
            cellComponent
        ];
        var fluids = [
            ["modern_industrialization:molten_redstone", 250],
            ["modern_industrialization:soldering_alloy", 100]
        ];
        assembler_recipe(16, 200, inputs, [output], fluids, token);
    }

    function ae_cell_component (cellComponent, upgradeMaterial, processor, output, token) {
        var inputs = [
            "4x " + cellComponent,
            processor,
            "4x " + upgradeMaterial
        ];
        assembler_recipe(16, 200, inputs, [output], [], token);
    }

    function ae_processor (printedCircuit, output, token) {
        var inputs = [
            "ae2:printed_silicon",
            printedCircuit
        ];
        var fluids = [
            ["modern_industrialization:molten_redstone", 250]
        ];
        assembler_recipe(16, 200, inputs, [output], fluids, token);
    }

    function ae_core (coreMaterial, output, token) {
        var inputs = [
            "kubejs:core_hull",
            "4x ae2:quartz_glass",
            coreMaterial
        ];
        var fluids = [
            ["modern_industrialization:polyethylene", 250]
        ];
        assembler_recipe(16, 200, inputs, [output], fluids, token);
    }

    function ae_card (base, upgradeMaterial, output, token) {
        var inputs = [
            base,
            "4x " + upgradeMaterial
        ];
        var fluids = [
            ["modern_industrialization:molten_redstone", 250]
        ];
        assembler_recipe(16, 200, inputs, [output], fluids, token);
    }

    function cell_upgrade (baseCell, nextCellComponent, upgradeMaterial, output, token) {
        var inputs = [
            baseCell,
            nextCellComponent,
            "2x " + upgradeMaterial
        ];
        assembler_recipe(16, 200, inputs, [output], [], token);
    }

    function ae_crafting_storage (cellComponent, wireMaterial, output, token) {
        var inputs = [
            cellComponent,
            "ae2:calculation_processor",
            "ae2:crafting_unit",
            "8x #c:dusts/aluminum",
            "4x " + "#c:wires/" + wireMaterial
        ];
        assembler_recipe(16, 200, inputs, [output], [], token);
    }

    function ae_crafting_storage_upgrade (cellComponent, craftingStorage, wireMaterial, output, token) {
        var inputs = [
            cellComponent,
            craftingStorage,
            "2x " + "#c:wires/" + wireMaterial
        ];
        assembler_recipe(16, 200, inputs, [output], [], token);
    }
    function ae_assembler_knife_reversable_recipe(item1, item2){
        assembler_recipe(8,60,[item1, ["ae2:certus_quartz_cutting_knife", 0]],[item2])
        assembler_recipe(8,60,[item2, ["ae2:certus_quartz_cutting_knife", 0]],[item1])
    }
    //#endregion

    // #region cell components
    
    ae_cell_component("#c:plates/aluminum", "#c:dusts/certus_quartz", "ae2:logic_processor", "ae2:cell_component_1k", tier1token)
    ae_cell_component("ae2:cell_component_1k", "#c:dusts/fluix", "ae2:calculation_processor", "ae2:cell_component_4k", tier2token)
    ae_cell_component("ae2:cell_component_4k", "#c:dusts/aluminum", "ae2:calculation_processor", "ae2:cell_component_16k", tier2token)
    ae_cell_component("ae2:cell_component_16k", "#c:dusts/corrupti", "ae2:engineering_processor", "ae2:cell_component_64k", tier2token)
    ae_cell_component("ae2:cell_component_64k", "#c:dusts/ruby", "ae2:engineering_processor", "ae2:cell_component_256k", tier2token)
    // #endregion

    // #region cells
    ae_item_cell("ae2:cell_component_1k", "ae2:item_storage_cell_1k", tier2token)
    ae_item_cell("ae2:cell_component_4k", "ae2:item_storage_cell_4k", tier3token)
    ae_item_cell("ae2:cell_component_16k", "ae2:item_storage_cell_16k", tier3token)
    ae_item_cell("ae2:cell_component_64k", "ae2:item_storage_cell_64k", tier3token)
    ae_item_cell("ae2:cell_component_256k", "ae2:item_storage_cell_256k", tier3token)

    ae_fluid_cell("ae2:cell_component_1k", "ae2:fluid_storage_cell_1k", tier2token)
    ae_fluid_cell("ae2:cell_component_4k", "ae2:fluid_storage_cell_4k", tier3token)
    ae_fluid_cell("ae2:cell_component_16k", "ae2:fluid_storage_cell_16k", tier3token)
    ae_fluid_cell("ae2:cell_component_64k", "ae2:fluid_storage_cell_64k", tier3token)
    ae_fluid_cell("ae2:cell_component_256k", "ae2:fluid_storage_cell_256k", tier3token)

    cell_upgrade("ae2:item_storage_cell_1k", "ae2:cell_component_4k", "#c:dusts/fluix", "ae2:item_storage_cell_4k", tier3token)
    cell_upgrade("ae2:item_storage_cell_4k", "ae2:cell_component_16k", "#c:dusts/aluminum", "ae2:item_storage_cell_16k", tier3token)
    cell_upgrade("ae2:item_storage_cell_16k", "ae2:cell_component_64k", "#c:dusts/corrupti", "ae2:item_storage_cell_64k", tier3token)
    cell_upgrade("ae2:item_storage_cell_64k", "ae2:cell_component_256k", "#c:dusts/ruby", "ae2:item_storage_cell_256k", tier3token)

    cell_upgrade("ae2:fluid_storage_cell_1k", "ae2:cell_component_4k", "#c:dusts/fluix", "ae2:fluid_storage_cell_4k", tier3token)
    cell_upgrade("ae2:fluid_storage_cell_4k", "ae2:cell_component_16k", "#c:dusts/aluminum", "ae2:fluid_storage_cell_16k", tier3token)
    cell_upgrade("ae2:fluid_storage_cell_16k", "ae2:cell_component_64k", "#c:dusts/corrupti", "ae2:fluid_storage_cell_64k", tier3token)
    cell_upgrade("ae2:fluid_storage_cell_64k", "ae2:cell_component_256k", "#c:dusts/ruby", "ae2:fluid_storage_cell_256k", tier3token)
    // #endregion

    // #region crafting storage
    ae_crafting_storage("ae2:cell_component_1k", "electrum", "ae2:1k_crafting_storage", tier2token)
    ae_crafting_storage("ae2:cell_component_4k", "electrum", "ae2:4k_crafting_storage", tier2token)
    ae_crafting_storage("ae2:cell_component_16k", "electrum", "ae2:16k_crafting_storage", tier2token)
    ae_crafting_storage("ae2:cell_component_64k", "aluminum", "ae2:64k_crafting_storage", tier2token)
    ae_crafting_storage("ae2:cell_component_256k", "aluminum", "ae2:256k_crafting_storage", tier2token)

    ae_crafting_storage_upgrade("ae2:cell_component_4k", "ae2:1k_crafting_storage", "electrum", "ae2:4k_crafting_storage", tier2token)
    ae_crafting_storage_upgrade("ae2:cell_component_16k", "ae2:4k_crafting_storage", "electrum", "ae2:16k_crafting_storage", tier2token)
    ae_crafting_storage_upgrade("ae2:cell_component_64k", "ae2:16k_crafting_storage", "electrum", "ae2:64k_crafting_storage", tier2token)
    ae_crafting_storage_upgrade("ae2:cell_component_256k", "ae2:64k_crafting_storage", "electrum", "ae2:256k_crafting_storage", tier2token)
    // #endregion

    // #region tier 2 recipes
    ae_processor("ae2:printed_logic_processor", "ae2:logic_processor", tier3token)

    ae_card("ae2:basic_card", "#c:dusts/redstone", "ae2:redstone_card", tier1token)
    ae_card("ae2:basic_card", "minecraft:chest", 'ae2:capacity_card', tier1token)
    ae_card("ae2:basic_card", "minecraft:magma_block", 'ae2:void_card', tier1token)
    ae_card("ae2:basic_card", "minecraft:crafting_table", 'ae2:crafting_card', tier1token)

    assembler_recipe(
        tier2DefaultEnergy, tier2DefaultTime,
        [
            "4x modern_industrialization:aluminum_large_plate",
            "16x modern_industrialization:certus_quartz_rod",
            "4x kubejs:cell_half",
            "4x ae2:logic_processor"
        ],
        ["ae2:cell_workbench"],
        [],
        tier1token
    );

    assembler_recipe(
        tier2DefaultEnergy, tier2DefaultTime,
        [
            "ae2:import_bus",
            "ae2:export_bus",
            "ae2:logic_processor"
        ],
        ["advanced_ae:import_export_bus_part"],
        [],
        tier1token
    );

    assembler_recipe(
        tier2DefaultEnergy, tier2DefaultTime,
        [
            "6x #c:rods/aluminum",
            "8x #c:wires/electrum",
            "4x #c:plates/iron",
            "2x ae2:fluix_crystal",
            "ae2:logic_processor"
        ],
        ["extendedae:me_packing_tape"],
        [],
        tier1token
    );

    assembler_recipe(
        tier2DefaultEnergy, tier2DefaultTime,
        [
            "ae2:fluid_storage_cell_1k",
            "ae2:item_storage_cell_1k",
            "2x ae2:logic_processor",
            "4x #c:plates/aluminum",
            "ae2:quartz_glass"
        ],
        ["extendedae:ingredient_buffer"],
        [],
        tier1token
    );

    assembler_recipe(
        tier2DefaultEnergy, tier2DefaultTime,
        [
            "6x modern_industrialization:aluminum_large_plate",
            "24x modern_industrialization:certus_quartz_rod",
            "10x kubejs:cell_half",
            "20x modern_industrialization:rubber_sheet",
            "2x ae2:fluix_glass_cable",
            "4x ae2:logic_processor"
        ],
        ["ae2:drive"],
        [],
        tier1token
    );

    assembler_recipe(
        tier2DefaultEnergy, tier2DefaultTime,
        [
            "2x #c:plates/aluminum",
            "4x ae2:fluix_glass_cable",
            "modern_industrialization:steel_item_input_hatch",
            "ae2:logic_processor"
        ],
        ["ae2:import_bus"],
        [],
        tier1token
    );

    assembler_recipe(
        tier2DefaultEnergy, tier2DefaultTime,
        [
            "2x #c:plates/aluminum",
            "4x ae2:fluix_glass_cable",
            "modern_industrialization:steel_item_output_hatch",
            "ae2:logic_processor"
        ],
        ["ae2:export_bus"],
        [],
        tier1token
    );

    assembler_recipe(
        tier2DefaultEnergy, tier2DefaultTime,
        [
            "modern_industrialization:mv_energy_input_hatch",
            "4x ae2:fluix_glass_cable",
            "8x modern_industrialization:electrum_wire",
            "2x ae2:logic_processor"
        ],
        ["ae2:energy_acceptor"],
        [],
        tier1token
    );

    assembler_recipe(
        tier2DefaultEnergy, tier2DefaultTime,
        [
            "2x kubejs:cell_half",
            "4x modern_industrialization:electrum_wire",
            "2x #c:plates/gold",
            "ae2:logic_processor"
        ],
        ["ae2:basic_card"],
        [],
        tier1token
    );

    assembler_recipe(
        tier2DefaultEnergy, tier2DefaultTime,
        [
            "moderndynamics:item_pipe",
            "2x ae2:fluix_crystal"
        ],
        ["2x ae2:fluix_glass_cable"],
        [],
        tier1token
    );

    assembler_recipe(
        tier2DefaultEnergy, tier2DefaultTime,
        [
            "4x ae2:fluix_crystal",
            "8x #c:wires/electrum",
            "ae2:quartz_glass",
            "ae2:logic_processor",
            "8x modern_industrialization:redstone_battery"
        ],
        ["ae2:energy_cell"],
        [],
        tier1token
    );
    // #endregion

    // #region tier 3 recipes
    ae_processor("ae2:printed_engineering_processor", "ae2:engineering_processor", tier3token)
    ae_processor("ae2:printed_calculation_processor", "ae2:calculation_processor", tier3token)

    ae_core ("ae2:calculation_processor", "ae2:annihilation_core", tier3token)
    ae_core ("ae2:engineering_processor", "ae2:formation_core", tier3token)

    ae_card("ae2:advanced_card", "#minecraft:wool", "ae2:fuzzy_card", tier2token)
    ae_card("ae2:advanced_card", "#c:dusts/glowstone", 'ae2:speed_card', tier2token)
    ae_card("ae2:advanced_card", "minecraft:redstone_torch", "ae2:inverter_card", tier2token)
    ae_card("ae2:advanced_card", "ae2:fluix_crystal", 'ae2:equal_distribution_card', tier2token)
    ae_card("ae2:advanced_card", "ae2:charged_certus_quartz_crystal", 'ae2:energy_card', tier2token)

    ae_assembler_knife_reversable_recipe("ae2:cable_pattern_provider", "ae2:pattern_provider")
    ae_assembler_knife_reversable_recipe("ae2:toggle_bus", "ae2:inverted_toggle_bus")

    assembler_recipe(tier3DefaultEnergy, tier3DefaultTime, ["ae2:level_emitter", "modern_industrialization:silicon_battery"], ["ae2:energy_level_emitter"], [], tier2token)
    assembler_recipe(tier3DefaultEnergy, tier3DefaultTime, ["ae2:energy_level_emitter", "2x ae2:logic_processor"], ["extendedae:threshold_level_emitter"], [], tier2token)
    assembler_recipe(tier3DefaultEnergy, tier3DefaultTime, ["#ae2:illuminated_panel", "ae2:level_emitter"], ["ae2:storage_monitor"], [], tier2token)
    assembler_recipe(tier3DefaultEnergy, tier3DefaultTime, ["ae2:storage_monitor", "2x ae2:logic_processor"], ["advanced_ae:throughput_monitor"], [], tier2token)

    assembler_recipe(tier3DefaultEnergy, tier3DefaultTime, ["ae2:storage_bus", "2x ae2:logic_processor"], ["extendedae:tag_storage_bus"], [], tier2token)
    assembler_recipe(tier3DefaultEnergy, tier3DefaultTime, ["ae2:storage_bus", "2x ae2:engineering_processor"], ["extendedae:mod_storage_bus"], [], tier2token)
    assembler_recipe(tier3DefaultEnergy, tier3DefaultTime, ["ae2:storage_bus", "2x ae2:calculation_processor"], ["extendedae:precise_storage_bus"], [], tier2token)

    assembler_recipe(tier3DefaultEnergy, tier3DefaultTime, ["4x ae2:cable_anchor", "ae2:charged_certus_quartz_crystal"], ["ae2:quartz_fixture"], [], tier2token)
    assembler_recipe(tier3DefaultEnergy, tier3DefaultTime, ["ae2:quartz_fixture", "ae2:calculation_processor"], ["ae2:light_detector"], [], tier2token)
    assembler_recipe(tier3DefaultEnergy, tier3DefaultTime, ["ae2:quartz_fiber", "ae2:calculation_processor"], ["ae2:toggle_bus"], [], tier2token)

    assembler_recipe(tier3DefaultEnergy, tier3DefaultTime, ["ae2:semi_dark_monitor", "pastel:shimmerstone_gem"], ["ae2:monitor"], [], tier2token)
    assembler_recipe(tier3DefaultEnergy, tier3DefaultTime, ["ae2:semi_dark_monitor", "#c:dusts/coal"], ["ae2:dark_monitor"], [], tier2token)

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "2x kubejs:cell_half",
            "4x modern_industrialization:aluminum_wire",
            "2x #c:plates/diamond",
            "ae2:calculation_processor",
            "ae2:engineering_processor"
        ],
        ["ae2:advanced_card"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "3x ae2:quartz_vibrant_glass",
            "4x modern_industrialization:aluminum_wire",
            "modern_industrialization:aluminum_large_plate",
            "ae2:engineering_processor"
        ],
        ["ae2:semi_dark_monitor"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "3x ae2:fluix_crystal",
            "#ae2:illuminated_panel",
            "ae2:formation_core"
        ],
        ["ae2:formation_plane"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "3x ae2:fluix_crystal",
            "#ae2:illuminated_panel",
            "ae2:annihilation_core"
        ],
        ["ae2:annihilation_plane"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "2x #c:plates/aluminum",
            "6x ae2:fluix_glass_cable",
            "18x modern_industrialization:rubber_sheet",
            "ae2:calculation_processor"
        ],
        ["4x ae2:fluix_smart_dense_cable"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "4x ae2:fluix_crystal",
            "8x #c:wires/aluminum",
            "ae2:quartz_glass",
            "ae2:calculation_processor",
            "8x modern_industrialization:silicon_battery"
        ],
        ["ae2:dense_energy_cell"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "6x #c:rods/certus_quartz",
            "8x #c:wires/aluminum",
            "4x #c:plates/iron",
            "2x ae2:fluix_crystal",
            "ae2:calculation_processor",
            "extendedae:threshold_level_emitter"
        ],
        ["ae2:network_tool"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "2x #c:wires/aluminum",
            "ae2:calculation_processor",
            "ae2:fluix_crystal",
            "#c:rods/certus_quartz"
        ],
        ["ae2:level_emitter"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "4x #c:wires/aluminum",
            "3x ae2:quartz_glass",
            "6x ae2:certus_quartz_crystal",
            ["ae2:certus_quartz_cutting_knife", 0]
        ],
        ["12x ae2:quartz_fiber"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "4x #c:wires/copper",
            "#c:rods/wooden",
            "2x ae2:calculation_processor",
            "6x ae2:certus_quartz_crystal",
            "2x modern_industrialization:motor"
        ],
        ["ae2:certus_quartz_cutting_knife"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "#c:stones",
            "6x ae2:certus_quartz_crystal",
            ["ae2:certus_quartz_cutting_knife", 0]
        ],
        ["16x ae2:cable_anchor"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "#ae2:illuminated_panel",
            "2x ae2:fluix_smart_dense_cable",
            "4x ae2:fluix_crystal"
        ],
        ["ae2:me_p2p_tunnel"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "ae2:formation_core",
            "ae2:annihilation_core",
            "#ae2:illuminated_panel",
            "4x ae2:logic_processor"
        ],
        ["ae2:terminal"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "ae2:formation_core",
            "ae2:annihilation_core",
            "4x ae2:logic_processor",
            "4x #c:plates/aluminum",
        ],
        ["ae2:crafting_unit"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "ae2:crafting_unit",
            "minecraft:crafting_table",
            "4x #c:rods/aluminum",
            "4x ae2:quartz_glass",
        ],
        ["ae2:molecular_assembler"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "2x ae2:engineering_processor",
            "ae2:crafting_unit",
        ],
        ["ae2:crafting_accelerator"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "2x ae2:calculation_processor",
            "ae2:crafting_unit",
            "advanced_ae:import_export_bus_part",
        ],
        ["ae2:pattern_provider"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "2x ae2:calculation_processor",
            "#ae2:illuminated_panel",
            "2x ae2:formation_core",
        ],
        ["ae2:pattern_encoding_terminal"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "advanced_ae:throughput_monitor",
            "2x #c:rods/aluminum",
            "4x ae2:fluix_crystal",
        ],
        ["advanced_ae:throughput_monitor_configurator"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "2x kubejs:cell_half",
            "2x ae2:quartz_glass",
            "2x #c:gems/certus_quartz",
            "2x #c:plates/aluminum",
            "modern_industrialization:electronic_circuit",
        ],
        ["ae2:blank_pattern"],
        [["modern_industrialization:polyethylene", 250]],
        tier2token
    );
    // #endregion

    // #region tier 4 recipes
        ae_processor("advanced_ae:printed_quantum_processor", "advanced_ae:quantum_processor", tier3token)

    // #endregion

    // #region tier 5 recipes
        ae_processor("extendedae:concurrent_processor_print","extendedae:concurrent_processor", tier4token)
    // #endregion

    //default recipes removal
    event.forEachRecipe({output:craft_removal_list}, r => {
        event.remove({output: r.getOriginalRecipeResult()})
    })

});