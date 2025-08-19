ServerEvents.recipes(event => {

    let craft_removal_list = [

    ]
    
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

    //MI stuff
    assembler_recipe(
        8, 200,
        [
            "4x modern_industrialization:tin_cable",
            "modern_industrialization:portable_storage_unit",
            "modern_industrialization:frostproof_machine_casing",
            "kubejs:tempered_glass",
        ],
        ["modern_industrialization:basic_machine_hull"],
    );



    //IE stuff
    assembler_recipe(
        8, 200,
        [
            "4x #c:plates/iron",
            "2x #c:ingots/copper",
            "2x modern_industrialization:rubber_sheet",
            "#c:gears/steel",
        ],
        ["2x immersiveengineering:component_iron"],
    );

    assembler_recipe(
        8, 200,
        [
            "4x #c:plates/steel",
            "2x #c:ingots/bronze",
            "2x modern_industrialization:rubber_sheet",
            "#c:gears/steel",
        ],
        ["2x immersiveengineering:component_steel"],
    );

    assembler_recipe(
        8, 200,
        [
            "#c:wires/electrum",
            "#c:gems/quartz",
            "modern_industrialization:analog_circuit_board",
            "#c:dusts/redstone",
        ],
        ["immersiveengineering:component_electronic"],
    );

    event.forEachRecipe({output:craft_removal_list}, r => {
        event.remove({output: r.getOriginalRecipeResult()})
    })

})