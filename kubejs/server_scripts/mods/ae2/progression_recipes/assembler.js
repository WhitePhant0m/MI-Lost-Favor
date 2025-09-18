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
    var tier4DefaultEnergy = 20
    var tier5DefaultEnergy = 28

    var tier1DefaultTime = 100
    var tier2DefaultTime = 200
    var tier3DefaultTime = 400
    var tier4DefaultTime = 800
    var tier5DefaultTime = 1600

    let craft_removal_list = [
        "extendedae:quartz_blend",
        "ae2:quartz_glass",
        "ae2:quartz_vibrant_glass",
        "extendedae:caner"
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
    function ae_item_cell (cellComponent, output, token, housing) {
        housing = housing || "ae2:item_cell_housing"
        var inputs = [
            "2x ae2:quartz_glass",
            housing,
            cellComponent
        ];
        var fluids = [
            ["modern_industrialization:molten_redstone", 250],
            ["modern_industrialization:soldering_alloy", 100]
        ];
        assembler_recipe(16, 200, inputs, [output], fluids, token);
    }

    function ae_fluid_cell (cellComponent, output, token, housing) {
        housing = housing || "ae2:fluid_cell_housing"
        var inputs = [
            "2x ae2:quartz_glass",
            housing,
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
    ae_cell_component("ae2:cell_component_16k", "#c:dusts/sodium", "ae2:engineering_processor", "ae2:cell_component_64k", tier2token)
    ae_cell_component("ae2:cell_component_64k", "#c:dusts/ruby", "ae2:engineering_processor", "ae2:cell_component_256k", tier2token)

    ae_cell_component("ae2:cell_component_256k", "ae2:sky_dust", "megacells:accumulation_processor", "megacells:cell_component_1m", tier3token)
    ae_cell_component("megacells:cell_component_1m", "advanced_ae:quantum_infused_dust", "megacells:accumulation_processor", "megacells:cell_component_4m", tier3token)
    ae_cell_component("megacells:cell_component_4m", "advanced_ae:quantum_infused_dust", "megacells:accumulation_processor", "megacells:cell_component_16m", tier3token)
    ae_cell_component("ae2:fluix_pearl", "advanced_ae:quantum_infused_dust", "megacells:accumulation_processor", "ae2:spatial_cell_component_2", tier3token)
    ae_cell_component("ae2:spatial_cell_component_2", "advanced_ae:quantum_infused_dust", "advanced_ae:quantum_processor", "ae2:spatial_cell_component_16", tier3token)
    ae_cell_component("ae2:spatial_cell_component_16", "advanced_ae:quantum_infused_dust", "extendedae:concurrent_processor", "ae2:spatial_cell_component_128", tier3token)
    ae_cell_component("ae2:cell_component_256k", "advanced_ae:quantum_infused_dust", "megacells:accumulation_processor", "bigger_ae2:quantum_cell_component", tier3token)
    ae_cell_component("ae2:singularity", "advanced_ae:quantum_infused_dust", "bigger_ae2:quantum_cell_component", "bigger_ae2:digital_singularity_cell_component", tier3token)

    ae_cell_component("extendedae:concurrent_processor", "advanced_ae:quantum_infused_dust", "bigger_ae2:digital_singularity_cell_component", "megacells:bulk_cell_component", tier4token)
    ae_cell_component("megacells:cell_component_16m", "extendedae:entro_dust", "extendedae:concurrent_processor", "megacells:cell_component_64m", tier4token)
    ae_cell_component("megacells:cell_component_64m", "extendedae:entro_dust", "extendedae:concurrent_processor", "megacells:cell_component_256m", tier4token)
    // #endregion

    // #region cells
    ae_item_cell("ae2:spatial_cell_component_2", "ae2:spatial_storage_cell_2", tier3token)
    ae_item_cell("ae2:spatial_cell_component_16", "ae2:spatial_storage_cell_16", tier3token)
    ae_item_cell("ae2:spatial_cell_component_128", "ae2:spatial_storage_cell_128", tier4token)

    ae_item_cell("ae2:cell_component_1k", "ae2:item_storage_cell_1k", tier2token)
    ae_item_cell("ae2:cell_component_4k", "ae2:item_storage_cell_4k", tier3token)
    ae_item_cell("ae2:cell_component_16k", "ae2:item_storage_cell_16k", tier3token)
    ae_item_cell("ae2:cell_component_64k", "ae2:item_storage_cell_64k", tier3token)
    ae_item_cell("ae2:cell_component_256k", "ae2:item_storage_cell_256k", tier3token)

    ae_item_cell("megacells:cell_component_1m", "megacells:item_storage_cell_1m", tier3token, "megacells:mega_item_cell_housing")
    ae_item_cell("megacells:cell_component_4m", "megacells:item_storage_cell_4m", tier3token, "megacells:mega_item_cell_housing")
    ae_item_cell("megacells:cell_component_16m", "megacells:item_storage_cell_16m", tier3token, "megacells:mega_item_cell_housing")
    ae_item_cell("bigger_ae2:quantum_cell_component", "bigger_ae2:quantum_item_storage_cell", tier3token, "bigger_ae2:advanced_item_cell_housing")
    ae_item_cell("bigger_ae2:digital_singularity_cell_component", "bigger_ae2:digital_singularity_item_storage_cell", tier3token, "bigger_ae2:advanced_item_cell_housing")

    ae_item_cell("megacells:cell_component_64m", "megacells:item_storage_cell_64m", tier4token, "megacells:mega_item_cell_housing")
    ae_item_cell("megacells:cell_component_256m", "megacells:item_storage_cell_256m", tier4token, "megacells:mega_item_cell_housing")

    ae_fluid_cell("ae2:cell_component_1k", "ae2:fluid_storage_cell_1k", tier2token)
    ae_fluid_cell("ae2:cell_component_4k", "ae2:fluid_storage_cell_4k", tier3token)
    ae_fluid_cell("ae2:cell_component_16k", "ae2:fluid_storage_cell_16k", tier3token)
    ae_fluid_cell("ae2:cell_component_64k", "ae2:fluid_storage_cell_64k", tier3token)
    ae_fluid_cell("ae2:cell_component_256k", "ae2:fluid_storage_cell_256k", tier3token)

    ae_fluid_cell("megacells:cell_component_1m", "megacells:fluid_storage_cell_1m", tier3token, "megacells:mega_item_cell_housing")
    ae_fluid_cell("megacells:cell_component_4m", "megacells:fluid_storage_cell_4m", tier3token, "megacells:mega_item_cell_housing")
    ae_fluid_cell("megacells:cell_component_16m", "megacells:fluid_storage_cell_16m", tier3token, "megacells:mega_item_cell_housing")
    ae_fluid_cell("bigger_ae2:quantum_cell_component", "bigger_ae2:quantum_fluid_storage_cell", tier3token, "bigger_ae2:advanced_fluid_cell_housing")
    ae_fluid_cell("bigger_ae2:digital_singularity_cell_component", "bigger_ae2:digital_singularity_fluid_storage_cell", tier3token, "bigger_ae2:advanced_fluid_cell_housing")

    ae_fluid_cell("megacells:cell_component_64m", "megacells:fluid_storage_cell_64m", tier4token, "megacells:mega_item_cell_housing")
    ae_fluid_cell("megacells:cell_component_256m", "megacells:fluid_storage_cell_256m", tier4token, "megacells:mega_item_cell_housing")

    cell_upgrade("ae2:item_storage_cell_1k", "ae2:cell_component_4k", "#c:dusts/fluix", "ae2:item_storage_cell_4k", tier3token)
    cell_upgrade("ae2:item_storage_cell_4k", "ae2:cell_component_16k", "#c:dusts/aluminum", "ae2:item_storage_cell_16k", tier3token)
    cell_upgrade("ae2:item_storage_cell_16k", "ae2:cell_component_64k", "#c:dusts/sodium", "ae2:item_storage_cell_64k", tier3token)
    cell_upgrade("ae2:item_storage_cell_64k", "ae2:cell_component_256k", "#c:dusts/ruby", "ae2:item_storage_cell_256k", tier3token)

    cell_upgrade("ae2:fluid_storage_cell_1k", "ae2:cell_component_4k", "#c:dusts/fluix", "ae2:fluid_storage_cell_4k", tier3token)
    cell_upgrade("ae2:fluid_storage_cell_4k", "ae2:cell_component_16k", "#c:dusts/aluminum", "ae2:fluid_storage_cell_16k", tier3token)
    cell_upgrade("ae2:fluid_storage_cell_16k", "ae2:cell_component_64k", "#c:dusts/sodium", "ae2:fluid_storage_cell_64k", tier3token)
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

    // #region reversable_recipes
    ae_assembler_knife_reversable_recipe("advanced_ae:adv_pattern_provider_part", "advanced_ae:adv_pattern_provider")
    ae_assembler_knife_reversable_recipe("ae2:cable_pattern_provider", "ae2:pattern_provider")

    ae_assembler_knife_reversable_recipe("ae2:toggle_bus", "ae2:inverted_toggle_bus")

    ae_assembler_knife_reversable_recipe("ae2:cable_energy_acceptor", "ae2:energy_acceptor")

    ae_assembler_knife_reversable_recipe("ae2:cable_interface", "ae2:interface")
    ae_assembler_knife_reversable_recipe("extendedae:ex_interface_part", "extendedae:ex_interface")
    ae_assembler_knife_reversable_recipe("megacells:cable_mega_interface", "megacells:mega_interface")
    ae_assembler_knife_reversable_recipe("extendedae:oversize_interface_part", "extendedae:oversize_interface")
    // #endregion

    // #region cell housings
    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
           "2x kubejs:cell_half",
           "2x modern_industrialization:aluminum_plate",
        ],
        ["ae2:item_cell_housing"],
        [["modern_industrialization:soldering_alloy", 500]],
        tier3token
    )

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
           "2x kubejs:cell_half",
           "2x modern_industrialization:copper_plate",
        ],
        ["ae2:fluid_cell_housing"],
        [["modern_industrialization:soldering_alloy", 500]],
        tier3token
    )

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
           "2x kubejs:cell_half",
           "4x megacells:sky_steel_ingot",
        ],
        ["megacells:mega_item_cell_housing"],
        [["modern_industrialization:soldering_alloy", 500]],
        tier3token
    )

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
           "2x kubejs:cell_half",
           "4x megacells:sky_bronze_ingot",
        ],
        ["megacells:mega_fluid_cell_housing"],
        [["modern_industrialization:soldering_alloy", 500]],
        tier3token
    )

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
           "2x kubejs:cell_half",
           "8x modern_industrialization:gold_plate",
        ],
        ["bigger_ae2:advanced_item_cell_housing"],
        [["modern_industrialization:soldering_alloy", 500]],
        tier3token
    )

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
           "2x kubejs:cell_half",
           "8x modern_industrialization:titanium_plate",
        ],
        ["bigger_ae2:advanced_fluid_cell_housing"],
        [["modern_industrialization:soldering_alloy", 500]],
        tier3token
    )

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
           "2x kubejs:cell_half",
           "8x modern_industrialization:titanium_plate",
           "4x ars_nouveau:source_gem"
        ],
        ["bigger_ae2:advanced_source_cell_housing"],
        [["modern_industrialization:soldering_alloy", 500]],
        tier3token
    )
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

    assembler_recipe(
        tier2DefaultEnergy, tier2DefaultTime,
        [
            "ae2:fluid_cell_housing",
            "ae2:item_cell_housing",
            "#ae2:glass_cable",
            "ae2:logic_processor",
        ],
        ["megacells:cell_dock"],
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

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "ae2:calculation_processor",
            "advanced_ae:import_export_bus_part",
            "4x #c:plates/aluminum",
            "6x ae2:fluix_glass_cable",
        ],
        ["ae2:io_port"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "ae2:engineering_processor",
            "2x ae2:quartz_glass",
            "4x #c:plates/aluminum",
            "ae2:fluix_block",
        ],
        ["ae2:growth_accelerator"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "ae2:pattern_provider",
            "ae2:formation_core",
            "ae2:fluix_block",
        ],
        ["advanced_ae:small_adv_pattern_provider"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "ae2:blank_pattern",
            "ae2:formation_core",
            "2x ae2:fluix_crystal",
        ],
        ["advanced_ae:adv_pattern_encoder"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "ae2:formation_core",
            "ae2:annihilation_core",
            "4x #c:plates/aluminum",
            "advanced_ae:import_export_bus_part"
        ],
        ["ae2:interface"],
        [],
        tier2token
    );


    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "4x ae2:calculation_processor",
            "4x ae2:engineering_processor",
            "ae2:interface",
            "4x #c:plates/stainless_steel",
        ],
        ["extendedae:ex_interface"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "ae2:quartz_fixture",
            "16x #c:wires/copper",
            "4x #c:plates/iron",
            "ae2:fluix_block"
        ],
        ["ae2:crystal_resonance_generator"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "megacells:cell_dock",
            "ae2:toggle_bus",
            "4x #c:plates/iron",
            "ae2:fluix_block"
        ],
        ["ae2:chest"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "ae2:drive",
            "2x ae2:capacity_card",
            "ae2:formation_core",
        ],
        ["extendedae:ex_drive"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "ae2:charger",
            "2x ae2:capacity_card",
            "ae2:annihilation_core",
        ],
        ["extendedae:ex_charger"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "advanced_ae:small_adv_pattern_provider",
            "2x ae2:crafting_accelerator",
            "ae2:engineering_processor",
            "4x #c:plates/aluminum",
        ],
        ["merequester:requester"],
        [],
        tier2token
    );

    assembler_recipe(
        tier3DefaultEnergy, tier3DefaultTime,
        [
            "ae2:blank_pattern",
            "ae2:certus_quartz_crystal",
        ],
        ["ae2:view_cell"],
        [],
        tier2token
    );
    // #endregion

    // #region tier 4 recipes

    ae_processor("advanced_ae:printed_quantum_processor", "advanced_ae:quantum_processor", tier3token)

    ae_card("ae2:advanced_card", "ae2:matter_ball", "megacells:compression_card", tier3token)

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "ae2:wireless_receiver",
            "advanced_ae:quantum_processor",
            "4x ae2:fluix_glass_cable",
        ],
        ["ae2:wireless_access_point"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "2x #c:plates/stainless_steel",
            "ae2:quartz_fiber",
            "ae2:fluix_pearl",
        ],
        ["ae2:wireless_receiver"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "advanced_ae:quantum_processor",
            "ae2:quartz_glass",
            "4x ae2:fluix_pearl",
        ],
        ["ae2:quantum_link"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "4x #c:plates/stainless_steel",
            "2x #ae2:smart_dense_cable",
            "ae2:dense_energy_cell",
        ],
        ["ae2:quantum_ring"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "bigger_ae2:digital_singularity_cell_component",
            "advanced_ae:quantum_processor",
        ],
        ["advanced_ae:quantum_storage_component"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "advanced_ae:small_adv_pattern_provider",
            "4x megacells:accumulation_processor",
        ],
        ["megacells:mega_pattern_provider"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "megacells:mega_pattern_provider",
            "advanced_ae:quantum_storage_component",
        ],
        ["extendedae:ex_pattern_provider"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "2x kubejs:cell_half",
            "advanced_ae:quantum_processor",
            "ae2:wireless_receiver",
            "6x modern_industrialization:superconductor_wire"
        ],
        ["extendedae:wireless_tool"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "4x #ae2:smart_dense_cable",
            "advanced_ae:quantum_processor",
            "2x ae2:wireless_receiver",
            "8x #c:plates/stainless_steel",
        ],
        ["2x extendedae:wireless_connect"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "ae2:quartz_glass",
            "megacells:accumulation_processor",
            "8x modern_industrialization:superconductor_wire",
            "8x modern_industrialization:cadmium_battery",
            "4x ae2:fluix_crystal"
        ],
        ["megacells:mega_energy_cell"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "extendedae:ex_interface",
            "megacells:accumulation_processor",
        ],
        ["megacells:mega_interface"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "megacells:mega_interface",
            "advanced_ae:quantum_processor",
            "4x ae2:capacity_card"
        ],
        ["extendedae:oversize_interface"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "ae2:crafting_unit",
            "2x megacells:accumulation_processor",
            "megacells:sky_steel_block"
        ],
        ["megacells:mega_crafting_unit"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "4x ae2:crafting_accelerator",
            "2x megacells:accumulation_processor",
            "megacells:sky_steel_block"
        ],
        ["megacells:mega_crafting_accelerator"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "ae2:io_port",
            "4x megacells:accumulation_processor",
            "2x ae2:speed_card"
        ],
        ["extendedae:ex_io_port"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "ae2:molecular_assembler",
            "4x megacells:accumulation_processor",
            "2x ae2:speed_card",
            "4x ae2:capacity_card"

        ],
        ["extendedae:ex_molecular_assembler"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "#extendedae:extended_pattern_provider",
            "extendedae:assembler_matrix_wall",
            "advanced_ae:quantum_processor",
        ],
        ["extendedae:assembler_matrix_pattern"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "extendedae:ex_molecular_assembler",
            "extendedae:assembler_matrix_wall",
            "advanced_ae:quantum_processor",
            "advanced_ae:shattered_singularity",
        ],
        ["extendedae:assembler_matrix_crafter"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "megacells:mega_energy_cell",
            "extendedae:assembler_matrix_wall",
            "advanced_ae:quantum_processor",
            "advanced_ae:shattered_singularity",
        ],
        ["extendedae:assembler_matrix_speed"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "4x #c:plates/stainless_steel",
            "2x ae2:fluix_crystal",
            "megacells:sky_bronze_ingot",
            "2x pastel:white_pigment"
        ],
        ["extendedae:assembler_matrix_wall"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "2x #c:plates/stainless_steel",
            "2x ae2:fluix_crystal",
            "megacells:sky_bronze_ingot",
            "2x pastel:white_pigment",
            "ae2:quartz_glass"
        ],
        ["extendedae:assembler_matrix_glass"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "pastel:pure_azurite",
            "ae2:quartz_glass",
            "megacells:sky_steel_ingot",
            "4x #c:plates/stainless_steel"
        ],
        ["extendedae:assembler_matrix_frame"],
        [],
        tier3token
    );


    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
           "megacells:printed_accumulation_processor",
           "ae2:printed_silicon",
           "3x ae2:fluix_dust"
        ],
        ["megacells:accumulation_processor"],
        [["pastel:liquid_crystal", 500]],
        tier3token
    )

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "advanced_ae:quantum_processor",
            "32x ae2:quartz_glass",
            "16x ae2:fluix_glass_cable",
            "4x ae2:fluix_block"
        ],
        ["16x ae2:spatial_pylon"],
        [["advanced_ae:quantum_infusion_source", 4000]],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "advanced_ae:quantum_processor",
            "ae2:io_port",
            "4x ae2:quartz_glass",
            "4x #c:plates/stainless_steel",
            "2x megacells:sky_steel_ingot",
        ],
        ["ae2:spatial_io_port"],
        [["advanced_ae:quantum_infusion_source", 1000]],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "ae2:advanced_card",
            "simplemagnets:advancedmagnet",
            "advanced_ae:quantum_processor",
        ],
        ["ae2wtlib:magnet_card"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "ae2:advanced_card",
            "ae2:quantum_link",
            "advanced_ae:quantum_processor",
        ],
        ["ae2wtlib:quantum_bridge_card"],
        [],
        tier3token
    );

    assembler_recipe(
        tier4DefaultEnergy, tier4DefaultTime,
        [
            "ae2:advanced_card",
            "ae2:wireless_receiver",
        ],
        ["ae2:wireless_booster"],
        [],
        tier3token
    );

    // #endregion

    // #region tier 5 recipes
    ae_processor("extendedae:concurrent_processor_print","extendedae:concurrent_processor", tier4token)

    assembler_recipe(
        tier5DefaultEnergy, tier5DefaultTime,
        [
            "extendedae:ex_pattern_provider",
            "4x extendedae:concurrent_processor",
        ],
        ["advanced_ae:adv_pattern_provider"],
        [],
        tier4token
    );

    assembler_recipe(
        tier5DefaultEnergy, tier5DefaultTime,
        [
            "ae2:spatial_cell_component_128",
            "16x extendedae:concurrent_processor",
            "4x ae2:spatial_pylon",
            "2x advanced_ae:quantum_processor",
            "4x #c:plates/stainless_steel"
        ],
        ["ae2:spatial_anchor"],
        [],
        tier4token
    );

    assembler_recipe(
        tier5DefaultEnergy, tier5DefaultTime,
        [
            "ae2:item_cell_housing",
            "16x extendedae:concurrent_processor",
            "2x ae2:quartz_glass",
            "bigger_ae2:digital_singularity_cell_component",
        ],
        ["extendedae:infinity_water_cell"],
        [["minecraft:water", 32000]],
        tier4token
    );

    assembler_recipe(
        tier5DefaultEnergy, tier5DefaultTime,
        [
            "ae2:item_cell_housing",
            "16x extendedae:concurrent_processor",
            "2x ae2:quartz_glass",
            "bigger_ae2:digital_singularity_cell_component",
        ],
        ["extendedae:infinity_cobblestone_cell"],
        [["minecraft:water", 16000], ["minecraft:lava", 16000]],
        tier4token
    );

    // #endregion

    //default recipes removal
    event.forEachRecipe({output:craft_removal_list}, r => {
        event.remove({output: r.getOriginalRecipeResult()})
    })

});