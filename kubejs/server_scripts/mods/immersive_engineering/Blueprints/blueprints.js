/**
 * IE blueprint recipe
 *  - `args`:
 *      - `inputItems` : an array of arrays of the following structure : [{ tag|item : name }, amount], items defaults to 1 item
 *      - `outputItems` : an array of arrays of the following structure : [{ item : name }, amount], items defaults to 1 item
 *      - `category` : blueprint category
 *      - --------
 *      - `removeRecipe`: self explanatory
 *      - `compatOff`: doesn't add MI recipe if true
*/
const ieBlueprintCraft = (event, args) => {
    let recipe = {
        type: "immersiveengineering:blueprint",
        inputs: [],
        category: args.category,
        result: Object.assign({},args.outputItems[0][0], {count: args.outputItems[0][1] || 1}),
    }
    args.inputItems.forEach((input) => {recipe.inputs.push(Object.assign({},{"basePredicate": input[0]}, {count:input[1] || 1}))})
    if(!args.compatOff){
        miMachineCraft(event, {energy:2, time:200, machine:"modern_industrialization:assembler",
            inputItems:args.inputItems,
            outputItems:[[{item:recipe.result.item}, recipe.result.count]]
        })
    }
    if(args.removeRecipe){event.remove({output: args.outputItems[0][0].item})}
    event.custom(recipe)
}

ServerEvents.recipes(event => {

    function blueprint_recipe(inputs, output, bpCategory) {
        ieBlueprintCraft(event, {
            inputItems: inputs,
            outputItems: [output],
            category: bpCategory,
            removeRecipe: true
        })
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

})



