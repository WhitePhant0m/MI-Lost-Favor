/**
 * IE metal press recipe
 *  - `args`:
 *      - `inputItems` : Array (max 1 elements) - each element looks like this : [{ tag|item : name }, amount], amount defaults to 1 if not specified
 *      - `outputItems` : Array (max 1 elements) - each element looks like this : [{ id : name }, amount], amount defaults to 1 if not specified
 *      - `mold` : mold - {item: name}
 *      - `energy` : energy, defaults to 3200
 *      - --------
 *      - `removeRecipe`: Boolean - if true: removes all other default recipes with this outputs
 *      - `compatOff`: Boolean - if true : function will NOT add compatible mi recipe, if not specified then recipe WILL be added
*/
const iePressCraft = (event, args) => {
    let recipe = {
        type: "immersiveengineering:metal_press",
        energy: args.energy || 3200,
        mold: args.mold.item,
        input: Object.assign({},{"basePredicate": args.inputItems[0][0]}, {count:args.inputItems[0][1] || 1}),
        result: Object.assign({},args.outputItems[0][0], {count: args.outputItems[0][1] || 1}),
    }
    if(!args.compatOff){
        let machine = "modern_industrialization:packer"
        let miInputs = args.inputItems
        switch (args.mold.item) {
            case "immersiveengineering:mold_unpacking":
                machine = "modern_industrialization:unpacker"
                break;
            case "immersiveengineering:mold_rod":
                machine = "modern_industrialization:cutting_machine"
                break;
            case "immersiveengineering:mold_plate":
                machine = "modern_industrialization:compressor"
                break;
            case "immersiveengineering:mold_wire":
                machine = "modern_industrialization:wiremill"
                break;
            case "immersiveengineering:mold_packing_9":
                machine = "modern_industrialization:packer"
                miInputs.concat([[args.mold, 1, 0]])
                break;
            case "immersiveengineering:mold_packing_4":
                machine = "modern_industrialization:packer"
                miInputs.concat([[args.mold, 1, 0]])
                break;
        }
        miMachineCraft(event, {energy:2, time:200, machine:machine,
            inputItems:miInputs,
            outputItems:[[{item:recipe.result.id}, recipe.result.count]]
        })
    }
    if(args.removeRecipe){event.remove({output: args.outputItems[0][0].id})}
    event.custom(recipe)
}

ServerEvents.recipes(event => {

    //ae stuff

    var tier1bp = 'Mysterious Blueprint'
    var tier2bp = "Storage Blueprint"
    var tier3bp = "Automation Blueprint"
    var tier4bp = "Quantum Blueprint"
    var tier5bp = "Divine Blueprint"

    function press_recipe(input, output, mold, energy) {
        iePressCraft(event, {
            inputItems:[input],
            outputItems:[output],
            mold: {item : mold},
            energy: energy
        })
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
    press_recipe([{"tag": "c:ingots/silicon"}, 2], [{id :"ae2:printed_silicon"}, 1], "ae2:silicon_press", 3200);
    press_recipe([{"tag": "c:ingots/gold"}, 2], [{id :"ae2:printed_logic_processor"}, 1], "ae2:logic_processor_press", 3200);
    press_recipe([{"tag": "c:gems/certus_quartz"}, 2], [{id :"ae2:printed_calculation_processor"}, 1], "ae2:calculation_processor_press", 3200);
    press_recipe([{"tag": "c:ingots/aluminum"}, 2], [{id :"ae2:printed_engineering_processor"}, 1], "ae2:engineering_processor_press", 3200);
    press_recipe([{"item": "advanced_ae:quantum_alloy"}, 2], [{id :"advanced_ae:printed_quantum_processor"}, 1], "advanced_ae:quantum_processor_press", 3200);
    press_recipe([{"item": "megacells:sky_steel_ingot"}, 2], [{id :"megacells:printed_accumulation_processor"}, 1], "megacells:accumulation_processor_press", 3200);

    //custom stuff
    press_recipe([{"tag": "c:plates/iron"}, 2], [{id :"kubejs:cell_half"}, 1], "kubejs:cell_press", 3200);
    press_recipe([{"tag": "c:plates/iron"}, 2], [{id :"kubejs:core_hull"}, 1], "kubejs:core_press", 3200);

})