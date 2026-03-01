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
                miInputs = miInputs.concat([[args.mold, 1, 0]])
                break;
            case "immersiveengineering:mold_packing_4":
                machine = "modern_industrialization:packer"
                miInputs = miInputs.concat([[args.mold, 1, 0]])
                break;
            default :
                miInputs = miInputs.concat([[args.mold, 1, 0]])
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

    function aePressRecipe(input, output, mold, energy) {
        iePressCraft(event, {
            inputItems:[input],
            outputItems:[output],
            mold: {item : mold},
            energy: energy,
            compatOff:true
        })
    }

    function aePressBlueprintRecipe(blueprint, bpTier, color) {
        pressBlueprintRecipe(blueprint, bpTier, color, bpTier)
    }

    function pressBlueprintRecipe(blueprint, bpTier, color, name) {
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
                components: { "immersiveengineering:blueprint": bpTier, "minecraft:item_name": "{'text':'" + name + "','color':'" + color + "'}" }
            }
        });
    }

    function pressBlueprintRecipeWithInput(blueprint, input, bpTier, color, name) {
        event.custom({
            type: "immersiveengineering:metal_press",
            energy: 3200,
            input: {
                basePredicate:{item: input},
                count: 1
            },
            mold: blueprint,
            result: {
                id: "immersiveengineering:blueprint",
                count: 1,
                components: { "immersiveengineering:blueprint": bpTier, "minecraft:item_name": "{'text':'" + name + "','color':'" + color + "'}" }
            }
        });
    }

    aePressBlueprintRecipe("kubejs:mysterious_blueprint", tier1bp, '#84b9ff')
    aePressBlueprintRecipe("kubejs:storage_blueprint", tier2bp, '#fff678')
    aePressBlueprintRecipe("kubejs:automation_blueprint", tier3bp, '#8de8ff')
    aePressBlueprintRecipe("kubejs:quantum_blueprint", tier4bp, '#c795ff')
    //aePressBlueprintRecipe("kubejs:divine_blueprint", tier5bp, '#abffc0')

    pressBlueprintRecipeWithInput("kubejs:divine_blueprint", "kubejs:goo_coated_blank_blueprint", tier5bp, '#abffc0', tier5bp)

    pressBlueprintRecipe("modern_industrialization:guidebook", "MI tools", '#ccac7c', "MI Tools Blueprint")




    // processors
    aePressRecipe([{"tag": "c:ingots/silicon"}, 2], [{id :"ae2:printed_silicon"}, 1], "ae2:silicon_press", 3200);
    aePressRecipe([{"tag": "c:ingots/gold"}, 2], [{id :"ae2:printed_logic_processor"}, 1], "ae2:logic_processor_press", 3200);
    aePressRecipe([{"tag": "c:gems/certus_quartz"}, 2], [{id :"ae2:printed_calculation_processor"}, 1], "ae2:calculation_processor_press", 3200);
    aePressRecipe([{"tag": "c:ingots/aluminum"}, 2], [{id :"ae2:printed_engineering_processor"}, 1], "ae2:engineering_processor_press", 3200);
    aePressRecipe([{"item": "advanced_ae:quantum_alloy"}, 2], [{id :"advanced_ae:printed_quantum_processor"}, 1], "advanced_ae:quantum_processor_press", 3200);
    aePressRecipe([{"item": "megacells:sky_steel_ingot"}, 2], [{id :"megacells:printed_accumulation_processor"}, 1], "megacells:accumulation_processor_press", 3200);

    //custom stuff
    aePressRecipe([{"tag": "c:plates/iron"}, 2], [{id :"kubejs:cell_half"}, 1], "kubejs:cell_press", 3200);
    aePressRecipe([{"tag": "c:plates/iron"}, 2], [{id :"kubejs:core_hull"}, 1], "kubejs:core_press", 3200);

    iePressCraft(event, {
        inputItems:[[{"tag": "minecraft:logs"}, 3]],
        outputItems:[[{id :"minecraft:chest"}, 1]],
        mold: {item : "modern_industrialization:steel_ring"},
        energy: 3200,
        compatOff:true
    })

    iePressCraft(event, {
        inputItems:[[{"tag": "minecraft:logs"}, 3]],
        outputItems:[[{id :"minecraft:barrel"}, 1]],
        mold: {item : "modern_industrialization:steel_rod"},
        energy: 3200,
        compatOff:true
    })

})