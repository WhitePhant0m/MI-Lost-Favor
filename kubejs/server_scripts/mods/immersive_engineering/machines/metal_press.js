ServerEvents.recipes(event => {

    //ae stuff

    var tier1bp = 'Mysterious Blueprint'
    var tier2bp = "Storage Blueprint"
    var tier3bp = "Automation Blueprint"
    var tier4bp = "Quantum Blueprint"
    var tier5bp = "Divine Blueprint"

    function press_recipe(input, output, mold, energy) {
        event.custom({
            type: "immersiveengineering:metal_press",
            energy: energy,
            input: {
                basePredicate: input[0],
                count: input[1]
            },
            mold: mold,
            result: {
                item: output[0],
                count: output[1]
            }
        });
    }

    function press_blueprint_recipe(blueprint, bpTier, color) {
        event.custom({
            type: "immersiveengineering:metal_press",
            energy: 3200,
            input: {
                basePredicate:{item: "kubejs:blank_blueprint"},
                count: 1
            },
            mold: blueprint,
            result: {
                id: "immersiveengineering:blueprint",
                count: 1,
                components: { "immersiveengineering:blueprint": bpTier, "minecraft:item_name": "{'text':'" + bpTier + "','color':'" + color + "'}" }
            }
        });
    }

    press_blueprint_recipe("kubejs:mysterious_blueprint", tier1bp, '#84b9ff')
    press_blueprint_recipe("kubejs:storage_blueprint", tier2bp, '#fff678')
    press_blueprint_recipe("kubejs:automation_blueprint", tier3bp, '#8de8ff')
    press_blueprint_recipe("kubejs:quantum_blueprint", tier4bp, '#c795ff')
    press_blueprint_recipe("kubejs:divine_blueprint", tier5bp, '#abffc0')




    // processors
    press_recipe([{"tag": "c:ingots/silicon"}, 2], ["ae2:printed_silicon", 1], "ae2:silicon_press", 3200);
    press_recipe([{"tag": "c:ingots/gold"}, 2], ["ae2:printed_logic_processor", 1], "ae2:logic_processor_press", 3200);
    press_recipe([{"tag": "c:gems/certus_quartz"}, 2], ["ae2:printed_calculation_processor", 1], "ae2:calculation_processor_press", 3200);
    press_recipe([{"tag": "c:ingots/aluminum"}, 2], ["ae2:printed_engineering_processor", 1], "ae2:engineering_processor_press", 3200);
    press_recipe([{"item": "advanced_ae:quantum_alloy"}, 2], ["advanced_ae:printed_quantum_processor", 1], "advanced_ae:quantum_processor_press", 3200);
    press_recipe([{"item": "megacells:sky_steel_ingot"}, 2], ["megacells:printed_accumulation_processor", 1], "megacells:accumulation_processor_press", 3200);

    //custom stuff
    press_recipe([{"tag": "c:plates/iron"}, 2], ["kubejs:cell_half", 1], "kubejs:cell_press", 3200);
    press_recipe([{"tag": "c:plates/iron"}, 2], ["kubejs:core_hull", 1], "kubejs:core_press", 3200);

})