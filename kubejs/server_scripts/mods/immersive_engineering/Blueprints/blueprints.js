/**
 * IE blueprint recipe
 *  - `args`:
 *      - `inputItems` : an array of arrays of the following structure : [{ tag|item : name }, amount], items defaults to 1 item
 *      - `outputItems` : an array of arrays of the following structure : [{ item : name }, amount], items defaults to 1 item
 *      - `category` : blueprint category
 *      - --------
 *      - `removeRecipe`: Boolean - if true: removes all other default recipes with this outputs
 *      - `compatOff`: Boolean - if true : function will NOT add compatible mi recipe, if not specified then recipe WILL be added
*/
const ieBlueprintCraft = (event, args) => {
    let result = JSON.parse(JSON.stringify(args.outputItems[0][0]))
    //console.log(result);
    if (result.hasOwnProperty("item")){
        result["id"] = result["item"]
        delete result["item"]
    }
    //console.log(result);
    let recipe = {
        type: "immersiveengineering:blueprint",
        inputs: [],
        category: args.category,
        result: Object.assign({} ,result, {count: args.outputItems[0][1] || 1}),
    }
    args.inputItems.forEach((input) => {recipe.inputs.push(Object.assign({},{"basePredicate": input[0]}, {count:input[1] || 1}))})
    if(!args.compatOff){
        miMachineCraft(event, {energy:2, time:200, machine:"modern_industrialization:assembler",
            inputItems:args.inputItems,
            outputItems:[[{item:recipe.result.id}, recipe.result.count]]
        })
    }
    if(args.removeRecipe){event.remove({output: args.outputItems[0][0].item})}
    //console.log(recipe);
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



