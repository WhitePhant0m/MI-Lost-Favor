ServerEvents.recipes(event => {

    let craft_removal_list = [

    ]

    function blueprint_recipe(inputs, output, bpType) {
        let recipe = {
            type: "immersiveengineering:blueprint",
            inputs: [],
            category: bpType,
            result: {
                basePredicate: output[0] || output,
                count: output[1] || 1
            }};
        inputs.forEach(input => {
            let i = {
                basePredicate: input[0],
                count: input[1]
            };
            recipe.inputs.push(i);
        });
        event.custom(recipe);
        craft_removal_list.push(output[0].item || output.item || "#" + output[0].tag || "#" + output.tag)
    }


    blueprint_recipe(
        [
            [{ "tag": "c:plates/iron" }, 4],
            [{ "tag": "c:gears/steel" }, 1],
            [{ "tag": "c:ingots/copper" }, 2],
            [{ "item": "modern_industrialization:rubber_sheet" }, 2]
        ],
        [{ "item": 'immersiveengineering:component_iron' }, 2],
        "components"
    );

    blueprint_recipe(
        [
            [{ "tag": "c:plates/steel" }, 4],
            [{ "tag": "c:gears/steel" }, 1],
            [{ "tag": "c:ingots/bronze" }, 2],
            [{ "item": "modern_industrialization:rubber_sheet" }, 2]
        ],
        [{ "item": 'immersiveengineering:component_steel' }, 2],
        "components"
    );

    blueprint_recipe(
        [
            [{ "tag": "c:wires/electrum" }, 2],
            [{ "tag": "c:gems/quartz" }, 1],
            [{ "tag": "c:dusts/redstone" }, 2],
            [{ "item": "modern_industrialization:analog_circuit_board" }, 1]
        ],
        [{ "item": 'immersiveengineering:component_electronic' }, 2],
        "components"
    );


    //default recipes removal
    event.forEachRecipe({output:craft_removal_list}, r => {
        event.remove({output: r.getOriginalRecipeResult()})
    })

})



